import React from 'react';

import NextLink from 'next/link';
import { useRouter } from 'next/router';

import styled from '@emotion/styled';

import { Box, Container, HStack, Spacer, Link, IconButton, useColorMode, useToken } from '@chakra-ui/react';

import Sun from '@/components/icons/Sun';
import Moon from '@/components/icons/Moon';

const Navs = [
  {
    textContent: 'blog',
    href: '/blog',
  },
  {
    textContent: 'TIL',
    href: '/til',
  },
  {
    textContent: 'Snippets',
    href: '/snippets',
  },
];

const Header = () => {
  const [whiteAlpha800, brandBlack] = useToken('colors', ['whiteAlpha.800', 'brand.black']);

  const { colorMode, toggleColorMode } = useColorMode();

  const backgroundColor = colorMode === 'light' ? whiteAlpha800 : brandBlack;

  const router = useRouter();

  const currentRoute = router.pathname;

  return (
    <HeaderContainer as="header" backgroundColor={backgroundColor}>
      <Container as="nav" maxW="container.md">
        <HStack>
          <HStack>
            <NextLink passHref href="/">
              <Link fontSize="4xl" fontWeight="bold">
                🐟
              </Link>
            </NextLink>
          </HStack>
          <Spacer />
          <HStack>
            {Navs.map((nav) => (
              <NextLink key={nav.href} passHref href={nav.href}>
                <Link px={4} py={6} textDecoration={nav.href === currentRoute ? 'underline' : 'none'}>
                  {nav.textContent}
                </Link>
              </NextLink>
            ))}
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <Moon /> : <Sun />}
              backgroundColor="transparent"
              _focus={{ outline: 'none' }}
              _active={{ bg: 'transparent' }}
              _hover={{ bg: 'transparent' }}
            />
          </HStack>
        </HStack>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(Box)`
  position: sticky;
  z-index: 9;
  top: 0;
  left: 0;
  backdrop-filter: blur(24px);
`;
