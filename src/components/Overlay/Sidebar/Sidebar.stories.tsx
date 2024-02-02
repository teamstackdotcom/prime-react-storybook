import React, { useState } from "react";
import { Button } from "primereact/button";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar, SidebarProps } from "./Sidebar";

const meta = {
  title: "Components/Overlay/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

export const Basic: Story = {
  args: {
    visible: false,
    position: "left",
    fullScreen: false,
    blockScroll: false,
    baseZIndex: 0,
    dismissable: true,
    showCloseIcon: true,
    ariaCloseLabel: "close",
    closeOnEscape: true,
    modal: true,
    appendTo: document.body,
    unstyled: false,
  },
  render: (args: SidebarProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
      <>
        <Sidebar {...args} visible={visible} onHide={() => setVisible(false)}>
          <h2>Sidebar</h2>
          <p>{text}</p>
        </Sidebar>
        <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
      </>
    );
  },
};
