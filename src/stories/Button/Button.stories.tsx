import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React from "react";
import { Icon } from "../Icon/Icon";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { options: ["primary", "secondary"], control: { type: "select" } },
    size: { options: ["small", "medium", "large"], control: { type: "select" } },
    shape: { options: ["default", "square", "circle"], control: { type: "select" } },
    fullWidth: { control: "boolean" },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "primary",
    size: "medium",
    shape: "default",
    fullWidth: true,
    loading: false,
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: "100px" }}>
      <Button {...args} />
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
  render: (args) => (
    <div style={{ width: "100px" }}>
      <Button {...args} />
    </div>
  ),
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Button",
  },
  render: (args) => (
    <div style={{ width: "100px" }}>
      <Button {...args} />
    </div>
  ),
};

export const Text: Story = {
  args: {
    variant: "text",
    label: "Button",
  },
  render: (args) => (
    <div style={{ width: "100px" }}>
      <Button {...args} />
    </div>
  ),
};

export const StartAdornment: Story = {
  args: {
    variant: "text",
    label: "Button",
    startAdornment: <Icon icon={"download"} width={20} height={20} color={"#8136fe"} />,
  },
  render: (args) => (
    <div style={{ width: "100px" }}>
      <Button {...args} />
    </div>
  ),
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
  render: (args) => (
    <div style={{ width: "100px" }}>
      <Button {...args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
  render: (args) => (
    <div style={{ width: "100px" }}>
      <Button {...args} />
    </div>
  ),
};
