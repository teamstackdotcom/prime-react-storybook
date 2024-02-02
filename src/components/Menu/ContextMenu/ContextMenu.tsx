import React from "react";
import {
  ContextMenuPassThroughOptions,
  ContextMenu as PrimeContextMenu,
} from "primereact/contextmenu";
import { IconType } from "primereact/utils";
import { MenuItem } from "primereact/menuitem";
import { CSSTransitionProps } from "primereact/csstransition";

/**
 * Defines valid properties in ContextMenu component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ContextMenuProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * An array of menuitems.
   */
  model?: MenuItem[];
  /**
   * Attaches the menu to document instead of a particular item.
   * @defaultValue false
   */
  global?: boolean;
  /**
   * Whether to automatically manage layering.
   * @defaultValue true
   */
  autoZIndex?: boolean;
  /**
   * Used to define a string that labels the component.
   */
  ariaLabel?: string;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledBy?: string;
  /**
   * Base zIndex value to use in layering.
   * @defaultValue 0
   */
  baseZIndex?: number;
  /**
   * The breakpoint to define the maximum width boundary when responsiveness is enabled.
   */
  breakpoint?: string;
  /**
   * Maximum height of the options panel on responsive mode.
   * @defaultValue 400px
   */
  scrollHeight?: string;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Icon of the submenu.
   */
  submenuIcon?: IconType<ContextMenuProps>;
  /**
   * Callback to invoke when a popup menu is shown.
   * @param {React.SyntheticEvent} event - Browser event.
   */
  onShow?(event: React.SyntheticEvent): void;
  /**
   * Callback to invoke when a popup menu is hidden.
   * @param {React.SyntheticEvent} event - Browser event.
   */
  onHide?(event: React.SyntheticEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ContextMenuPassThroughOptions}
   */
  pt?: ContextMenuPassThroughOptions;
  /**
   * When enabled, it removes component related styles in the core.
   * @defaultValue false
   */
  unstyled?: boolean;
}

/**
 * **PrimeReact - ContextMenu**
 *
 * _ContextMenu displays an overlay menu on right click of its target. Note that components like DataTable has special integration with ContextMenu. Refer to documentation of the individual documentation of the components having a special integration._
 *
 * [Live Demo](https://www.primereact.org/contextmenu/)
 * --- ---
 *
 * @group Component
 */
export const ContextMenu = (
  props: ContextMenuProps & {
    innerref: React.MutableRefObject<PrimeContextMenu>;
  }
) => <PrimeContextMenu {...props} ref={props.innerref} />;
