import React from "react";
import {
  DialogBreakpoints,
  DialogMaximizeEvent,
  DialogPassThroughOptions,
  Dialog as PrimeDialog,
} from "primereact/dialog";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";
import { CSSTransitionProps } from "primereact/csstransition";
import { ContentProps } from "primereact/toast";

/**
 * Defines valid properties in Dialog component.
 * @group Properties
 */
export interface DialogProps {
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Defines a string that labels the close icon.
   */
  ariaCloseIconLabel?: string;
  /**
   * Base zIndex value to use in layering.
   * @defaultValue 0
   */
  baseZIndex?: number;
  /**
   * Whether background scroll should be blocked when dialog is visible.
   * @defaultValue false
   */
  blockScroll?: boolean;
  /**
   * Object literal to define widths per screen size.
   */
  breakpoints?: DialogBreakpoints;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Style class of the component.
   */
  className?: string;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @defaultValue true
   */
  closable?: boolean;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @defaultValue true
   */
  closeOnEscape?: boolean;
  /**
   * Style class of the content section.
   */
  contentClassName?: string;
  /**
   * Style of the content section.
   */
  contentStyle?: React.CSSProperties;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @defaultValue false
   */
  dismissableMask?: boolean;
  /**
   * Enables dragging to change the position using header.
   * @defaultValue true
   */
  draggable?: boolean;
  /**
   * When enabled, first button receives focus on show.
   * @defaultValue true
   */
  focusOnShow?: boolean;
  /**
   * Footer content of the dialog.
   */
  footer?: React.ReactNode | ((props: DialogProps) => React.ReactNode);
  /**
   * Title content of the dialog.
   */
  header?: React.ReactNode | ((props: DialogProps) => React.ReactNode);
  /**
   * Style class of the header section.
   */
  headerClassName?: string;
  /**
   * Icon to display in the dialog close button.
   */
  closeIcon?: IconType<DialogProps>;
  /**
   * Style of the header section.
   */
  headerStyle?: React.CSSProperties;
  /**
   * Custom icons template for the header.
   */
  icons?: React.ReactNode | ((props: DialogProps) => React.ReactNode);
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * Keeps dialog in the viewport.
   * @defaultValue true
   */
  keepInViewport?: boolean;
  /**
   * Style class of the mask.
   */
  maskClassName?: string;
  /**
   * Inline style of the mask.
   */
  maskStyle?: React.CSSProperties;
  /**
   * Whether the dialog can be displayed full screen.
   * @defaultValue false
   */
  maximizable?: boolean;
  /**
   * When enabled, the dialog is initially displayed full screen.
   * @defaultValue false
   */
  maximized?: boolean;
  /**
   * Minimum value for the left coordinate of dialog in dragging.
   * @defaultValue 0
   */
  minX?: number;
  /**
   * Minimum value for the top coordinate of dialog in dragging.
   * @defaultValue 0
   */
  minY?: number;
  /**
   * Defines if background should be blocked when dialog is displayed.
   * @defaultValue true
   */
  modal?: boolean;
  /**
   * Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".
   * @defaultValue center
   */
  position?:
    | "center"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  /**
   * Enables resizing of the content.
   * @defaultValue true
   */
  resizable?: boolean;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @defaultValue false
   */
  rtl?: boolean;
  /**
   * Whether to show the header or not.
   * @defaultValue true
   */
  showHeader?: boolean;
  /**
   * Icon to display in the dialog maximize button when dialog is not maximized.
   */
  maximizeIcon?: IconType<DialogProps>;
  /**
   * Icon to display in the dialog maximize button when dialog is maximized.
   */
  minimizeIcon?: IconType<DialogProps>;
  /**
   * Inline style of the component.
   */
  style?: React.CSSProperties;
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Specifies the visibility of the dialog.
   * @defaultValue false
   */
  visible?: boolean;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {DialogPassThroughOptions}
   */
  pt?: DialogPassThroughOptions;
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
  /**
   * Callback to invoke when dialog is clicked.
   * @param {React.PointerEvent<HTMLElement>} event - Browser event.
   */
  onClick?(event: React.PointerEvent<HTMLElement>): void;
  /**
   * Callback to invoke when dragging dialog.
   * @param {React.DragEvent<HTMLElement>} event - Browser event.
   */
  onDrag?(event: React.DragEvent<HTMLElement>): void;
  /**
   * Callback to invoke when dialog dragging is completed.
   * @param {React.DragEvent<HTMLElement>} event - Browser event.
   */
  onDragEnd?(event: React.DragEvent<HTMLElement>): void;
  /**
   * Callback to invoke when dialog dragging is initiated.
   * @param {React.DragEvent<HTMLElement>} event - Browser event.
   */
  onDragStart?(event: React.DragEvent<HTMLElement>): void;
  /**
   * Callback to invoke when dialog is hidden (Required).
   */
  onHide(): void;
  /**
   * Callback to invoke when the mask is clicked.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onMaskClick?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke when toggle maximize icon is clicked.
   * @param {DialogMaximizeEvent} event - Custom click event.
   */
  onMaximize?(event: DialogMaximizeEvent): void;
  /**
   * Callback to invoke while resizing dialog.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onResize?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke when dialog resizing is completed.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onResizeEnd?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke when dialog resizing is initiated.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onResizeStart?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke when dialog is showed.
   */
  onShow?(): void;
  /**
   * Specifies a custom content for the dialog. For more complex markup, use the "content" slot instead.
   * @param {ContentProps} props - The values of dialog.
   * @return {React.ReactNode}
   */
  content?: React.ReactNode | ((props: ContentProps) => React.ReactNode);
}

/**
 * **PrimeReact - Dialog**
 *
 * _Dialog is a container to display content in an overlay window._
 *
 * [Live Demo](https://www.primereact.org/dialog/)
 * --- ---
 *
 * @group Component
 */
// @ts-ignore
export const Dialog = (props: DialogProps) => <PrimeDialog {...props} />;
