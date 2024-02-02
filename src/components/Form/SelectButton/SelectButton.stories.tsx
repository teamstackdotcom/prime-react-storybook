import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SelectButton } from "./SelectButton";
import { SelectButtonChangeEvent } from "primereact/selectbutton";

const meta = {
  title: "Components/Form/SelectButton",
  component: SelectButton,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    multiple: false,
    allowEmpty: true,
    disabled: false,
    unstyled: false,
    options: ["Off", "On"],
  },
  render: (args) => {
    const [value, setValue] = useState<string>(args.options?.[0]);
    return (
      <SelectButton
        {...args}
        value={value}
        onChange={(e: SelectButtonChangeEvent) => setValue(e.value)}
      />
    );
  },
};
