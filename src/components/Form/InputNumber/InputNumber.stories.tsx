import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "./InputNumber";
import { Nullable } from "primereact/ts-helpers";

const meta = {
  title: "Components/Form/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    autoFocus: false,
    format: true,
    showButtons: false,
    buttonLayout: "stacked",
    currencyDisplay: "symbol",
    useGrouping: true,
    required: false,
    allowEmpty: true,
    step: 1,
    unstyled: false,
  },
  render: (args) => {
    const [value, setValue] = useState<Nullable<number | null>>(42723);
    return (
      <InputNumber
        {...args}
        value={value}
        onValueChange={(e) => setValue(e.value)}
      />
    );
  },
};
