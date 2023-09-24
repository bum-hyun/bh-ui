import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Example/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "선택된 정보",
  },
};

export const Default1: Story = {
  args: {
    label: "선택된 정보",
  },
};

export const Default2: Story = {
  args: {
    label: "선택된 정보",
  },
};
