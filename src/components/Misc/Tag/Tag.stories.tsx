import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tag, TagProps } from "./Tag";

const meta = {
  title: "Components/Misc/Tag",
  component: Tag,
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    rounded: false,
    unstyled: false,
  },
  render: (args: TagProps) => (
    <div className="card flex flex-wrap justify-content-center gap-2">
      <Tag {...args} value="Primary" />
      <Tag {...args} severity="success" value="Success" />
      <Tag {...args} severity="info" value="Info" />
      <Tag {...args} severity="warning" value="Warning" />
      <Tag {...args} severity="danger" value="Danger" />
    </div>
  ),
};

export const Pill: Story = {
  args: {
    rounded: false,
    unstyled: false,
  },
  render: (args: TagProps) => (
    <div className="card flex flex-wrap justify-content-center gap-2">
      <Tag {...args} value="Primary" rounded />
      <Tag {...args} severity="success" value="Success" rounded />
      <Tag {...args} severity="info" value="Info" rounded />
      <Tag {...args} severity="warning" value="Warning" rounded />
      <Tag {...args} severity="danger" value="Danger" rounded />
    </div>
  ),
};

export const Icon: Story = {
  args: {
    rounded: false,
    unstyled: false,
  },
  render: (args: TagProps) => (
    <div className="card">
      <Tag {...args} className="mr-2" icon="pi pi-user" value="Primary" />
      <Tag
        {...args}
        className="mr-2"
        icon="pi pi-check"
        severity="success"
        value="Success"
      />
      <Tag
        {...args}
        className="mr-2"
        icon="pi pi-info-circle"
        severity="info"
        value="Info"
      />
      <Tag
        {...args}
        className="mr-2"
        icon="pi pi-exclamation-triangle"
        severity="warning"
        value="Warning"
      />
      <Tag {...args} icon="pi pi-times" severity="danger" value="Danger" />
    </div>
  ),
};
