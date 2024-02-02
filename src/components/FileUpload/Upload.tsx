import React from "react";
import {
  FileUploadBeforeSendEvent,
  FileUploadBeforeUploadEvent,
  FileUploadErrorEvent,
  FileUploadHandlerEvent,
  FileUploadHeaderTemplateOptions,
  FileUploadOptions,
  FileUploadPassThroughOptions,
  FileUploadProgressBarTemplateOptions,
  FileUploadProgressEvent,
  FileUploadRemoveEvent,
  FileUploadSelectEvent,
  FileUploadUploadEvent,
  ItemTemplateOptions,
  FileUpload as PrimeFileUpload,
} from "primereact/fileupload";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in FileUpload component.
 * @group Properties
 */
export interface FileUploadProps {
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * Name of the request parameter to identify the files at backend.
   */
  name?: string;
  /**
   * Remote url to upload the files.
   */
  url?: string;
  /**
   * Defines the UI of the component, possible values are "advanced" and "basic".
   * @defaultValue advanced
   */
  mode?: "basic" | "advanced";
  /**
   * Used to select multiple files at once from file dialog.
   * @defaultValue false
   */
  multiple?: boolean;
  /**
   * Pattern to restrict the allowed file types such as "image/*".
   * @defaultValue false
   */
  accept?: string;
  /**
   * Icon of the remove element.
   */
  removeIcon?: IconType<FileUploadProps>;
  /**
   * Disables the upload functionality.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * When enabled, upload begins automatically after selection is completed.
   * @defaultValue false
   */
  auto?: boolean;
  /**
   * Maximum file size allowed in bytes.
   */
  maxFileSize?: number;
  /**
   * Summary message of the invalid fize size.
   * @defaultValue Invalid file size
   */
  invalidFileSizeMessageSummary?: string;
  /**
   * Detail message of the invalid fize size.
   * @defaultValue "Maximum upload size is."
   */
  invalidFileSizeMessageDetail?: string;
  /**
   * Inline style of the component.
   */
  style?: React.CSSProperties;
  /**
   * Style class of the component.
   */
  className?: string;
  /**
   * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * @defaultValue false
   */
  withCredentials?: boolean;
  /**
   * Width of the image thumbnail in pixels.
   * @defaultValue 50
   */
  previewWidth?: number;
  /**
   * Label of the choose button. Defaults to global value in Locale configuration.
   */
  chooseLabel?: string;
  /**
   * Label of the upload button. Defaults to global value in Locale configuration.
   */
  uploadLabel?: string;
  /**
   * Label of the cancel button. Defaults to global value in Locale configuration.
   */
  cancelLabel?: string;
  /**
   * Options used to customize the choose button. These options have "label", "icon", "className" and "style" properties.
   */
  chooseOptions?: FileUploadOptions;
  /**
   * Options used to customize the upload button. These options have "label", "icon", "className" and "style" properties.
   */
  uploadOptions?: FileUploadOptions;
  /**
   * Options used to customize the cancel button. These options have "label", "icon", "className" and "style" properties.
   */
  cancelOptions?: FileUploadOptions;
  /**
   * Whether to use the default upload or a manual implementation defined in uploadHandler callback.
   * @defaultValue false
   */
  customUpload?: boolean;
  /**
   * Custom template of the header.
   */
  headerClassName?: string;
  /**
   * Inline style of the header.
   */
  headerStyle?: React.CSSProperties;
  /**
   * Style class of the content.
   */
  contentClassName?: string;
  /**
   * Inline style of the content.
   */
  contentStyle?: React.CSSProperties;
  /**
   * Custom template of the header.
   */
  headerTemplate?:
    | React.ReactNode
    | ((options: FileUploadHeaderTemplateOptions) => React.ReactNode);
  /**
   * Custom template of each item content in the container.
   */
  itemTemplate?:
    | React.ReactNode
    | ((file: object, options: ItemTemplateOptions) => React.ReactNode);
  /**
   * Custom template of empty content in the container.
   */
  emptyTemplate?:
    | React.ReactNode
    | ((props: FileUploadProps) => React.ReactNode);
  /**
   * Custom template of progressBar content in the container.
   */
  progressBarTemplate?:
    | React.ReactNode
    | ((options: FileUploadProgressBarTemplateOptions) => React.ReactNode);
  /**
   * Callback to invoke before file upload begins to customize the request such as post parameters before the files.
   * @param {FileUploadBeforeUploadEvent} event - Custom beforeUpload.
   */
  onBeforeUpload?(event: FileUploadBeforeUploadEvent): void;
  /**
   * Callback to invoke before file send begins to customize the request such as adding headers.
   * @param {FileUploadBeforeSendEvent} event - Browser event.
   */
  onBeforeSend?(event: FileUploadBeforeSendEvent): void;
  /**
   * Callback to invoke before files dropped. Return false from callback to prevent drop.
   * @param {DragEvent} event - DragEvent instance.
   */
  onBeforeDrop?(event: DragEvent): void;
  /**
   * Callback to invoke before files are selected. Return false from callback to prevent selection.
   * @param {FileUploadSelectEvent} event - Custom select event.
   */
  onBeforeSelect?(event: FileUploadSelectEvent): void;
  /**
   * Callback to invoke when file upload is complete.
   * @param {FileUploadUploadEvent} event - Custom upload event.
   */
  onUpload?(event: FileUploadUploadEvent): void;
  /**
   * Callback to invoke if file upload fails.
   * @param {FileUploadErrorEvent} event - Custom error event.
   */
  onError?(event: FileUploadErrorEvent): void;
  /**
   * Callback to invoke when files in queue are removed without uploading.
   */
  onClear?(): void;
  /**
   * Callback to invoke when files are selected.
   * @param {FileUploadSelectEvent} event - Custom select event.
   */
  onSelect?(event: FileUploadSelectEvent): void;
  /**
   * Callback to invoke when files are being uploaded.
   * @param {FileUploadProgressEvent} event - Custom progress event.
   */
  onProgress?(event: FileUploadProgressEvent): void;
  /**
   * Callback to invoke when a validation file fails.
   * @param {File} file - Invalid file.
   */
  onValidationFail?(file: File): void;
  /**
   * Callback to invoke in custom upload mode to upload the files manually.
   * @param {FileUploadHandlerEvent} event - Custom uploadHandler event
   */
  uploadHandler?(event: FileUploadHandlerEvent): void;
  /**
   * Callback to invoke when a file is removed without uploading using clear button of a file.
   * @param {FileUploadRemoveEvent} event - Custom remove event.
   */
  onRemove?(event: FileUploadRemoveEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {FileUploadPassThroughOptions}
   */
  pt?: FileUploadPassThroughOptions;
  /**
   * Used to configure passthrough(pt) options of the component.
   * @type {PassThroughOptions}
   */
  ptOptions?: PassThroughOptions;
  /**
   * When enabled, it removes component related styles in the core.
   * @defaultValue false
   */
  unstyled?: boolean;
}

/**
 * **PrimeReact - FileUpload**
 *
 * _FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations._
 *
 * [Live Demo](https://www.primereact.org/fileupload/)
 * --- ---
 *
 * @group Component
 */
export const FileUpload = (props: FileUploadProps) => (
  <PrimeFileUpload {...props} />
);
