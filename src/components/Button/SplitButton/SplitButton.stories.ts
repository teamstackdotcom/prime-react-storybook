import type { Meta, StoryObj } from "@storybook/react";
import { SplitButton } from "./SplitButton";
import { BasicDemo } from "./BasicDemo";

const meta = {
  title: "Components/Button/SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    appendTo: document.body,
    loading: false,
    visible: true,
    disabled: false,
    unstyled: false,
    text: false,
    rounded: false,
    raised: false,
    outlined: false,
    label: "Save",
    icon: "pi pi-plus",
  },
  render: BasicDemo,
};
