import React from "react";
import {
  DropdownChangeEvent,
  DropdownFilterEvent,
  DropdownFilterOptions,
  DropdownPassThroughOptions,
  Dropdown as PrimeDropdown,
} from "primereact/dropdown";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";
import { SelectItemOptionsType } from "primereact/selectitem";
import { VirtualScrollerProps } from "primereact/virtualscroller";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in Dropdown component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface DropdownProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "ref"
  > {
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and "self". The "self" value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Used to define a string that labels the component.
   */
  ariaLabel?: string;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledBy?: string;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @defaultValue false
   */
  autoFocus?: boolean;
  /**
   * Style class of the component.
   */
  className?: string;
  /**
   * Icon of the dropdown.
   */
  clearIcon?: IconType<DropdownProps>;
  /**
   * A property to uniquely match the value in options for better performance.
   */
  dataKey?: string;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Icon of the dropdown.
   */
  dropdownIcon?: IconType<DropdownProps>;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @defaultValue false
   */
  editable?: boolean;
  /**
   * Template to display when filtering does not return any results.
   * @defaultValue No available options
   */
  emptyFilterMessage?:
    | React.ReactNode
    | ((props: DropdownProps) => React.ReactNode);
  /**
   * Text to display when there are no options available.
   * @defaultValue No results found
   */
  emptyMessage?: React.ReactNode | ((props: DropdownProps) => React.ReactNode);
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @defaultValue false
   */
  filter?: boolean;
  /**
   * Icon of the filter to search.
   */
  filterIcon?: IconType<DropdownProps>;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @defaultValue label
   */
  filterBy?: "label" | string;
  /**
   * Icon of the filter to clear.
   */
  filterClearIcon?: IconType<DropdownProps>;
  /**
   * When the panel is opened, it specifies that the filter input should focus automatically.
   * @defaultValue true
   */
  filterInputAutoFocus?: boolean;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   */
  filterLocale?: string;
  /**
   * Defines how the items are filtered.
   * @defaultValue contains
   */
  filterMatchMode?:
    | "contains"
    | "startsWith"
    | "endsWith"
    | "equals"
    | "notEquals";
  /**
   * Placeholder text to show when filter input is empty.
   */
  filterPlaceholder?: string;
  /**
   * The template of filter element.
   * @deprecated Since v9.3.0
   */
  filterTemplate?:
    | React.ReactNode
    | ((options: { filterOptions: DropdownFilterOptions }) => React.ReactNode);
  /**
   * Reference of the focusable input element.
   */
  focusInputRef?: React.Ref<HTMLInputElement>;
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * Identifier of the focusable input.
   */
  inputId?: string;
  /**
   * Reference of the input element.
   */
  inputRef?: React.Ref<HTMLSelectElement>;
  /**
   * The template of items.
   */
  itemTemplate?: React.ReactNode | ((option: any) => React.ReactNode);
  /**
   * Maximum number of characters to be typed on an editable input.
   */
  maxLength?: number;
  /**
   * Name of the input element.
   */
  name?: string;
  /**
   * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
   */
  optionDisabled?: string | ((option: any) => boolean);
  /**
   * Property name or getter function that refers to the children options of option group.
   * @defaultValue items
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
   * Name of the label field of an option when arbitrary objects are used as options instead of SelectItems.
   */
  optionLabel?: string;
  /**
   * Name of the value field of an option when arbitrary objects are used as options instead of SelectItems.
   */
  optionValue?: string;
  /**
   * An array of selectitems to display as the available options.
   * @type {SelectItemOptionsType}
   */
  options?: SelectItemOptionsType;
  /**
   * Style class of the overlay panel element.
   */
  panelClassName?: string;
  /**
   * Template of the panel footer.
   */
  panelFooterTemplate?:
    | React.ReactNode
    | ((props: DropdownProps, hide: () => void) => React.ReactNode);
  /**
   * Inline style of the overlay panel element.
   */
  panelStyle?: React.CSSProperties;
  /**
   * Default text to display when no option is selected.
   */
  placeholder?: string;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * Clears the filter value when hiding the dropdown.
   * @defaultValue false
   */
  resetFilterOnHide?: boolean;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @defaultValue 200px
   */
  scrollHeight?: string;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @defaultValue false
   */
  showClear?: boolean;
  /**
   * When enabled, a clear icon is displayed to clear the filtered value.
   * @defaultValue false
   */
  showFilterClear?: boolean;
  /**
   * When enabled, overlay panel will be visible with input focus.
   * @defaultValue false
   */
  showOnFocus?: boolean;
  /**
   * Inline style of the element.
   */
  style?: React.CSSProperties;
  /**
   * Index of the element in tabbing order.
   */
  tabIndex?: number;
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
   */
  value?: any;
  /**
   * The template of selected item.
   */
  valueTemplate?:
    | React.ReactNode
    | ((option: any, props: DropdownProps) => React.ReactNode);
  /**
   * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
   * @type {VirtualScrollerProps}
   */
  virtualScrollerOptions?: VirtualScrollerProps;
  /**
   * Callback to invoke on value change
   * @param {DropdownChangeEvent} event - Custom change event
   */
  onChange?(event: DropdownChangeEvent): void;
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
   * Callback to invoke when the overlay is shown.
   */
  onShow?(): void;
  /**
   * Callback to invoke when the overlay is hidden.
   */
  onHide?(): void;
  /**
   * Callback to invoke when the value is filtered.
   * @param {DropdownFilterEvent} event - Custom filter event
   */
  onFilter?(event: DropdownFilterEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {DropdownPassThroughOptions}
   */
  pt?: DropdownPassThroughOptions;
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
 * **PrimeReact - Dropdown**
 *
 * _Dropdown also known as Select, is used to choose an item from a collection of options._
 *
 * [Live Demo](https://www.primereact.org/dropdown/)
 * --- ---
 *
 * @group Component
 */
export const Dropdown = (props: DropdownProps) => {
  return <PrimeDropdown {...props} />;
};
