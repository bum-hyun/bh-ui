import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

interface ITextField extends Omit<HTMLAttributes<HTMLInputElement>, "size"> {
  fullWidth?: boolean;
  variant?: IVariant;
  disabled?: boolean;
  helper?: string | React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

type IVariant = "error" | "success";

export const TextField = ({ fullWidth = false, variant, helper, disabled, startAdornment, endAdornment, ...props }: ITextField) => {
  return (
    <Container fullWidth={fullWidth}>
      <InputWrap>
        {startAdornment && <AdornmentWrap position={"left"}>{startAdornment}</AdornmentWrap>}
        <Input startAdornment={!!startAdornment} endAdornment={!!endAdornment} variant={variant} disabled={disabled} {...props} />
        {endAdornment && <AdornmentWrap position={"right"}>{endAdornment}</AdornmentWrap>}
      </InputWrap>
      {helper && <HelperText variant={variant}>{helper}</HelperText>}
    </Container>
  );
};

TextField.defaultProps = {
  fullWidth: false,
};

const Container = styled.div<{ fullWidth?: boolean }>`
  display: ${(p) => (p.fullWidth ? "flex" : "inline-flex")};
  flex-direction: column;
`;

const InputWrap = styled.div`
  position: relative;
  align-items: center;
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

const Input = styled.input<{ startAdornment?: boolean; endAdornment?: boolean; variant?: IVariant }>`
  width: 100%;
  padding: 0.5rem 1rem;
  ${(p) => p.startAdornment && "padding-left: 40px; !important;"}
  ${(p) => p.endAdornment && "padding-right: 40px; !important;"}
  font-size: 1rem;
  color: #191a20;
  line-height: 1.5;
  background-color: #f9f9fd;
  border: 1px solid #e4e4e9;
  border-radius: 6px;
  ${(p) => getBorderVariant(p)};
  user-select: text;

  ::placeholder {
    color: #adb0ba;
  }

  :focus {
    background-color: #fff;
    border-color: #646670;
  }

  :disabled {
    color: #adb0ba;
  }
`;

const HelperText = styled.span<{ variant?: IVariant }>`
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  ${(p) => getTextVariant(p)};
`;

const getBorderVariant = ({ variant, theme }: { variant?: IVariant; theme: Theme }) => {
  if (variant === "error") {
    return css`
      border-color: ${theme.colors.error};
      :focus {
        background-color: #fff;
        border-color: ${theme.colors.error} !important;
      }
    `;
  } else if (variant === "success") {
    return css`
      border-color: ${theme.colors.success};
      :focus {
        background-color: #fff;
        border-color: ${theme.colors.success} !important;
      }
    `;
  } else {
    return css``;
  }
};

const getTextVariant = ({ variant, theme }: { variant?: IVariant; theme: Theme }) => {
  if (variant === "error") {
    return css`
      color: ${theme.colors.error};
    `;
  } else if (variant === "success") {
    return css`
      color: ${theme.colors.success};
    `;
  } else {
    return css``;
  }
};
