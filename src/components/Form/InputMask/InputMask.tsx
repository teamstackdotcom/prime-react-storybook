import React from "react";
import {
  InputMaskChangeEvent,
  InputMaskCompleteEvent,
  InputMask as PrimeInputMask,
} from "primereact/inputmask";
import {
  InputTextPassThroughOptions,
  InputTextProps,
} from "primereact/inputtext";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in InputMask component. In addition to these, all properties of {@link inputtext} can be used in this component.
 * @group Properties
 */
export interface InputMaskProps
  extends Omit<InputTextProps, "onChange" | "pt"> {
  /**
   * Mask pattern.
   */
  mask?: string;
  /**
   * Placeholder character in mask.
   * @defaultValue _
   */
  slotChar?: string;
  /**
   * Clears the incomplete value on blur.
   * @defaultValue true
   */
  autoClear?: boolean;
  /**
   * Defines if model sets the raw unmasked value to bound value or the formatted mask value.
   * @defaultValue false
   */
  unmask?: boolean;
  /**
   * When present, it specifies that the element value cannot be altered.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * When present, it specifies that an input field is read-only.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * When present, it specifies that the element must be filled out before submitting the form.
   * @defaultValue false
   */
  required?: boolean;
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
   * Callback to invoke on when user completes the mask pattern.
   * @param {InputMaskCompleteEvent} event - Custom complete event
   */
  onComplete?(event: InputMaskCompleteEvent): void;
  /**
   * Callback to invoke on value change.
   * @param {InputMaskChangeEvent} event - Custom change event
   */
  onChange?(event: InputMaskChangeEvent): void;
  /**
   * Callback to invoke when input receives focus.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event
   */
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when input loses focus.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event
   */
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {InputTextPassThroughOptions}
   */
  pt?: InputTextPassThroughOptions;
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
 * **PrimeReact - InputMask**
 *
 * _InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone._
 *
 * [Live Demo](https://www.primereact.org/inputmask/)
 * --- ---
 *
 * @group Component
 */
export const InputMask = (props: InputMaskProps) => {
  return <PrimeInputMask {...props} />;
};
