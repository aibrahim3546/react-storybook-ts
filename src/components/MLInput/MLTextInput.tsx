import React from 'react';
import styled from 'styled-components';

export interface MLTextInputProps {
  /**
   * Input label
   */
  label: string;
  /**
   * isError is attribute if the input is invalid or not. true = invalid
   */
  isError?: boolean;
  /**
   * Error message to show when isError is true.
   */
  errorMessage?: string;
  /**
   * Input value
   */
  value?: string;
  /**
   * Input default value
   */
  defaultValue?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * onChange input
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputLabelDiv = styled.div`
  color: #666666;
  font-size: 14px;
  padding-bottom: 10px;
  text-align: left;
`;

const StyledTextInput = styled.input<{ isError: boolean }>`
  border: none;
  border-bottom: 1px solid ${(props) => (props.isError ? '#ff0000' : '#333333')};
  padding: 5px 0px;
  font-size: 16px;
  color: #000000;
  outline: none;
  width: 100%;

  ::placeholder {
    color: #dddddd;
  }
`;

const ErrorTextDiv = styled.div`
  color: #ff0000;
  font-size: 14px;
  padding-top: 5px;
  text-align: left;
`;

/**
 * MLTextInput UI properties
 */
const MLTextInput: React.FC<MLTextInputProps> = ({
  value = undefined,
  defaultValue = undefined,
  placeholder = '',
  label,
  isError = false,
  errorMessage = '',
  onChange,
  ...props
}) => {
  return (
    <div style={{ width: '100%' }}>
      <InputLabelDiv>
        {label}
      </InputLabelDiv>
      <StyledTextInput
        isError={isError}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        type="text"
        {...props}
      />
      {(isError && errorMessage !== '')
        && (
          <ErrorTextDiv>{errorMessage}</ErrorTextDiv>
        )}
    </div>
  );
};

export default MLTextInput;
