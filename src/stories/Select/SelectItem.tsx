import React, { useContext } from "react";
import styled from "@emotion/styled";
import { SelectContext } from "./Select";

interface ISelectItem {
  value: string | number;
  children: string | number | React.ReactNode;
}

const SelectItem = ({ value, children }: ISelectItem) => {
  const data = useContext(SelectContext);

  return (
    <Container active={data.value === String(value)} data-value={value}>
      {children}
    </Container>
  );
};

export default SelectItem;

const Container = styled.li<{ active: boolean }>`
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
