import React from 'react';

import NextLink from 'next/link';

import { Link, Box, Heading, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  subTitle: string;
  href: string;
}

const PostCard = ({ title, subTitle, href }: Props) => {
  return (
    <NextLink passHref href={href}>
      <Link>
        <Heading as="h4" size="md" mb={2}>
          {title}
        </Heading>
        <Text>{subTitle}</Text>
      </Link>
    </NextLink>
  );
};

export default PostCard;
