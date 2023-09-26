import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import React from "react";

const meta: Meta<typeof TextField> = {
  title: "Example/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    variant: { options: ["error", "success"], control: { type: "select" } },
    helper: { control: "text" },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    variant: "error",
    helper: "Error Message",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    helper: "Success Message",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomHelper: Story = {
  args: {
    helper: <div>customer element</div>,
  },
};

export const StartAdornment: Story = {
  args: {
    startAdornment: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 9.09091C11.2767 9.09091 10.583 9.37825 10.0715 9.88971C9.56006 10.4012 9.27273 11.0949 9.27273 11.8182C9.27273 12.5415 9.56006 13.2352 10.0715 13.7467C10.583 14.2581 11.2767 14.5455 12 14.5455C12.7233 14.5455 13.417 14.2581 13.9285 13.7467C14.4399 13.2352 14.7273 12.5415 14.7273 11.8182C14.7273 11.0949 14.4399 10.4012 13.9285 9.88971C13.417 9.37825 12.7233 9.09091 12 9.09091ZM12 16.3636C10.7945 16.3636 9.63832 15.8847 8.78588 15.0323C7.93344 14.1799 7.45455 13.0237 7.45455 11.8182C7.45455 10.6127 7.93344 9.4565 8.78588 8.60406C9.63832 7.75162 10.7945 7.27273 12 7.27273C13.2055 7.27273 14.3617 7.75162 15.2141 8.60406C16.0666 9.4565 16.5455 10.6127 16.5455 11.8182C16.5455 13.0237 16.0666 14.1799 15.2141 15.0323C14.3617 15.8847 13.2055 16.3636 12 16.3636ZM12 5C7.45455 5 3.57273 7.82727 2 11.8182C3.57273 15.8091 7.45455 18.6364 12 18.6364C16.5455 18.6364 20.4273 15.8091 22 11.8182C20.4273 7.82727 16.5455 5 12 5Z"
          fill="#C6C8D0"
        />
      </svg>
    ),
  },
};

export const EndAdornment: Story = {
  args: {
    endAdornment: (
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 9.09091C11.2767 9.09091 10.583 9.37825 10.0715 9.88971C9.56006 10.4012 9.27273 11.0949 9.27273 11.8182C9.27273 12.5415 9.56006 13.2352 10.0715 13.7467C10.583 14.2581 11.2767 14.5455 12 14.5455C12.7233 14.5455 13.417 14.2581 13.9285 13.7467C14.4399 13.2352 14.7273 12.5415 14.7273 11.8182C14.7273 11.0949 14.4399 10.4012 13.9285 9.88971C13.417 9.37825 12.7233 9.09091 12 9.09091ZM12 16.3636C10.7945 16.3636 9.63832 15.8847 8.78588 15.0323C7.93344 14.1799 7.45455 13.0237 7.45455 11.8182C7.45455 10.6127 7.93344 9.4565 8.78588 8.60406C9.63832 7.75162 10.7945 7.27273 12 7.27273C13.2055 7.27273 14.3617 7.75162 15.2141 8.60406C16.0666 9.4565 16.5455 10.6127 16.5455 11.8182C16.5455 13.0237 16.0666 14.1799 15.2141 15.0323C14.3617 15.8847 13.2055 16.3636 12 16.3636ZM12 5C7.45455 5 3.57273 7.82727 2 11.8182C3.57273 15.8091 7.45455 18.6364 12 18.6364C16.5455 18.6364 20.4273 15.8091 22 11.8182C20.4273 7.82727 16.5455 5 12 5Z"
          fill="#C6C8D0"
        />
      </svg>
    ),
  },
};
