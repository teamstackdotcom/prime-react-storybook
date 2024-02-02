import React from "react";
import {
  ListBoxChangeEvent,
  ListBoxFilterTemplateOptions,
  ListBoxFilterValueChangeEvent,
  ListboxPassThroughOptions,
  ListBox as PrimeListBox,
} from "primereact/listbox";
import { PassThroughOptions } from "primereact/passthrough";
import { SelectItemOptionsType } from "primereact/selectitem";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { VirtualScrollerProps } from "primereact/virtualscroller";

/**
 * Defines valid properties in ListBox component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ListBoxProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "ref" | "pt"
  > {
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledBy?: string;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * A property to uniquely match the value in options for better performance.
   * @defaultValue false
   */
  dataKey?: string;
  /**
   * When specified, disables the component.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Text to display when there is no data.
   */
  emptyMessage?: React.ReactNode | ((props: ListBoxProps) => React.ReactNode);
  /**
   * Template to display when filtering does not return any results.
   */
  emptyFilterMessage?:
    | React.ReactNode
    | ((props: ListBoxProps) => React.ReactNode);
  /**
   * When specified, displays a filter input at header.
   * @defaultValue false
   */
  filter?: boolean;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @defaultValue label
   */
  filterBy?: string;
  /**
   * Props for the filter input, any prop is passed implicity to the filter input element.
   * @defaultValue undefined
   */
  filterInputProps?: any;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @defaultValue undefined
   */
  filterLocale?: string;
  /**
   * Defines how the items are filtered, valid values are "contains" (default), "startsWith", "endsWith", "equals" and "notEquals".
   * @defaultValue contains
   */
  filterMatchMode?: string;
  /**
   * Placeholder text to show when filter input is empty.
   */
  filterPlaceholder?: string;
  /**
   * Custom template for the filter element.
   */
  filterTemplate?:
    | React.ReactNode
    | ((options: ListBoxFilterTemplateOptions) => React.ReactNode);
  /**
   * When specified, filter displays with this value.
   */
  filterValue?: string;
  /**
   * Custom template for the items.
   */
  itemTemplate?: React.ReactNode | ((option: any) => React.ReactNode);
  /**
   * Inline style class of inner list element.
   */
  listClassName?: string;
  /**
   * Inline style of inner list element.
   */
  listStyle?: React.CSSProperties;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @defaultValue true
   */
  metaKeySelection?: boolean;
  /**
   * When specified, allows selecting multiple values.
   * @defaultValue false
   */
  multiple?: boolean;
  /**
   * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
   */
  optionDisabled?: string | ((option: any) => boolean);
  /**
   * Property name or getter function that refers to the children options of option group.
   */
  optionGroupChildren?: string;
  /**
   * Property name or getter function to use as the label of an option group.
   */
  optionGroupLabel?: string;
  /**
   * Template of an option group item.
   */
  optionGroupTemplate?:
    | React.ReactNode
    | ((option: any, index: number) => React.ReactNode);
  /**
   * Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.
   */
  optionLabel?: string;
  /**
   * Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.
   */
  optionValue?: string;
  /**
   * An array of objects to display as the available options.
   */
  options?: SelectItemOptionsType;
  /**
   * Content of the tooltip.
   */
  tooltip?: string;
  /**
   * Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions?: TooltipOptions;
  /**
   * Selected value to display.
   */
  value?: any;
  /**
   * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
   * @type {VirtualScrollerProps}
   */
  virtualScrollerOptions?: VirtualScrollerProps;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ListboxPassThroughOptions}
   */
  pt?: ListboxPassThroughOptions;
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

  /**
   * Callback to invoke when value of listbox changes.
   * @param {ListBoxChangeEvent} event - Custom change event.
   */
  onChange?(event: ListBoxChangeEvent): void;
  /**
   * Callback to invoke when filter value changes.
   * @param {ListBoxFilterValueChangeEvent} event - Custom filter value change event.
   */
  onFilterValueChange?(event: ListBoxFilterValueChangeEvent): void;
}

/**
 * **PrimeReact - ListBox**
 *
 * _ListBox is used to select one or more values from a list of items._
 *
 * [Live Demo](https://www.primereact.org/listbox/)
 * --- ---
 *
 * @group Component
 */
export const ListBox = (props: ListBoxProps) => {
  return <PrimeListBox {...props} />;
};
