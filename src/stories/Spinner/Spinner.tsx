import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

interface ISpinner extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  variant?: IVariant;
}

type IVariant = "primary" | "secondary";

export const Spinner = ({ variant = "primary", size, ...props }: ISpinner) => {
  return (
    <Wrap>
      <Loader variant={variant} size={size} {...props} />
    </Wrap>
  );
};

Spinner.defaultProps = {
  variant: "primary",
  size: 10,
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Loader = styled.div<{ variant?: IVariant; size?: number }>`
  width: 6em;
  height: 6em;
  margin: 60px auto;
  font-size: ${(p) => (p.size ? `${p.size}px` : "10px")};
  text-indent: -9999em;
  border-radius: 50%;
  ${(p) => getVariant(p)}
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;

  :after {
    border-radius: 50%;
    width: 6em;
    height: 6em;
  }

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const getVariant = ({ variant = "primary", theme }: { variant?: IVariant; theme: Theme }) => {
  if (variant === "primary") {
    return css`
      border-top: 1em solid #ffffff50;
      border-right: 1em solid #ffffff50;
      border-bottom: 1em solid #ffffff50;
      border-left: 1em solid #ffffff;
    `;
  } else if (variant === "secondary") {
    return css`
      border-top: 1em solid rgba(${theme.colors.primary}, 20%);
      border-right: 1em solid rgba(${theme.colors.primary}, 20%);
      border-bottom: 1em solid rgba(${theme.colors.primary}, 20%);
      border-left: 1em solid ${theme.colors.primary};
    `;
  }
};
