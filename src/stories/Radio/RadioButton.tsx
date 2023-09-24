import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { RadioChangeEvent, RadioContext } from "./RadioGroup";
import { css, Theme } from "@emotion/react";

interface IRadioButton extends HTMLAttributes<HTMLLabelElement> {
  label: string;
  value: string | number;
  variant?: IVariant;
  radius?: number;
}

type IVariant = "primary" | "secondary" | "tertiary";

const RadioButton = ({ label, value, variant, radius = 20, ...props }: IRadioButton) => {
  const data = React.useContext(RadioContext);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent) => {
    if (data.onChange) {
      data.onChange(event as RadioChangeEvent);
    }
  };

  useEffect(() => {
    if (!data.value) return;
    if (value === data.value) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [data.value, value]);

  return (
    <Container {...props} onClick={handleClick}>
      <Label active={checked} variant={variant} radius={radius}>
        {label}
        <Input ref={inputRef} type={"radio"} value={value} onChange={handleChange} checked={checked} />
      </Label>
    </Container>
  );
};

RadioButton.defaultProps = {
  variant: "primary" as IVariant,
  radius: 20,
};

export default RadioButton;

const Container = styled.label`
  display: inline-flex;
  align-items: center;
`;

const Label = styled.div<{ variant?: IVariant; radius: number; active: boolean }>`
  position: relative;
  padding: 6px 10px;
  font-size: 15px;
  ${(p) => getVariant(p)}
  border-radius: ${(p) => `${p.radius}px;`}
  transition: all 0.1s linear;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  opacity: 0;
  cursor: inherit;
`;

const getVariant = ({ variant = "primary", active, theme }: { variant?: IVariant; active: boolean; theme: Theme }) => {
  if (variant === "primary") {
    if (active) {
      return css`
        color: #fff;
        background: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};

        :hover:not(:disabled) {
          background-color: #6400fc;
        }
      `;
    } else {
      return css`
        color: #8c8f9c;
        background: #fff;
        border: 1px solid #e4e4e9;

        :hover:not(:disabled) {
          background-color: #f8f8f8;
        }
      `;
    }
  } else if (variant === "secondary") {
    if (active) {
      return css`
        color: ${theme.colors.primary};
        background-color: #fff;
        border: 1px solid ${theme.colors.primary};

        :hover:not(:disabled) {
          background-color: ${theme.colors.secondary};
        }
      `;
    } else {
      return css`
        color: #e4e4e9;
        background-color: #f9f9fd;
        border: 1px solid #e4e4e9;
      `;
    }
  } else if (variant === "tertiary") {
    if (active) {
      return css`
        color: ${theme.colors.primary};
        background-color: #f6f0ff;
        border: 1px solid #f6f0ff;

        :hover:not(:disabled) {
          background-color: ${theme.colors.secondary};
        }
      `;
    } else {
      return css`
        color: #727272;
        background-color: #f5f5f5;
        border: 1px solid #f5f5f5;
      `;
    }
  }
};
