import React from "react";
import {
  ChipsAddEvent,
  ChipsChangeEvent,
  ChipsPassThroughOptions,
  ChipsRemovableOptions,
  ChipsRemoveEvent,
  Chips as PrimeChips,
} from "primereact/chips";
import { IconType } from "primereact/utils";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { KeyFilterType } from "primereact/keyfilter";
import { PassThroughOptions } from "primereact/passthrough";

export interface ChipsProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "onFocus" | "onBlur" | "onKeyDown" | "ref"
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
   * Identifier of the input element.
   */
  inputId?: string;
  /**
   * Name of the input field.
   */
  name?: string;
  /**
   * Advisory information to display on input.
   */
  placeholder?: string;
  /**
   * Value of the component.
   */
  value?: string[];
  /**
   * Maximum number of entries allowed.
   */
  max?: number;
  /**
   * When present, it specifies that the element should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * When present, it specifies that the element should be read-only.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * Whether an item is removable.
   * @defaultValue true
   */
  removable?: boolean | ((options: ChipsRemovableOptions) => boolean);
  /**
   * Icon of the remove element.
   */
  removeIcon?: IconType<ChipsProps>;
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
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledBy?: string;
  /**
   * Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ','.
   */
  separator?: string;
  /**
   * Whether to allow duplicate values or not.
   * @defaultValue true
   */
  allowDuplicate?: boolean;
  /**
   * Format definition of the keys to block.
   * @type {KeyFilterType}
   */
  keyfilter?: KeyFilterType;
  /**
   * Whether to add an item when the input loses focus.
   * @defaultValue false
   */
  addOnBlur?: boolean;
  /**
   * The template of each item
   * @param {*} item - Current item
   */
  itemTemplate?(item: any): React.ReactNode;
  /**
   * Callback to invoke when a chip is added. Return 'false' to prevent the item from being added.
   * @param {ChipsAddEvent} event - Custom add event
   */
  onAdd?(event: ChipsAddEvent): void;
  /**
   * Callback to invoke when a chip is removed.
   * @param {ChipsRemoveEvent} event - Custom remove event
   */
  onRemove?(event: ChipsRemoveEvent): void;
  /**
   * Callback to invoke when a chip is added or removed.
   * @param {ChipsChangeEvent} event - Custom change event
   */
  onChange?(event: ChipsChangeEvent): void;
  /**
   * Callback to invoke when the component gets focus.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event
   */
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when the component loses focus.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event
   */
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when the key pressed.
   * @param {React.KeyboardEvent<HTMLInputElement>} event - Browser event
   */
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ChipsPassThroughOptions}
   */
  pt?: ChipsPassThroughOptions;
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
 * **PrimeReact - Chips**
 *
 * _Chips is used to enter multiple values on an input field._
 *
 * [Live Demo](https://www.primereact.org/chips/)
 * --- ---
 *
 * @group Component
 */
export const Chips = (props: ChipsProps) => {
  return <PrimeChips {...props} />;
};
