import React, { HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SelectContext = React.createContext<{ value?: string | number; onChange?: (event: SelectChangeEvent) => void }>({});
export type SelectChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface ISelectGroup extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value?: string | number;
  onChange?: (event: SelectChangeEvent) => void;
}

const SelectGroup = ({ children, value, onChange, ...props }: ISelectGroup) => {
  return (
    <SelectContext.Provider
      value={{
        value,
        onChange,
      }}
    >
      <SelectGroupContainer {...props}>
        <Text>복수 선택형</Text>
      </SelectGroupContainer>
    </SelectContext.Provider>
  );
};

export default SelectGroup;

SelectGroup.defaultProps = {};

const SelectGroupContainer = styled.div``;

const Text = styled.span`
  font-size: 15px;
  color: #191a20;
`;
