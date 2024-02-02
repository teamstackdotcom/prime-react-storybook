import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ConfirmDialog, ConfirmDialogProps } from "./ConfirmDialog";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

const meta = {
  title: "Components/Overlay/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    visible: false,
    rejectLabel: "No",
    acceptLabel: "Yes",
    defaultFocus: "accept",
    appendTo: document.body,
    unstyled: false,
  },
  render: (args: ConfirmDialogProps) => {
    const toast = useRef<Toast>(null);
    const accept = () =>
      toast.current?.show({
        severity: "info",
        summary: "Confirmed",
        detail: "You have accepted",
        life: 3000,
      });
    const reject = () =>
      toast.current?.show({
        severity: "warn",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });

    const confirm = () => {
      confirmDialog({
        message: "Do you want to delete this record?",
        header: "Delete Confirmation",
        icon: "pi pi-info-circle",
        defaultFocus: "reject",
        acceptClassName: "p-button-danger",
        accept,
        reject,
      });
    };

    return (
      <>
        <Toast ref={toast} />
        <ConfirmDialog {...args} />
        <Button onClick={confirm} icon="pi pi-times" label="Delete" />
      </>
    );
  },
};
