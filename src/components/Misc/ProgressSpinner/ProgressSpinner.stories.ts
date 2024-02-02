import type { Meta, StoryObj } from "@storybook/react";
import { ProgressSpinner } from "./ProgressSpinner";

const meta = {
  title: "Components/Misc/ProgressSpinner",
  component: ProgressSpinner,
  tags: ["autodocs"],
} satisfies Meta<typeof ProgressSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    strokeWidth: "2",
    animationDuration: "2s",
    unstyled: false,
  },
};

export const Custom: Story = {
  args: {
    strokeWidth: "8",
    animationDuration: ".5s",
    unstyled: false,
    fill: "var(--surface-ground)",
    style: { width: "50px", height: "50px" },
  },
};
