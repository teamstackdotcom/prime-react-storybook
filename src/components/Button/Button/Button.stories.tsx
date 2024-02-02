import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Components/Button/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Base Button",
    disabled: false,
    iconPos: "left",
    link: false,
    loading: false,
    loadingIcon: null,
    outlined: false,
    plain: false,
    raised: false,
    rounded: false,
    text: false,
    visible: true,
    unstyled: false,
  },
};

export const Icon: Story = {
  args: {
    ...Basic.args,
    label: "Icon Button",
    icon: "pi pi-check",
  },
};

export const Loading: Story = {
  args: {
    ...Basic.args,
    label: "Loading Button",
    loading: true,
  },
};

export const Severity: Story = {
  args: Basic.args,
  render: (args) => (
    <div style={{ display: "flex", gap: "4px" }}>
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" severity="secondary" />
      <Button {...args} label="Success" severity="success" />
      <Button {...args} label="Info" severity="info" />
      <Button {...args} label="Warning" severity="warning" />
      <Button {...args} label="Help" severity="help" />
      <Button {...args} label="Danger" severity="danger" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    label: "Disabled Button",
    disabled: true,
  },
};

export const Raised: Story = {
  args: {
    ...Basic.args,
    label: "Raised Button",
    raised: true,
  },
};

export const Rounded: Story = {
  args: {
    ...Basic.args,
    label: "Rounded Button",
    rounded: true,
  },
};

export const Text: Story = {
  args: {
    ...Basic.args,
    label: "Text Button",
    text: true,
  },
};

export const RaisedText: Story = {
  args: {
    ...Basic.args,
    label: "RaisedText Button",
    text: true,
    raised: true,
  },
};

export const Outlined: Story = {
  args: {
    ...Basic.args,
    label: "Outlined Button",
    outlined: true,
  },
};

export const IconOnly: Story = {
  args: {
    ...Basic.args,
    label: undefined,
    icon: "pi pi-check",
    "aria-label": "Filter",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "4px" }}>
      <Button {...args} />
      <Button {...args} rounded />
      <Button {...args} rounded outlined />
      <Button {...args} rounded text raised />
      <Button {...args} rounded text />
    </div>
  ),
};

export const Badges: Story = {
  args: {
    ...Basic.args,
    type: "button",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "4px" }}>
      <Button {...args} label="Emails" badge="8" />
      <Button
        {...args}
        label="Messages"
        icon="pi pi-users"
        outlined
        badge="2"
        badgeClassName="p-badge-danger"
      />
    </div>
  ),
};

export const ButtonSet: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <span className="p-buttonset">
      <Button {...args} label="Save" icon="pi pi-check" />
      <Button {...args} label="Delete" icon="pi pi-trash" />
      <Button {...args} label="Cancel" icon="pi pi-times" />
    </span>
  ),
};

export const Sizes: Story = {
  args: {
    ...Basic.args,
    icon: "pi pi-check",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "4px" }}>
      <Button {...args} label="Small" size="small" />
      <Button {...args} label="Normal" />
      <Button {...args} label="Large" size="large" />
    </div>
  ),
};

export const Template: Story = {
  args: {
    ...Basic.args,
    severity: "secondary",
    className: "bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700",
    label: undefined,
  },
  render: (args) => (
    <Button {...args}>
      <img
        alt="logo"
        src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg"
        className="h-2rem"
      ></img>
    </Button>
  ),
};
