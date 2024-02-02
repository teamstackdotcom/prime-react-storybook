import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";
import { BasicDemo } from "./BasicDemo";

const meta = {
  title: "Components/Form/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    required: false,
    unstyled: false,
    name: "category",
  },
  render: BasicDemo,
};
