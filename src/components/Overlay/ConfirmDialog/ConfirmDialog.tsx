import React from "react";
import {
  ConfirmDialogOptions,
  ConfirmDialogPassThroughOptions,
  ConfirmDialog as PrimeConfirmDialog,
} from "primereact/confirmdialog";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";
import { DialogProps } from "primereact/dialog";

/**
 * Defines valid properties in ConfirmDialog component. In addition to these, all properties of {@link dialog} can be used in this component.
 * @group Properties
 */
export interface ConfirmDialogProps
  extends Omit<DialogProps, "onHide" | "footer" | "pt"> {
  /**
   * Unique tag key used to separate the confirmDialog components in the page.
   */
  tagKey?: string;
  /**
   * Specifies the visibility of the confirm dialog.
   * @defaultValue false
   */
  visible?: boolean;
  /**
   * Message of the confirmation.
   */
  message?:
    | React.ReactNode
    | ((options: ConfirmDialogOptions) => React.ReactNode);
  /**
   * Label of the reject button.
   * @defaultValue No
   */
  rejectLabel?: string;
  /**
   * Label of the accept button.
   * @defaultValue Yes
   */
  acceptLabel?: string;
  /**
   * Icon to display next to the message.
   */
  icon?: IconType<ConfirmDialogProps>;
  /**
   * Icon of the reject button.
   */
  rejectIcon?: IconType<ConfirmDialogProps>;
  /**
   * Icon of the accept button.
   */
  acceptIcon?: IconType<ConfirmDialogProps>;
  /**
   * Style class of the reject button.
   */
  rejectClassName?: string;
  /**
   * Style class of the accept button.
   */
  acceptClassName?: string;
  /**
   * Element to receive the focus when the dialog gets visible, valid values are "accept" and "reject".
   * @defaultValue accept
   */
  defaultFocus?: string;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Style class of the element.
   */
  className?: string;
  /**
   * Footer content of the confirm dialog.
   */
  footer?:
    | React.ReactNode
    | ((options: ConfirmDialogOptions) => React.ReactNode);
  /**
   * Callback to invoke when confirm dialog is hidden.
   */
  onHide?(result: string): void;
  /**
   * Callback to execute when action is confirmed.
   */
  accept?(): void;
  /**
   * Callback to execute when action is rejected.
   */
  reject?(): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ConfirmDialogPassThroughOptions}
   */
  pt?: ConfirmDialogPassThroughOptions;
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
 * **PrimeReact - ConfirmDialog**
 *
 * _ConfirmDialog uses a Dialog UI with confirmDialog method or <ConfirmDialog> tag._
 *
 * [Live Demo](https://www.primereact.org/confirmdialog/)
 * --- ---
 *
 * @group Component
 */
export const ConfirmDialog = (props: ConfirmDialogProps) => {
  return <PrimeConfirmDialog {...props} />;
};
