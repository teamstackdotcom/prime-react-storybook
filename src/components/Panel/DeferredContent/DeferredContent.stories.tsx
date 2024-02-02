import React, { useRef } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DeferredContent, DeferredContentProps } from "./DeferredContent";
import { Toast } from "primereact/toast";

const meta = {
  title: "Components/Panel/DeferredContent",
  component: DeferredContent,
  tags: ["autodocs"],
} satisfies Meta<typeof DeferredContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args: DeferredContentProps) => {
    const toast = useRef<Toast | null>(null);
    const onImageLoad = () => {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Image loaded",
      });
    };
    return (
      <>
        <p style={{ marginBottom: "70rem", textAlign: "center" }}>
          Scroll down to lazy load an image.
        </p>
        <Toast ref={toast} />
        <DeferredContent {...args} onLoad={onImageLoad}>
          <img
            className="w-full md:w-30rem md:block md:mx-auto"
            src="https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg"
            alt="Prime"
          />
        </DeferredContent>
      </>
    );
  },
};
