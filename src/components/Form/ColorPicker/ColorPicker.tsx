import React from "react";
import {
  ColorPickerChangeEvent,
  ColorPickerHSBType,
  ColorPickerPassThroughOptions,
  ColorPickerRGBType,
  ColorPicker as PrimeColorPicker,
} from "primereact/colorpicker";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";

export interface ColorPickerProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onChange" | "value" | "ref"
  > {
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @defaultValue false
   */
  autoFocus?: boolean;
  /**
   * Default color to display when value is null.
   * @defaultValue ff0000
   */
  defaultColor?: string;
  /**
   * Format to use in value binding.
   * @defaultValue hex
   */
  format?: "hex" | "rgb" | "hsb";
  /**
   * Whether to display as an overlay or not.
   * @defaultValue false
   */
  inline?: boolean;
  /**
   * Identifier of the focus input to match a label defined for the dropdown.
   */
  inputId?: string;
  /**
   * Reference of the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * Inline style of the input field.
   */
  inputStyle?: React.CSSProperties;
  /**
   * Inline style of the input field.
   */
  inputClassName?: string;
  /**
   * Style class of the overlay panel.
   */
  panelClassName?: string;
  /**
   * Inline style of the overlay panel.
   */
  panelStyle?: React.CSSProperties;
  /**
   * Content of the tooltip.
   */
  tooltip?: string;
  /**
   * Configuration of the tooltip, refer to the tooltip documentation for more information.
   * @type {TooltipOptions}
   */
  tooltipOptions?: TooltipOptions;
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   * @type {CSSTransitionProps}
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Value of the component.
   * @type {string | ColorPickerRGBType | ColorPickerHSBType}
   */
  value?: string | ColorPickerRGBType | ColorPickerHSBType;
  /**
   * Callback to invoke when a color is selected.
   * @param {ColorPickerChangeEvent} event - Custom change event.
   */
  onChange?(event: ColorPickerChangeEvent): void;
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
   * @type {ColorPickerPassThroughOptions}
   */
  pt?: ColorPickerPassThroughOptions;
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
 * **PrimeReact - ColorPicker**
 *
 * _ColorPicker is an input component to select a color._
 *
 * [Live Demo](https://www.primereact.org/colorpicker/)
 * --- ---
 *
 * @group Component
 */
export const ColorPicker = (props: ColorPickerProps) => {
  return <PrimeColorPicker {...props} />;
};
