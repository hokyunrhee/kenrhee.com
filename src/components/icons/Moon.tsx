import { Icon, IconProps } from '@chakra-ui/react';

const Moon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" fill="currentColor" />
    </Icon>
  );
};

export default Moon;
