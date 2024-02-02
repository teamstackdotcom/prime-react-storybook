import type { Meta, StoryObj } from "@storybook/react";
import { ColorPicker } from "./ColorPicker";

const meta = {
  title: "Components/Form/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    autoFocus: false,
    defaultColor: "ff0000",
    format: "hex",
    inline: false,
    unstyled: false,
  },
};
