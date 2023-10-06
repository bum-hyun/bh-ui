/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { css } from "@emotion/react";
import { createPortal } from "react-dom";

export const SelectContext = React.createContext<{ value?: string | number }>({});
export type SelectChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface ISelect extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  value: string | number;
  onChange: (event: SelectChangeEvent) => void;
  children: React.ReactNode[];
}

const Select = ({ label = "선택", value, onChange, children, ...props }: ISelect) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(label);

  const handleClickContainer = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<any>) => {
    const newEvent = { ...event, target: { ...event.target, value: event.target.dataset.value } };
    onChange(newEvent);
    setIsOpen(false);
    setCurrentLabel(event.target.innerText);
  };

  const RenderMenu = () => {
    const position = ref.current!.getBoundingClientRect();
    const x = position.x;
    const y = position.y + position.height;
    const width = position.width;
    return (
      <Root>
        <Backdrop
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <MenuWrap
          css={css`
            position: absolute;
            top: ${`${y}px`};
            left: ${`${x}px`};
            width: ${`${width}px`};
          `}
          onClick={handleChange}
        >
          {children}
        </MenuWrap>
      </Root>
    );
  };

  return (
    <SelectContext.Provider value={{ value }}>
      <Container ref={ref} onClick={handleClickContainer} {...props}>
        <Text>{currentLabel}</Text>
        <Icon icon={"chevronDown"} color={"#bababa"} />
      </Container>
      {isOpen && createPortal(RenderMenu(), document.body)}
    </SelectContext.Provider>
  );
};

Select.defaultProps = {};

export default Select;

const Root = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
`;

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  z-index: -1;
`;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  height: 40px;
  padding: 8px 12px;
  font-size: 15px;
  color: #191a20;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;

  svg {
    margin-left: auto;
  }
`;

const Text = styled.span`
  font-size: 15px;
  color: #191a20;
`;

const MenuWrap = styled.ul`
  display: flex;
  flex-direction: column;
  max-height: 240px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-x: hidden;
  overflow-y: auto;
`;
