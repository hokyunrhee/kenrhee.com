import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card, { Props } from './index';

import { SimpleGrid } from '@chakra-ui/react';

export default {
  title: 'Components/modules/Card',
  component: Card,
} as Meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '리액트 어플리케이션의 상태 관리하기',
  subtitle:
    'redux 없이도 상태를 관리하는 방법에 대해 알아 봅니다. 상태가 무엇인지 생각해 봅니다.',
  tags: ['#react'],
  url: 'https://placehold.it/640x360',
  maxWidth: 640,
};

export const GridLayout = () => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
      <Card {...Default.args} />
      <Card {...Default.args} />
      <Card {...Default.args} />
      <Card {...Default.args} />
      <Card {...Default.args} />
      <Card {...Default.args} />
      <Card {...Default.args} />
      <Card {...Default.args} />
    </SimpleGrid>
  );
};
