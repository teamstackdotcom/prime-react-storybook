import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Components/Misc/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    showValue: true,
    unit: "%",
    mode: "determinate",
    unstyled: false,
    value: 50,
    style: { minWidth: "200px" },
  },
};

export const Indeterminate: Story = {
  args: {
    showValue: true,
    unit: "%",
    mode: "indeterminate",
    unstyled: false,
    style: { height: "6px", minWidth: "200px" },
  },
};
