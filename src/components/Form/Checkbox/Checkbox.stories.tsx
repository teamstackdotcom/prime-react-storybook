import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    autoFocus: false,
    checked: false,
    disabled: false,
    falseValue: false,
    readOnly: false,
    required: false,
    trueValue: true,
    unstyled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState<boolean | undefined>(false);
    return (
      <Checkbox
        {...args}
        onChange={(e) => setChecked(e.checked)}
        checked={checked as boolean}
      />
    );
  },
};
