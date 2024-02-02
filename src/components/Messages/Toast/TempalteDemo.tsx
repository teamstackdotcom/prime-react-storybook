import React, { useState, useRef, ReactNode } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Avatar } from "primereact/avatar";
import { ToastProps } from "./Toast";

export const TemplateDemo = (args: ToastProps) => {
  const [visible, setVisible] = useState(false);
  const toastBC = useRef<Toast>(null);

  const clear = () => {
    toastBC.current?.clear();
    setVisible(false);
  };

  const confirm = () => {
    if (!visible) {
      setVisible(true);
      toastBC.current?.clear();
      toastBC.current?.show({
        severity: "success",
        summary: "Can you send me the report?",
        sticky: true,
        content: (
          <div
            className="flex flex-column align-items-left"
            style={{ flex: "1" }}
          >
            <div className="flex align-items-center gap-2">
              <Avatar
                image="https://primereact.org/images/avatar/amyelsner.png"
                shape="circle"
              />
              <span className="font-bold text-900">Amy Elsner</span>
            </div>
            <div className="font-medium text-lg my-3 text-900">
              {"Can you send me the report?"}
            </div>
            <Button
              className="p-button-sm flex"
              label="Reply"
              severity="success"
              onClick={clear}
            ></Button>
          </div>
        ),
      });
    }
  };

  return (
    <div
      className="card flex justify-content-center align-items-center"
      style={{ minHeight: "600px" }}
    >
      <Toast {...args} ref={toastBC} onRemove={clear} />
      <Button onClick={confirm} label="Confirm" />
    </div>
  );
};
