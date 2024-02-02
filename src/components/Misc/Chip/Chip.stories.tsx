import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Chip, ChipProps } from "./Chip";

const meta = {
  title: "Components/Misc/Chip",
  component: Chip,
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    removable: false,
    unstyled: false,
  },
  render: (args: ChipProps) => (
    <div className="card flex flex-wrap gap-2">
      <Chip {...args} label="Action" />
      <Chip {...args} label="Comedy" />
      <Chip {...args} label="Mystery" />
      <Chip {...args} label="Thriller" removable />
    </div>
  ),
};

export const Icon: Story = {
  args: {
    removable: false,
    unstyled: false,
  },
  render: (args: ChipProps) => (
    <div className="card flex flex-wrap gap-2">
      <Chip {...args} label="Apple" icon="pi pi-apple" />
      <Chip {...args} label="Facebook" icon="pi pi-facebook" />
      <Chip {...args} label="Google" icon="pi pi-google" />
      <Chip {...args} label="Microsoft" icon="pi pi-microsoft" />
    </div>
  ),
};

export const Image: Story = {
  args: {
    removable: false,
    unstyled: false,
  },
  render: (args: ChipProps) => (
    <div className="card flex flex-wrap gap-2">
      <Chip
        {...args}
        label="Amy Elsner"
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
      />
      <Chip
        {...args}
        label="Asiya Javayant"
        image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
      />
      <Chip
        {...args}
        label="Onyama Limba"
        image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
      />
      <Chip
        {...args}
        label="Xuxue Feng"
        image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
      />
    </div>
  ),
};
