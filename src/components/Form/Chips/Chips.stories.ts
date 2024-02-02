import type { Meta, StoryObj } from "@storybook/react";
import { Chips } from "./Chips";
import { BasicDemo } from "./BasicDemo";

const meta = {
  title: "Components/Form/Chips",
  component: Chips,
  tags: ["autodocs"],
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    autoFocus: false,
    disabled: false,
    readOnly: false,
    removable: true,
    allowDuplicate: true,
    addOnBlur: false,
    unstyled: false,
  },
  render: BasicDemo,
};
