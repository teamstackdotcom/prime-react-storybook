import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "./Badge";

const meta = {
  title: "Components/Misc/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    unstyled: false,
    value: "2",
  },
};

export const Position: Story = {
  args: {
    unstyled: false,
    value: "2",
  },
  render: (args: BadgeProps) => (
    <div className="card flex flex-wrap justify-content-center gap-4">
      <i className="pi pi-bell p-overlay-badge" style={{ fontSize: "2rem" }}>
        <Badge {...args}></Badge>
      </i>
      <i
        className="pi pi-calendar p-overlay-badge"
        style={{ fontSize: "2rem" }}
      >
        <Badge {...args}></Badge>
      </i>
      <i
        className="pi pi-envelope p-overlay-badge"
        style={{ fontSize: "2rem" }}
      >
        <Badge {...args}></Badge>
      </i>
    </div>
  ),
};
