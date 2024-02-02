import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputMask } from "./InputMask";
import { Nullable } from "primereact/ts-helpers";

const meta = {
  title: "Components/Form/InputMask",
  component: InputMask,
  tags: ["autodocs"],
} satisfies Meta<typeof InputMask>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    slotChar: "_",
    autoClear: true,
    unmask: false,
    disabled: false,
    readOnly: false,
    required: false,
    unstyled: false,
    mask: "99-999999",
    placeholder: "99-999999",
  },
  render: (args) => {
    const [value, setValue] = useState<Nullable<string>>();
    return (
      <InputMask
        {...args}
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
