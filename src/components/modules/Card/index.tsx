import React from 'react';

import Image from 'next/image';
import { Box, Badge } from '@chakra-ui/react';
// AspectRatio, Image,
export interface Props {
  maxWidth?: string | number;
  title: string;
  subtitle: string;
  url: string;
  tags?: string[];
}

const Card: React.FC<Props> = ({
  url,
  title,
  subtitle,
  tags = [],
  ...props
}) => {
  return (
    <Box
      boxShadow="md"
      borderRadius="md"
      overflow="hidden"
      bg="white"
      {...props}
    >
      {/* <AspectRatio ratio={16 / 9}>
        <Image src={url} objectFit="cover" />
      </AspectRatio> */}
      <Box display="flex">
        <Image
          src={`https:${url}`}
          width={1280}
          height={720}
          objectFit="cover"
        />
      </Box>

      <Box p={3} flexDirection="column">
        <Box>
          <Box
            as="h2"
            fontSize="xl"
            fontWeight="bold"
            lineHeight="tight"
            mt={1}
          >
            {title}
          </Box>

          <Box as="h3" lineHeight="tight" my={3}>
            {subtitle}
          </Box>
        </Box>

        <Box d="flex" alignItems="baseline">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              fontWeight="medium"
              borderRadius="full"
              px={2}
              colorScheme="teal"
            >
              {tag}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
