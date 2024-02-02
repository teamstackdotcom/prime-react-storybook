import React from "react";
import {
  ButtonPassThroughOptions,
  Button as PrimeButton,
} from "primereact/button";
import { IconType } from "primereact/utils";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";

export interface ButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "disabled" | "ref"
  > {
  /**
   * Value of the badge.
   */
  badge?: string;
  /**
   * Style class of the badge.
   */
  badgeClassName?: string;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * When present, it specifies that the element should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Name of the icon or JSX.Element for icon.
   */
  icon?: IconType<ButtonProps>;
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
   * Add a link style to the button.
   * @defaultValue false
   */
  link?: boolean;
  /**
   * Defines the style of the button, valid values are "secondary", "success", "info", "warning", "danger", "help".
   */
  severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help";
  /**
   * Defines the size of the button, valid values are "small" and "large".
   */
  size?: "small" | "large";
  /**
   * Position of the icon, valid values are "left", "right", "top" and "bottom".
   * @defaultValue left
   */
  iconPos?: "top" | "bottom" | "left" | "right";
  /**
   * Text of the button.
   */
  label?: string;
  /**
   * Display loading icon of the button
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * Name of the loading icon or JSX.Element for loading icon.
   */
  loadingIcon?: IconType<ButtonProps>;
  /**
   * Add a plain textual class to the button without a background initially.
   * @defaultValue false
   */
  plain?: boolean;
  /**
   * Content of the tooltip.
   */
  tooltip?: string;
  /**
   * Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions?: TooltipOptions;
  /**
   * When present, it specifies that the element should be visible.
   * @defaultValue true
   */
  visible?: boolean;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ButtonPassThroughOptions}
   */
  pt?: ButtonPassThroughOptions;
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
 * **PrimeReact - Button**
 *
 * _Button is an extension to standard button element with icons and theming._
 *
 * [Live Demo](https://www.primereact.org/button/)
 * --- ---
 *
 * @group Component
 */
export const Button = ({
  disabled = false,
  text = false,
  rounded = false,
  loading = false,
  unstyled = false,
  visible = true,
  plain = false,
  link = false,
  iconPos = "left",
  ...props
}: ButtonProps) => {
  const restProps = {
    disabled,
    text,
    rounded,
    loading,
    unstyled,
    visible,
    plain,
    iconPos,
  };
  return <PrimeButton {...props} {...restProps}></PrimeButton>;
};
