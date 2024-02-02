import React, { useRef } from "react";
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";
import { SplitButtonProps } from "./SplitButton";

export const BasicDemo = (args: SplitButtonProps) => {
  const toast = useRef<Toast>(null);
  const items: MenuItem[] = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current?.show({
          severity: "success",
          summary: "Updated",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {
        toast.current?.show({
          severity: "warn",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {},
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {},
    },
  ];

  const save = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Data Saved",
    });
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast}></Toast>
      <SplitButton {...args} onClick={save} model={items} />
    </div>
  );
};
