import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Select, SelectItem } from "../Select";

const meta: Meta<typeof Select> = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const [age, setAge] = useState("");

    return (
      <Select value={age} onChange={(event) => setAge(event.target.value)}>
        <SelectItem value={10}>Ten</SelectItem>
        <SelectItem value={20}>Twenty</SelectItem>
        <SelectItem value={30}>Thirty</SelectItem>
      </Select>
    );
  },
};
