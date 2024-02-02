import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { LabelDemo } from "./LabelDemo";
import { GroupDemo } from "./GroupDemo";

const meta = {
  title: "Components/Misc/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    imageAlt: "avatar",
    imageFallback: "default",
    shape: "square",
    size: "normal",
    unstyled: false,
  },
  render: LabelDemo,
};

export const Group: Story = {
  args: {
    imageAlt: "avatar",
    imageFallback: "default",
    shape: "circle",
    size: "large",
    unstyled: false,
  },
  render: GroupDemo,
};
