import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import { Spinner } from "../Spinner/Spinner";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  label: string;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  shape?: "square" | "default" | "circle";
}

/**
 버튼 컴포넌트
 */
export const Button = ({
  variant = "primary",
  label,
  size = "medium",
  shape = "default",
  fullWidth = true,
  loading = false,
  disabled = false,
  startAdornment,
  endAdornment,
}: IButton) => {
  return (
    <Container variant={variant} size={size} shape={shape} fullWidth={fullWidth} disabled={disabled} startAdornment={!!startAdornment} endAdornment={!!endAdornment}>
      {startAdornment && <AdornmentWrap position={"left"}>{startAdornment}</AdornmentWrap>}
      {loading ? <Spinner size={4} /> : label}
      {endAdornment && <AdornmentWrap position={"right"}>{endAdornment}</AdornmentWrap>}
    </Container>
  );
};

const Container = styled.button<{ variant?: string; size?: string; shape?: string; width?: number; fullWidth?: boolean; startAdornment: boolean; endAdornment: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(p) => p.fullWidth && "100%"};
  padding: 0 16px;
  ${(p) => p.startAdornment && "padding-left: 40px; !important;"}
  ${(p) => p.endAdornment && "padding-right: 40px; !important;"}

  ${(p) => getVariant(p)}
  ${(p) => getSize(p)}
  ${(p) => getShape(p)}
  
  
  :disabled {
    color: #adb0ba;
    background-color: #e4e4e4;
    border-color: #e4e4e4;
  }
`;

const AdornmentWrap = styled.div<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${(p) => (p.position === "left" ? "left: 0;" : "right: 0;")}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transform: translateY(-50%);
`;

const getVariant = ({ variant, theme }: { variant?: string; theme: Theme }) => {
  if (variant === "primary") {
    return css`
      color: #fff;
      background: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};

      :hover:not(:disabled),
      :active:not(:disabled) {
        background-color: #6400fc;
      }
    `;
  } else if (variant === "secondary") {
    return css`
      color: ${theme.colors.primary};
      background-color: #fff;
      border: 1px solid ${theme.colors.primary};

      :hover:not(:disabled),
      :active:not(:disabled) {
        background-color: ${theme.colors.secondary};
      }
    `;
  } else if (variant === "tertiary") {
    return css`
      color: ${theme.colors.primary};
      background-color: #f6f0ff;
      border: 1px solid #f6f0ff;

      :hover:not(:disabled) {
        background-color: ${theme.colors.secondary};
      }
    `;
  } else if (variant === "text") {
    return css`
      color: ${theme.colors.primary};
      border: 1px solid transparent;

      :hover:not(:disabled),
      :active:not(:disabled) {
        background-color: ${theme.colors.secondary};
      }
    `;
  }
};

const getSize = ({ size }: { size?: string }) => {
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
};

const getShape = ({ shape }: { shape?: string }) => {
  if (shape === "default") {
    return css`
      border-radius: 6px;
    `;
  } else if (shape === "square") {
    return css`
      border-radius: 0;
    `;
  } else if (shape === "circle") {
    return css`
      border-radius: 100px;
    `;
  }
};
