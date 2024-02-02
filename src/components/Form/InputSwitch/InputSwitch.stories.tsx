import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputSwitch } from "./InputSwitch";

const meta = {
  title: "Components/Form/InputSwitch",
  component: InputSwitch,
  tags: ["autodocs"],
} satisfies Meta<typeof InputSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    autoFocus: false,
    checked: false,
    trueValue: true,
    falseValue: false,
    disabled: false,
    unstyled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
      <InputSwitch
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.value)}
      />
    );
  },
};
