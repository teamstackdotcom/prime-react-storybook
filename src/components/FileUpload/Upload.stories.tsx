import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "./Upload";
import { TemplateDemo } from "./TemplateDemo";

const meta = {
  title: "Components/File/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

const chooseOptions = {
  icon: "pi pi-fw pi-images",
  iconOnly: true,
  className: "custom-choose-btn p-button-rounded p-button-outlined",
};
const uploadOptions = {
  icon: "pi pi-fw pi-cloud-upload",
  iconOnly: true,
  className:
    "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
};
const cancelOptions = {
  icon: "pi pi-fw pi-times",
  iconOnly: true,
  className:
    "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
};

const emptyTemplate = () => {
  return (
    <div className="flex align-items-center flex-column">
      <i
        className="pi pi-image mt-3 p-5"
        style={{
          fontSize: "5em",
          borderRadius: "50%",
          backgroundColor: "var(--surface-b)",
          color: "var(--surface-d)",
        }}
      ></i>
      <span
        style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
        className="my-5"
      >
        Drag and Drop Image Here
      </span>
    </div>
  );
};

export const Advanced: Story = {
  args: {
    mode: "advanced",
    disabled: false,
    auto: false,
    invalidFileSizeMessageSummary: "Invalid file size",
    invalidFileSizeMessageDetail: "Maximum upload size is.",
    withCredentials: false,
    previewWidth: 50,
    customUpload: false,
    unstyled: false,
    name: "demo[]",
    url: "/api/upload",
    multiple: true,
    accept: "image/*",
    maxFileSize: 1000000,
    chooseOptions,
    uploadOptions,
    cancelOptions,
    emptyTemplate,
  },
  render: TemplateDemo,
};
