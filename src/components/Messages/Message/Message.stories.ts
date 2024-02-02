import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "./Message";

const meta = {
  title: "Components/Messages/Message",
  component: Message,
  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    severity: "info",
    unstyled: false,
    text: "Username is required",
  },
};
