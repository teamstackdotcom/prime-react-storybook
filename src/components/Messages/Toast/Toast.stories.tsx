import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from "./Toast";
import { Button } from "../../Button/Button/Button";
import { TemplateDemo } from "./TempalteDemo";

const meta = {
  title: "Components/Messages/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    baseZIndex: 0,
    position: "top-right",
    appendTo: "self",
  },
  render: (args: ToastProps) => {
    //@ts-ignore
    const toast = useRef<Toast>(null);
    const show = () => {
      toast.current?.show({
        severity: "info",
        summary: "Info",
        detail: "Message Content",
      });
    };

    return (
      <div
        style={{
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Toast {...args} innerref={toast} />
        <Button onClick={show} label="Show" />
      </div>
    );
  },
};

export const Template: Story = {
  args: {
    baseZIndex: 0,
    position: "bottom-center",
    appendTo: "self",
  },
  render: TemplateDemo,
};
