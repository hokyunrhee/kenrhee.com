import React from 'react';

import { useRouter } from 'next/router';
import NextLink from 'next/link';

import { Flex, Center, Link } from '@chakra-ui/react';

interface Props {
  href: string;
  children: React.ReactNode;
  width: number | string;
  height: number | string;
}

const Navigation: React.FC<Props> = ({ href, children, width, height }) => {
  const router = useRouter();

  return (
    <NextLink href={href} passHref>
      <Link color={href === router.pathname ? 'gray.50' : 'gray.500'}>
        <Center width={width} height={height}>
          <Flex flexDirection="column" alignItems="center">
            {children}
          </Flex>
        </Center>
      </Link>
    </NextLink>
  );
};

export default Navigation;
