import React from "react";
import {
  ContentProps,
  Sidebar as PrimeSidebar,
  SidebarPassThroughOptions,
} from "primereact/sidebar";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in Sidebar component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SidebarProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref" | "content"
  > {
  /**
   * Inline style of the mask.
   */
  maskStyle?: React.CSSProperties;
  /**
   * Style class of the mask.
   */
  maskClassName?: string;
  /**
   * Specifies the visibility of the dialog.
   * @defaultValue false
   */
  visible?: boolean;
  /**
   * Specifies the position of the sidebar, valid values are "left" and "right".
   * @defaultValue left
   */
  position?: "top" | "bottom" | "left" | "right";
  /**
   * Adds a close icon to the header to hide the dialog.
   * @defaultValue false
   */
  fullScreen?: boolean;
  /**
   * Whether to block scrolling of the document when sidebar is active.
   * @defaultValue false
   */
  blockScroll?: boolean;
  /**
   * Base zIndex value to use in layering.
   * @defaultValue 0
   */
  baseZIndex?: number;
  /**
   * Whether to dismiss sidebar on click of the mask.
   * @defaultValue true
   */
  dismissable?: boolean;
  /**
   * Whether to display a close icon inside the panel.
   * @defaultValue true
   */
  showCloseIcon?: boolean;
  /**
   * Icon of the close button.
   */
  closeIcon?: IconType<SidebarProps>;
  /**
   * Aria label of the close icon.
   * @defaultValue close
   */
  ariaCloseLabel?: string;
  /**
   * Specifies if pressing escape key should hide the sidebar.
   * @defaultValue true
   */
  closeOnEscape?: boolean;
  /**
   * Custom template for the header.
   * @defaultValue true
   */
  header?: React.ReactNode | ((props: SidebarProps) => React.ReactNode);
  /**
   * Custom icons template for the header.
   * @defaultValue true
   */
  icons?: React.ReactNode | ((props: SidebarProps) => React.ReactNode);
  /**
   * Whether to a modal layer behind the sidebar.
   * @defaultValue true
   */
  modal?: boolean;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and self. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   * @type {CSSTransitionProps}
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Callback to invoke when sidebar gets shown.
   */
  onShow?(): void;
  /**
   * Callback to invoke when the actions used to close the sidebar are triggered. Exp; close icon, mask and esc key.
   */
  onHide(): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {SidebarPassThroughOptions}
   */
  pt?: SidebarPassThroughOptions;
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
   * Specifies a custom content for the sidebar. For more complex markup, use the "content" slot instead.
   * @param {ContentProps} props - The values of sidebar.
   * @return {React.ReactNode}
   */
  content?: React.ReactNode | ((props: ContentProps) => React.ReactNode);
}

/**
 * **PrimeReact - Sidebar**
 *
 * _Sidebar is a panel component displayed as an overlay._
 *
 * [Live Demo](https://www.primereact.org/sidebar/)
 * --- ---
 *
 * @group Component
 */
export const Sidebar = (props: SidebarProps) => <PrimeSidebar {...props} />;
