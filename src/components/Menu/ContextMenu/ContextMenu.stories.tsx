// @ts-nocheck
import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu, ContextMenuProps } from "./ContextMenu";
import { MenuItem } from "primereact/menuitem";

const meta = {
  title: "Components/Menu/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const model: MenuItem[] = [
  { label: "Copy", icon: "pi pi-copy" },
  { label: "Rename", icon: "pi pi-file-edit" },
];

export const Basic: Story = {
  args: {
    global: false,
    autoZIndex: true,
    baseZIndex: 0,
    scrollHeight: "400px",
    appendTo: document.body,
    unstyled: false,
    breakpoint: "767px",
    model,
  },
  render: (args: ContextMenuProps) => {
    const cm = useRef<ContextMenu>(null);
    return (
      <>
        <p>Do a right click on the image.</p>
        <ContextMenu {...args} innerref={cm} />
        <img
          src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg"
          alt="Logo"
          className="max-w-full"
          onContextMenu={(e) => cm.current?.show(e)}
        />
      </>
    );
  },
};
