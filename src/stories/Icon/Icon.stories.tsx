import React from "react";
import styled from "@emotion/styled";
import type { Meta, StoryObj } from "@storybook/react";
import { Icon, iconTypes } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Example/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: { options: iconTypes, control: { type: "select" } },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Clip: Story = {
  args: {
    icon: "clip",
  },
};

export const listOfIcons = () => {
  return (
    <IconListWrap>
      {iconTypes.map((icon) => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </IconListWrap>
  );
};

const IconListWrap = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    display: flex;
    align-items: center;
    width: 25%;
    padding: 1rem;
    font-size: 14px;

    svg {
      margin-right: 1rem;
    }
  }
`;
