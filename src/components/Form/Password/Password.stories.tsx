import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Password } from "./Password";

const meta = {
  title: "Components/Form/Password",
  component: Password,
  tags: ["autodocs"],
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

interface City {
  name: string;
  code: string;
}

export const Basic: Story = {
  args: {
    promptLabel: "Please enter a password",
    weakLabel: "Weak",
    mediumLabel: "Medium",
    strongLabel: "Strong",
    mediumRegex:
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",
    strongRegex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
    feedback: true,
    toggleMask: false,
    appendTo: document.body,
    unstyled: false,
  },
  render: (args) => {
    const [value, setValue] = useState<string>("");
    return (
      <Password
        {...args}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    );
  },
};
