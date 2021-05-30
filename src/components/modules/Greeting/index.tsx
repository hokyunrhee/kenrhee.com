import React from 'react';

import { Box, Heading, Text, useColorMode, useToken } from '@chakra-ui/react';

const Greeting = () => {
  const [brandWhite, brandBlack] = useToken('colors', ['brand.white', 'brand.black']);

  const { colorMode } = useColorMode();

  const color = colorMode === 'light' ? brandWhite : brandBlack;
  const backgroundColor = colorMode === 'light' ? brandBlack : brandWhite;

  return (
    <Box>
      <Heading as="h1" size="2xl" lineHeight="82px" transform="rotate(-2deg)">
        <Text as="span" color={color} backgroundColor={backgroundColor}>
          <Text as="span" px={2}>
            안녕하세요.
          </Text>
          <br />
          <Text as="span" px={2}>
            빠른손김참치입니다.
          </Text>
        </Text>
      </Heading>
      <Heading as="h2" size="md" fontWeight="normal" mt={8} wordBreak="keep-all">
        웹 프론트엔드 개발을 하고 있습니다. 생산성 향상을 위해 학습하고 배운 것을 공유합니다.
      </Heading>
    </Box>
  );
};

export default Greeting;
