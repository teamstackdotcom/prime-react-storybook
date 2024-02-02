import React from "react";
import {
  ContentProps,
  Toast as PrimeToast,
  ToastMessage,
  ToastPassThroughOptions,
} from "primereact/toast";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";

/**
 * Defines valid properties in Toast component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ToastProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref" | "pt" | "content"
  > {
  /**
   * Base zIndex value to add to initial layering of PrimeReact components which start from 1000.
   * @defaultValue 0
   */
  baseZIndex?: number;
  /**
   * Position of the toast in viewport, valid values are 'center', 'top-center', 'top-left', 'top-right', 'bottom-center', 'bottom-left', 'bottom-right'.
   * @defaultValue top-right
   */
  position?:
    | "center"
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right";
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * DOM element instance where the component should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue self
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {ToastMessage} message - Clicked message
   */
  onClick?(message: ToastMessage): void;
  /**
   * Callback to invoke when a message is removed.
   * @param {ToastMessage} message - Removed message
   */
  onRemove?(message: ToastMessage): void;
  /**
   * Callback to invoke when message becomes visible.
   */
  onShow?(): void;
  /**
   * Callback to invoke when message becomes hidden.
   */
  onHide?(): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ToastPassThroughOptions}
   */
  pt?: ToastPassThroughOptions;
  /**
   * Used to configure passthrough(pt) options of the component.
   * @type {PassThroughOptions}
   */
  ptOptions?: PassThroughOptions;
  /**
   * Specifies a custom content for the toast. For more complex markup, use the "content" slot instead.
   * @param {ContentProps} props - The values of toast.
   * @return {React.ReactNode}
   */
  content?: React.ReactNode | ((props: ContentProps) => React.ReactNode);
}

/**
 * **PrimeReact - Toast**
 *
 * _Toast is used to display messages in an overlay._
 *
 * [Live Demo](https://www.primereact.org/toast/)
 * --- ---
 *
 * @group Component
 */
export const Toast = (
  props: ToastProps & { innerref?: React.MutableRefObject<PrimeToast> }
) => <PrimeToast {...props} ref={props.innerref} />;
