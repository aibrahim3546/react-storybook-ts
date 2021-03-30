import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../index.css';

import MLTextInput, { MLTextInputProps } from '../components/MLInput/MLTextInput';

//👇 This default export determines where your story goes in the story list
const MLTextInputStories: Meta = {
  title: 'MoneyLion/MLTextInput',
  component: MLTextInput,
};

export default MLTextInputStories;

//👇 We create a “template” of how args map to rendering
const Template: Story<MLTextInputProps> = (args) => <MLTextInput {...args}/>;


export const TextInput = Template.bind({});
export const TextInputWithPlaceholder = Template.bind({});
export const TextInputWithoutPlaceholder = Template.bind({});
export const TextInputWithDefaultValue = Template.bind({});
export const TextInputWithErrorMessage = Template.bind({});

TextInput.args = {
  placeholder: 'e.g John Doe',
  label: 'Name',
};

TextInputWithPlaceholder.args = {
  label: 'Name',
  placeholder: 'e.g John Doe'
};

TextInputWithoutPlaceholder.args = {
  label: 'Name',
};

TextInputWithDefaultValue.args = {
  placeholder: 'e.g John Doe',
  label: 'Name',
  defaultValue: 'James Bond',
};

TextInputWithErrorMessage.args = {
  placeholder: 'e.g John Doe',
  label: 'Name',
  isError: true,
  errorMessage: 'Name is required!'
};
