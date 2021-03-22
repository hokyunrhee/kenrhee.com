import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼은 4가지 색상으로 제공됩니다. 기본은 'primary' 입니다.
   */
  colorScheme?: 'primary' | 'secondary' | 'white' | 'black';
  /**
   * 버튼은 4가지 크기로 제공됩니다. 기본은 'md' 입니다.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * 버튼은 4가지 스타일로 제공됩니다. 기본은 'solid' 입니다.
   */
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  isFullWidth?: boolean;
  /**
   * 로딩 상태를 사용하여 아직 로딩 중임을 나타냅니다.
   */
  isLoading?: boolean;
  isDisabled?: boolean;
  // leftIcon?: React.ReactNode;
  // rightIcon?: React.ReactNode;
  spinner?: React.ReactNode;
}

const sizes = {
  xs: css`
    padding: 0 8px;
    height: 24px;
    min-width: 24px;
    border-radius: 4px;
  `,
  sm: css`
    padding: 0 12px;
    height: 32px;
    min-width: 32px;
    border-radius: 4px;
  `,
  md: css`
    padding: 0 16px;
    height: 40px;
    min-width: 40px;
    border-radius: 4px;
  `,
  lg: css`
    padding: 0 24px;
    height: 48px;
    min-width: 48px;
    border-radius: 6px;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  font-weight: 600; // semi-bold
  /* font-size & line-height */
  ${(props) => props.theme.fontSize[props.size]}
  /* width */
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
  /* size */
  ${(props) => sizes[props.size]}
  /* disabled */
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => props.isDisabled && 0.4};
  /* colorScheme */
  ${(props) => {
    switch (props.colorScheme) {
      case 'primary':
        return css`
          color: ${props.theme.color.primary};
          background-color: ${props.theme.color.primary};
        `;
      case 'secondary':
        return css`
          color: ${props.theme.color.secondary};
          background-color: ${props.theme.color.secondary};
        `;
      case 'white':
        return css`
          color: ${props.theme.color.white};
          background-color: ${props.theme.color.white};
        `;
      case 'black':
        return css`
          color: ${props.theme.color.black};
          background-color: ${props.theme.color.black};
        `;
      default:
        return '';
    }
  }}
  /* variant */
  ${(props) => {
    switch (props.variant) {
      case 'solid':
        return css`
          border-width: 0px;
          color: ${props.theme.color[props.colorScheme] ===
          props.theme.color.white
            ? props.theme.color.black
            : props.theme.color.white};
        `;
      case 'outline':
        return css`
          border-width: 1px;
          border-color: ${props.theme.color[props.colorScheme]};
          background-color: transparent;
        `;
      case 'ghost':
        return css`
          border-width: 0px;
          background-color: ${props.theme.color.transparent};
        `;
      case 'link':
        return css`
          border-width: 0px;
          height: auto;
          background-color: ${props.theme.color.transparent};
        `;
      default:
        return '';
    }
  }}
`;

/**
 * `Button` 컴포넌트는 어떠한 이벤트를 발생시킬 때 사용합니다.
 */
const Button: React.FC<ButtonProps> = ({
  children,
  isDisabled,
  isLoading,
  ...props
}) => {
  return (
    <StyledButton
      disabled={isDisabled || isLoading}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  colorScheme: 'primary',
  size: 'md',
  variant: 'solid',
};

export default Button;

// const ButtonSpinner = styled.div`
//   display: inline-block;
//   border-top: 2px solid currentcolor;
//   border-right: 2px solid currentcolor;
//   border-bottom-style: solid;
//   border-left-style: solid;
//   border-radius: 9999px;
//   border-bottom-width: 2px;
//   border-left-width: 2px;
//   border-bottom-color: ${(props) => props.theme.color.transparent};
//   border-left-color: ${(props) => props.theme.color.transparent};
//   color: currentcolor;
//   width: 1em;
//   height: 1em;
//   animation: spin 1s linear infinite;

//   @keyframes spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;
