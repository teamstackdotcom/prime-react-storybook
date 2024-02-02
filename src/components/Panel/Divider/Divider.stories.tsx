import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider, DividerProps } from "./Divider";

const meta = {
  title: "Components/Panel/Divider",
  component: Divider,
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const Basic: Story = {
  args: {
    layout: "horizontal",
    type: "solid",
    unstyled: false,
  },
  render: (args: DividerProps) => (
    <>
      {Array(4)
        .fill(text)
        .map((text, index) => (
          <div key={index}>
            <p>{text}</p>
            {index < 3 && <Divider {...args} />}
          </div>
        ))}
    </>
  ),
};
