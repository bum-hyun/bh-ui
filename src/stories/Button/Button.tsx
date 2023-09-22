import React, { HTMLAttributes } from 'react';
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

interface Button extends HTMLAttributes<HTMLButtonElement>{
  variant?: IVariant;
  label: string;
  size?: ISize;
  width?: number;
}

type IVariant = "primary" | "secondary";
type ISize = "small" | "medium" | "large";

export const Button = ({ variant, label, size, width, ...props }: Button) => {
  return (
    <Container
      width={100}
      variant={variant}
      size={size}
      {...props}
    >
      {label}
    </Container>
  );
};

Button.defaultProps = {
  variant: "primary" as IVariant,
  size: "medium" as ISize,
  label: "Button"
};


const Container = styled.button<{ variant?: IVariant; size?: ISize; width?: number }>`
  width: ${p => p.width ? `${p.width}px` : '100%'};
  padding: 0 16px;
  border-radius: 6px;
  
  :disabled {
    color: #adb0ba;
    background-color: #e4e4e4;
  }
  
  ${p => getVariant(p)}
  ${p => getSize(p)}
`;

const getVariant = ({variant = "primary", theme}: {variant?: IVariant, theme: Theme}) => {
  if (variant === "primary") {
    return css`
      color: #fff;
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};

      :hover:not(:disabled), :active:not(:disabled) {
        background-color: #6400fc;
      }
    `
  } else if (variant === "secondary") {
    return css`
      color: ${theme.colors.primary};
      background-color: #fff;
      border: 1px solid ${theme.colors.primary};

      :hover:not(:disabled), :active:not(:disabled) {
        background-color: ${theme.colors.secondary};
      }
    `;
  }
};

const getSize = ({size = "medium", theme}: {size?: ISize, theme: Theme}) => {
  if (size === "small") {
    return css`
      font-size: 12px;
      height: 32px;
    `;
  } else if (size === "medium") {
    return css`
      font-size: 14px;
      height: 40px;
    `;
  } else if (size === "large") {
    return css`
      font-size: 16px;
      height: 48px;
    `;
  }
}
