import React from 'react';
import styled from 'styled-components';

export interface MLNumberInputProps {
  /**
   * Input label
   */
  label: string;
  /**
   * Input value
   */
  value?: number | string;
  /**
   * Input default value
   */
  defaultValue?: number | string;
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

const StyledNumberInput = styled.input`
  border: 1px solid #333333;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #000000;
  appearance: none;
  margin: 0;
  outline: none;

  ::placeholder {
    color: #dddddd;
  }
`;

const MLNumberInput: React.FC<MLNumberInputProps> = ({
  value = undefined,
  defaultValue = undefined,
  placeholder = '',
  label,
  onChange,
  ...props
}) => {
  return (
    <div style={{ width: '100%' }}>
      <InputLabelDiv>
        {label}
      </InputLabelDiv>
      <StyledNumberInput
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        type="number"
        {...props}
      />
    </div>
  );
};

export default MLNumberInput;
