/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from 'react';

import NextLink from 'next/link';

import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Text, Heading, UnorderedList, OrderedList, ListItem, Code, Link as ChakraLink } from '@chakra-ui/react';

const HyperlinkToLinkComponent = (href: string, children: React.ReactNode) => {
  if (/kenrhee.com/g.test(href)) {
    return (
      <NextLink href={href} passHref>
        <ChakraLink>{children}</ChakraLink>
      </NextLink>
    );
  }
  return (
    <ChakraLink href={href} isExternal color="blue.500">
      {children}
    </ChakraLink>
  );
};

const unTag = (node: any) => {
  const UnTaggedChildren = documentToReactComponents(node, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => children,
      [BLOCKS.LIST_ITEM]: (_node, children) => children,
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
        const { uri } = node.data;
        return HyperlinkToLinkComponent(uri, children);
      },
    },
  });
  return UnTaggedChildren;
};

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
      if (node.content.length === 1 && node.content[0].marks.some((mark: any) => mark.type === 'code')) {
        return (
          <pre>
            <Code display="block" p={4} mb={6}>
              {node.content[0].value}
            </Code>
          </pre>
        );
      }
      if (node.content.length === 1 && !node.content[0].value) {
        return null;
      }
      return <Text mb={6}>{children}</Text>;
    },
    [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => (
      <Heading as="h3" fontSize={26} mt={12} mb={6}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_4]: (_node: any, children: React.ReactNode) => (
      <Heading as="h4" fontSize={20} mt={8} mb={3}>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_5]: (_node: any, children: React.ReactNode) => (
      <Heading as="h5" fontSize={16} mt={4} mb={2}>
        {children}
      </Heading>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => <UnorderedList mb={6}>{children}</UnorderedList>,
    [BLOCKS.OL_LIST]: (_node: any, children: React.ReactNode) => <OrderedList mb={6}>{children}</OrderedList>,
    [BLOCKS.LIST_ITEM]: (node: any) => <ListItem my={2}>{unTag(node)}</ListItem>,
    [BLOCKS.QUOTE]: (_node: any, children: React.ReactNode) => (
      <Text as="blockquote" borderLeft="6px solid rgba(229, 235, 237)" pl="14px">
        {children}
      </Text>
    ),
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => {
      const { uri } = node.data;
      return HyperlinkToLinkComponent(uri, children);
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <i>{text}</i>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => <code>{text}</code>,
  },
};

// https://github.com/contentful/rich-text/issues/126
// https://github.com/contentful/rich-text/issues/105
