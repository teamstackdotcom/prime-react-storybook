import React from "react";
import {
  InputSwitchChangeEvent,
  InputSwitchPassThroughOptions,
  InputSwitch as PrimeInputSwitch,
} from "primereact/inputswitch";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in InputMask component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface InputSwitchProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "ref"
  > {
  /**
   * Unique identifier of the element.
   */
  id?: string;
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
   * Inline style of the element.
   */
  style?: React.CSSProperties;
  /**
   * Style class of the element.
   */
  className?: string;
  /**
   * Identifier of the input element.
   */
  inputId?: string;
  /**
   * Name of the input element.
   */
  name?: string;
  /**
   * Index of the element in tabbing order.
   */
  tabIndex?: number;
  /**
   * Specifies whether a inputswitch should be checked or not.
   * @defaultValue false
   */
  checked: boolean;
  /**
   * Value in checked state.
   * @defaultValue true
   */
  trueValue?: any;
  /**
   * Value in unchecked state.
   * @defaultValue false
   */
  falseValue?: any;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
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
   * Callback to invoke on value change.
   * @param {InputSwitchChangeEvent} event - Custom change event
   */
  onChange?(event: InputSwitchChangeEvent): void;
  /**
   * Callback to invoke when the element receives focus.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event
   */
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when the element loses focus.
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
   * @type {InputSwitchPassThroughOptions}
   */
  pt?: InputSwitchPassThroughOptions;
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
 * **PrimeReact - InputSwitch**
 *
 * _InputSwitch is used to select a boolean value._
 *
 * [Live Demo](https://www.primereact.org/inputswitch/)
 * --- ---
 *
 * @group Component
 */
export const InputSwitch = (props: InputSwitchProps) => {
  return <PrimeInputSwitch {...props} />;
};
