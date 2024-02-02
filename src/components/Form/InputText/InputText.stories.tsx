import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { InputText } from "./InputText";

const meta = {
  title: "Components/Form/InputText",
  component: InputText,
  tags: ["autodocs"],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    validateOnly: false,
    unstyled: false,
  },
  render: (args) => {
    const [value, setValue] = useState<string>("");
    return (
      <InputText
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    );
  },
};
