import React from 'react';
import { Story, Meta } from '@storybook/react';
import MLButton, { ButtonProps } from '../components/MLButton/MLButton';
import '../index.css';

//👇 This default export determines where your story goes in the story list
const MLButtonStories: Meta = {
  title: 'MoneyLion/MLButton',
  component: MLButton,
};

export default MLButtonStories;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <MLButton {...args}/>;

export const Playground = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Playground.args = {
  type: 'primary',
  size: 'small',
  label: 'Button',
};

Primary.args = {
  type: 'primary',
  size: 'small',
  label: 'Button',
};

Secondary.args = {
  type: 'secondary',
  size: 'small',
  label: 'Button',
};

Small.args = {
  type: 'primary',
  size: 'small',
  label: 'Button',
};

Medium.args = {
  type: 'primary',
  size: 'medium',
  label: 'Button',
}

Large.args = {
  type: 'primary',
  size: 'large',
  label: 'Button',
};