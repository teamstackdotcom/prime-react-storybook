import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { MenuItem } from "primereact/menuitem";
import { SpeedDial, SpeedDialProps } from "./SpeedDial";

export const LinearDoc = (args: SpeedDialProps) => {
  const toast = useRef<Toast>(null);
  const items: MenuItem[] = [
    {
      label: "Add",
      icon: "pi pi-pencil",
      command: () => {
        toast.current?.show({
          severity: "info",
          summary: "Add",
          detail: "Data Added",
        });
      },
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        toast.current?.show({
          severity: "success",
          summary: "Update",
          detail: "Data Updated",
        });
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        toast.current?.show({
          severity: "error",
          summary: "Delete",
          detail: "Data Deleted",
        });
      },
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
      command: () => {},
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
      command: () => {},
    },
  ];

  return (
    <div
      style={{
        height: "500px",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <Toast ref={toast} />
        <SpeedDial
          {...args}
          model={items}
          direction="up"
          style={{ left: "calc(50% - 2rem)", bottom: 0 }}
        />
        <SpeedDial
          {...args}
          model={items}
          direction="down"
          style={{ left: "calc(50% - 2rem)", top: 0 }}
        />
        <SpeedDial
          {...args}
          model={items}
          direction="left"
          style={{ top: "calc(50% - 2rem)", left: 0 }}
        />
        <SpeedDial
          {...args}
          model={items}
          direction="right"
          style={{ top: "calc(50% - 2rem)", right: 0 }}
        />
      </div>
    </div>
  );
};
