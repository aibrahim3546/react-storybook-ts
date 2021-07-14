import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  /**
   * Button type
   */
  type?: 'primary' | 'secondary';
  /**
   * What background color to use
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button label
   */
  label: string;
  /**
   * Button action on click
   */
  onClick: () => void;
  /**
   * Button background color
   */
   backgroundColor?: string;
};

const BUTTON_BG_COLOR = {
  primary: '#000000',
  secondary: '#ffffff',
};

const BUTTON_SIZE = {
  small: 18,
  medium: 22,
  large: 32,
};

const BUTTON_TEXT_COLOR = {
  primary: '#ffffff',
  secondary: '#000000',
};

const ButtonDiv = styled.div<Pick<ButtonProps, 'size' | 'type' | 'backgroundColor'>>`
  padding: 10px 30px;
  text-align: center;
  background-color: ${(props) => (props.backgroundColor || BUTTON_BG_COLOR[props.type || 'primary'])};
  color: ${(props) => BUTTON_TEXT_COLOR[props.type || 'primary']};
  font-size: ${(props) => BUTTON_SIZE[props.size || 'medium']}px;
  border-radius: 10px;
  border: 1px solid ${(props) => BUTTON_TEXT_COLOR[props.type || 'primary']};
  animation: all 500ms;
  box-shadow: 0 3px 6px #00000029;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  opacity: 1;

  :hover {
    opacity: 0.75;
  }
`;

/**
 * MLButton property UI
 */
const MLButton: React.FC<ButtonProps> = ({
  size = 'medium',
  type = 'primary',
  backgroundColor = '',
  label,
  ...props
}) => {
  return (
    <ButtonDiv
      size={size}
      type={type}
      backgroundColor={backgroundColor}
      {...props}
      onClick={props.onClick}
    >
      {label}
    </ButtonDiv>
  );
};

export default MLButton;
