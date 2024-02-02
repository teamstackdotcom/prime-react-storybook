import React from "react";
import {
  CheckboxChangeEvent,
  CheckboxClickEvent,
  CheckboxPassThroughOptions,
  Checkbox as PrimeCheckbox,
} from "primereact/checkbox";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { IconType } from "primereact/utils";

export interface CheckboxProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "onClick" | "ref"
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
   * Identifier of the input element.
   */
  inputId?: string;
  /**
   * Value of the component.
   */
  value?: any;
  /**
   * Name of the checkbox element .
   */
  name?: string;
  /**
   * Specifies whether a checkbox should be checked or not.
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
   * Inline style of the element.
   */
  style?: React.CSSProperties;
  /**
   * Style class of the element.
   */
  className?: string;
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
   * When present, it specifies that the value cannot be changed.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * Index of the element in tabbing order.
   * @defaultValue false
   */
  tabIndex?: number;
  /**
   * Icon to display in checkbox.
   */
  icon?: IconType<CheckboxProps>;
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
   * Callback to invoke on value change
   * @param {CheckboxChangeEvent} event - Custom change event
   */
  onChange?(event: CheckboxChangeEvent): void;
  /**
   * Callback to invoke on value change. Mark the event with preventDefault to prevent the option from changing.
   * @param {CheckboxClickEvent} event - Custom click event
   */
  onClick?(event: CheckboxClickEvent): void;
  /**
   * Callback to invoke to when a mouse button is pressed.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event
   */
  onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke on right-click.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event
   */
  onContextMenu?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {CheckboxPassThroughOptions}
   */
  pt?: CheckboxPassThroughOptions;
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
 * **PrimeReact - Checkbox**
 *
 * _Checkbox is an extension to standard checkbox element with skinning capabilities._
 *
 * [Live Demo](https://www.primereact.org/checkbox/)
 * --- ---
 *
 * @group Component
 */
export const Checkbox = (props: CheckboxProps) => {
  return <PrimeCheckbox {...props} />;
};
