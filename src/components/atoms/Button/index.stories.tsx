import React from 'react';

import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from './index';

import styled from '@emotion/styled';

export default {
  title: 'Atoms/Button', // Story 서버 메뉴의 그룹과 타이틀
  component: Button, // component 이름
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button type="button" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

const Wrapper = styled.div`
  .description {
    margin-bottom: 8px;
  }
  & > div + div {
    margin-top: 24px;
  }
`;

export const Sizes = () => {
  return (
    <Wrapper>
      <div>
        <div className="description">XSmall</div>
        <Button size="xs">Button</Button>
      </div>
      <div>
        <div className="description">Small</div>
        <Button size="sm">Button</Button>
      </div>
      <div>
        <div className="description">Medium</div>
        <Button size="md">Button</Button>
      </div>
      <div>
        <div className="description">Large</div>
        <Button size="lg">Button</Button>
      </div>
    </Wrapper>
  );
};
