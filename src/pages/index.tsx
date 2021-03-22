import styled from '@emotion/styled';

import { useColorMode } from '@/context/ColorMode';

const Home = () => {
  const { onToggle } = useColorMode();
  return (
    <>
      <button onClick={onToggle}>click</button>
      <SomeText>7777</SomeText>
    </>
  );
};

export default Home;

const SomeText = styled.div`
  color: ${(props) => props.theme.color.primary};
`;
