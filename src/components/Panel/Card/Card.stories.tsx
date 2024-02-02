import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "./Card";

const meta = {
  title: "Components/Panel/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    unstyled: false,
    title: "Simple Card",
    children: (
      <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
        consequuntur error repudiandae numquam deserunt quisquam repellat libero
        asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
    ),
  },
  render: (args: CardProps) => <Card {...args} />,
};
