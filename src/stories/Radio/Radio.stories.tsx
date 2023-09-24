import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RadioGroup, Radio, RadioButton } from "../Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Example/Radio",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    direction: { options: ["vertical", "horizontal"], control: { type: "select" } },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    direction: "vertical",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <RadioGroup direction={args.direction} value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value={"한국"} label={"한국"} />
        <Radio value={"일본"} label={"일본"} />
      </RadioGroup>
    );
  },
};

export const PrimaryStyleButton: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <RadioButton value={"한국"} label={"한국"} />
        <RadioButton value={"일본"} label={"일본"} />
      </RadioGroup>
    );
  },
};

export const SecondaryStyleButton: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <RadioButton value={"한국"} label={"한국"} variant={"secondary"} />
        <RadioButton value={"일본"} label={"일본"} variant={"secondary"} />
      </RadioGroup>
    );
  },
};

export const TertiaryStyleButton: Story = {
  args: {
    direction: "horizontal",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <RadioButton value={"한국"} label={"한국"} variant={"tertiary"} radius={4} />
        <RadioButton value={"일본"} label={"일본"} variant={"tertiary"} radius={4} />
      </RadioGroup>
    );
  },
};
