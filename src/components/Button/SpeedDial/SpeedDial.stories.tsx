import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SpeedDial } from "./SpeedDial";
import { LinearDoc } from "./LinearDemo";

const meta = {
  title: "Components/Button/SpeedDial",
  component: SpeedDial,
  tags: ["autodocs"],
} satisfies Meta<typeof SpeedDial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    visible: false,
    direction: "up",
    transitionDelay: 30,
    type: "linear",
    radius: 0,
    mask: false,
    disabled: false,
    hideOnClickOutside: true,
    rotateAnimation: true,
    unstyled: false,
  },
  render: LinearDoc,
};
