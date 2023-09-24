/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Icon } from "../Icon/Icon";
import { css, Theme } from "@emotion/react";
import { createPortal } from "react-dom";

interface ISelect extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
}

const Select = ({ label, value, ...props }: ISelect) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickContainer = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const RenderMenu = () => {
    const position = ref.current!.getBoundingClientRect();
    console.log(position);
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
          onClick={() => setIsOpen(false)}
        >
          <Menu>1번</Menu>
          <Menu>2번</Menu>
        </MenuWrap>
      </Root>
    );
  };

  return (
    <>
      <Container ref={ref} onClick={handleClickContainer} {...props}>
        <Text>{label}</Text>
        <Icon icon={"chevronDown"} color={"#bababa"} />
      </Container>
      {isOpen && createPortal(RenderMenu(), document.body)}
    </>
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

const Menu = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 15px;
  color: #212121;
  height: 40px;
  background-color: ${(p) => (p.active ? "#f6f0ff" : "#fff")};
  user-select: none;
  cursor: pointer;
  z-index: 100;

  :hover {
    background-color: #f6f0ff;
  }
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
