import React from 'react';

import { Box, Container, HStack, Spacer, Divider, Link, useColorMode, useToken } from '@chakra-ui/react';

import styled from '@emotion/styled';

import Twitter from '@/components/icons/Twitter';
import Github from '@/components/icons/Github';

const Footer = () => {
  const [gray600, gray100] = useToken('colors', ['brand.gray.600', 'brand.gray.100']);

  const { colorMode } = useColorMode();

  const color = colorMode === 'light' ? gray600 : gray100;

  return (
    <FooterContainer as="footer" pb={8} mb={8}>
      <Container maxW="container.sm">
        <Divider color="gray.400" mb={8} />
        <HStack>
          <Spacer />
          <HStack spacing={4}>
            <Link isExternal href="https://twitter.com/_kenrhee" display="flex" _focus={{ outline: 'none' }}>
              <Twitter color={color} boxSize={6} />
            </Link>
            <Link isExternal href="https://github.com/hokyunrhee" display="flex" _focus={{ outline: 'none' }}>
              <Github color={color} boxSize={6} />
            </Link>
          </HStack>
        </HStack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Box)``;
