import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RadioGroup, Radio } from "../Radio";

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

export const Button = () => {
  const [value, setValue] = useState("한국");
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
      <Radio value={"한국"} label={"한국"} />
      <Radio value={"일본"} label={"일본"} />
    </RadioGroup>
  );
};
