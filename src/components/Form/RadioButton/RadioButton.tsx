import React from "react";
import {
  RadioButton as PrimeRadioButton,
  RadioButtonChangeEvent,
  RadioButtonClickEvent,
  RadioButtonPassThroughOptions,
} from "primereact/radiobutton";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";

/**
 * Defines valid properties in RadioButton component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface RadioButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "onClick" | "ref" | "pt"
  > {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @defaultValue false
   */
  autoFocus?: boolean;
  /**
   * Reference of the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * Unique identifier of the inner native radiobutton.
   */
  inputId?: string;
  /**
   * Name of the checkbox element.
   */
  name?: string;
  /**
   * Value of the radio.
   */
  value?: any;
  /**
   * Specifies whether a checkbox should be checked or not.
   * @defaultValue false
   */
  checked?: boolean;
  /**
   * When present, it specifies that the element value cannot be altered.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * Content of the tooltip.
   */
  tooltip?: string;
  /**
   * Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions?: TooltipOptions;
  /**
   * Callback to invoke on value change
   * @param {RadioButtonChangeEvent} event - Custom change event.
   */
  onChange?(event: RadioButtonChangeEvent): void;
  /**
   * Callback to invoke on click.  Mark the event with preventDefault to prevent the option from changing.
   * @param {RadioButtonClickEvent} event - Custom click event.
   */
  onClick?(event: RadioButtonClickEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {RadioButtonPassThroughOptions}
   */
  pt?: RadioButtonPassThroughOptions;
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
 * **PrimeReact - RadioButton**
 *
 * _RadioButton is an extension to standard radio button element with theming._
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 * --- ---
 *
 * @group Component
 */
export const RadioButton = (props: RadioButtonProps) => {
  return <PrimeRadioButton {...props} />;
};
