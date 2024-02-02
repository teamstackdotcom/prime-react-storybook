import React from "react";
import {
  SplitButton as PrimeSplitButton,
  SplitButtonPassThroughOptions,
} from "primereact/splitbutton";
import { IconType, TemplateType } from "primereact/utils";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";
import { MenuItem } from "primereact/menuitem";

/**
 * Defines valid properties in SplitButton component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SplitButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Text of the button.
   */
  label?: string;
  /**
   * Name of the icon.
   */
  icon?: IconType<SplitButtonProps>;
  /**
   * Add a textual class to the button without a background initially.
   * @defaultValue false
   */
  text?: boolean;
  /**
   * Add a circular border radius to the button.
   * @defaultValue false
   */
  rounded?: boolean;
  /**
   * Add a shadow to indicate elevation.
   * @defaultValue false
   */
  raised?: boolean;
  /**
   * Add a border class without a background initially.
   * @defaultValue false
   */
  outlined?: boolean;
  /**
   * Defines the style of the button, valid values are "secondary", "success", "info", "warning", "danger".
   */
  severity?: "secondary" | "success" | "info" | "warning" | "danger";
  /**
   * Defines the size of the button, valid values are "small" and "large".
   */
  size?: "small" | "large";
  /**
   * Display loading icon of the button
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * Name of the loading icon or JSX.Element for loading icon.
   */
  loadingIcon?: IconType<SplitButtonProps>;
  /**
   * MenuModel instance to define the overlay items.
   */
  model?: MenuItem[];
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * When present, it specifies that the element should be visible.
   * @defaultValue true
   */
  visible?: boolean;
  /**
   * ClassName of the button.
   */
  buttonClassName?: string;
  /**
   * Inline style of the overlay menu.
   */
  menuStyle?: React.CSSProperties;
  /**
   * ClassName class of the overlay menu.
   */
  menuClassName?: string;
  /**
   * ClassName of the menu dropdown button.
   */
  menuButtonClassName?: string;
  /**
   * Props for the main button, any prop is passed implicity to the button element.
   */
  buttonProps?: any;
  /**
   * Props for the dropdown button, any prop is passed implicity to the dropdown button element.
   */
  menuButtonProps?: any;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Content of the tooltip.
   */
  tooltip?: string;
  /**
   * Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions?: TooltipOptions;
  /**
   * Template of the default button.
   */
  buttonTemplate?: TemplateType<SplitButtonProps>;
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Name of the dropdown icon or JSX.Element for dropdown icon.
   */
  dropdownIcon?: IconType<SplitButtonProps>;
  /**
   * Callback to invoke when main button is clicked.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event
   */
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke when overlay panel becomes visible.
   */
  onShow?(): void;
  /**
   * Callback to invoke when overlay panel becomes hidden.
   */
  onHide?(): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {SplitButtonPassThroughOptions}
   */
  pt?: SplitButtonPassThroughOptions;
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
 * **PrimeReact - SplitButton**
 *
 * _SplitButton groups a set of commands in an overlay with a default command._
 *
 * [Live Demo](https://www.primereact.org/splitbutton/)
 * --- ---
 *
 * @group Component
 */
export const SplitButton = (props: SplitButtonProps) => (
  <PrimeSplitButton {...props} />
);
