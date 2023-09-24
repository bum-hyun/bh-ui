import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const RadioContext = React.createContext<{ value?: string | number; onChange?: (event: RadioChangeEvent) => void }>({});
export type RadioChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface IRadioGroup extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value?: string | number;
  onChange?: (event: RadioChangeEvent) => void;
  direction?: "horizontal" | "vertical";
}

const RadioGroup = ({ children, value, onChange, direction, ...props }: IRadioGroup) => {
  return (
    <RadioContext.Provider
      value={{
        value,
        onChange,
      }}
    >
      <RadioGroupContainer direction={direction} {...props}>
        {children}
      </RadioGroupContainer>
    </RadioContext.Provider>
  );
};

export default RadioGroup;

RadioGroup.defaultProps = {
  direction: "vertical" as "horizontal" | "vertical",
};

const RadioGroupContainer = styled.div<{ direction?: "horizontal" | "vertical" }>`
  ${(p) =>
    p.direction === "horizontal"
      ? css`
          display: flex;
          > label + label {
            margin-left: 0.75rem;
          }
        `
      : css`
          display: inline-flex;
          flex-direction: column;
          > label + label {
            margin-top: 0.75rem;
          }
        `}
`;
