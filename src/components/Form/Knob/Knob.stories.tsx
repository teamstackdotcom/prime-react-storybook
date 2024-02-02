import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Knob } from "./Knob";
import { KnobChangeEvent } from "primereact/knob";

const meta = {
  title: "Components/Form/Knob",
  component: Knob,
  tags: ["autodocs"],
} satisfies Meta<typeof Knob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    disabled: false,
    readOnly: false,
    showValue: true,
    step: 1,
    min: 0,
    max: 100,
    strokeWidth: 14,
    unstyled: false,
  },
  render: (args) => {
    const [value, setValue] = useState<number>(0);
    return (
      <Knob
        {...args}
        value={value}
        onChange={(e: KnobChangeEvent) => setValue(e.value)}
      />
    );
  },
};
