import styled from '@emotion/styled';

import themeStore from '@/stores/theme';

const Home = () => {
  const { toggleTheme } = themeStore;

  return (
    <>
      <button onClick={toggleTheme}>click</button>
      <SomeText>7777</SomeText>
    </>
  );
};

export default Home;

const SomeText = styled.div`
  color: ${(props) => props.theme.color.primary};
`;
