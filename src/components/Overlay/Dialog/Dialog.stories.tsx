import React, { useState } from "react";
import { Button } from "primereact/button";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogProps } from "./Dialog";

const meta = {
  title: "Components/Overlay/Dialog",
  component: Dialog,
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const Basic: Story = {
  args: {
    appendTo: document.body,
    baseZIndex: 0,
    blockScroll: false,
    closable: true,
    closeOnEscape: true,
    dismissableMask: false,
    draggable: true,
    focusOnShow: true,
    keepInViewport: true,
    maximizable: false,
    maximized: false,
    minX: 0,
    minY: 0,
    modal: true,
    position: "center",
    resizable: true,
    rtl: false,
    showHeader: true,
    visible: false,
    unstyled: false,
    children: <p className="m-0">{text}</p>,
    header: "Header",
  },
  render: (args: DialogProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
      <>
        <Button
          label="Show"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
        <Dialog
          {...args}
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        />
      </>
    );
  },
};
