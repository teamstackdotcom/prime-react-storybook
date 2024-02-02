import React from "react";
import {
  SelectButton as PrimeSelectButton,
  SelectButtonChangeEvent,
  SelectButtonPassThroughOptions,
} from "primereact/selectbutton";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { SelectItemOptionsType } from "primereact/selectitem";

/**
 * Defines valid properties in SelectButton component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SelectButtonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "unselectable" | "onChange" | "ref" | "pt"
  > {
  /**
   * Value of the component.
   */
  value?: any;
  /**
   * An array of objects to display as the available options.
   */
  options?: SelectItemOptionsType;
  /**
   * Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.
   */
  optionLabel?: string;
  /**
   * Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.
   */
  optionValue?: string;
  /**
   * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
   */
  optionDisabled?: string | ((option: any) => boolean);
  /**
   * Index of the element in tabbing order.
   */
  tabIndex?: number;
  /**
   * When specified, allows selecting multiple values.
   * @defaultValue false
   */
  multiple?: boolean;
  /**
   * Whether selection can be cleared.
   * @deprecated Use 'allowEmpty' property instead.
   * @defaultValue true
   */
  unselectable?: boolean;
  /**
   * Whether selection can not be cleared.
   * @defaultValue true
   */
  allowEmpty?: boolean;
  /**
   * When present, it specifies that the element should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * A property to uniquely match the value in options for better performance.
   */
  dataKey?: string;
  /**
   * Content of the tooltip.
   */
  tooltip?: string;
  /**
   * Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions?: TooltipOptions;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledBy?: string;
  /**
   * Function that gets the option and returns the content.
   * @param {*} item - Current item
   */
  itemTemplate?(item: any): React.ReactNode;
  /**
   * Callback to invoke on value change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   */
  onChange?(event: SelectButtonChangeEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {SelectButtonPassThroughOptions}
   */
  pt?: SelectButtonPassThroughOptions;
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
 * **PrimeReact - SelectButton**
 *
 * _SelectButton is used to choose single or multiple items from a list using buttons._
 *
 * [Live Demo](https://www.primereact.org/selectbutton/)
 * --- ---
 *
 * @group Component
 */
export const SelectButton = (props: SelectButtonProps) => {
  return <PrimeSelectButton {...props} />;
};
