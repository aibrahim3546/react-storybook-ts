import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../index.css';

import MLNumberInput, { MLNumberInputProps } from '../components/MLInput/MLNumberInput';

//👇 This default export determines where your story goes in the story list
const MLTextInputStories: Meta = {
  title: 'MoneyLion/MLNumberInput',
  component: MLNumberInput,
};

export default MLTextInputStories;

//👇 We create a “template” of how args map to rendering
const Template: Story<MLNumberInputProps> = (args) => <MLNumberInput {...args}/>;


export const NumberInput = Template.bind({});
export const NumberInputWithPlaceholder = Template.bind({});
export const NumberInputWithoutPlaceholder = Template.bind({});
export const NumberInputWithDefaultValue = Template.bind({});

NumberInput.args = {
  label: 'Age',
};

NumberInputWithPlaceholder.args = {
  label: 'Age',
  placeholder: 'e.g 1',
};

NumberInputWithoutPlaceholder.args = {
  label: 'Age',
}

NumberInputWithDefaultValue.args = {
  label: 'Age',
  defaultValue: 18,
};
