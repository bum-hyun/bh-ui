import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { RadioChangeEvent, RadioContext } from "./RadioGroup";

interface IRadio extends HTMLAttributes<HTMLLabelElement> {
  label: string;
  value: string | number;
}

const Radio = ({ label, value, ...props }: IRadio) => {
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
      <Inner active={checked}>
        <Input ref={inputRef} type={"radio"} value={value} onChange={handleChange} checked={checked} />
      </Inner>
      <Label>{label}</Label>
    </Container>
  );
};

Radio.defaultProps = {};

export default Radio;

const Container = styled.label`
  display: flex;
  align-items: center;
`;

const Inner = styled.span<{ active?: boolean }>`
  position: relative;
  width: 18px;
  height: 18px;
  border: 1.5px solid ${(p) => (p.active ? "#8136fe" : "#c6c8d0")};
  border-radius: 100%;
  transition: all 0.1s linear;

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    transform: translate(-50%, -50%);
    background-color: ${(p) => (p.active ? "#8136fe" : "none")};
    border-radius: 100%;
    transition: all 0.1s linear;
  }
`;

const Label = styled.span`
  margin-left: 0.75rem;
  font-size: 15px;
  line-height: 18px;
  color: #4e515c;
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
