import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { SliderChangeEvent } from "primereact/slider";

const meta = {
  title: "Components/Form/Slider",
  component: Slider,
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 0,
    min: 0,
    max: 100,
    orientation: "horizontal",
    step: 1,
    range: false,
    disabled: false,
    unstyled: false,
    className: "w-14rem",
  },
  render: (args) => {
    const [value, setValue] = useState<number | [number, number] | null>(null);
    return (
      <Slider
        {...args}
        value={value as number | [number, number]}
        onChange={(e: SliderChangeEvent) => setValue(e.value)}
      />
    );
  },
};
