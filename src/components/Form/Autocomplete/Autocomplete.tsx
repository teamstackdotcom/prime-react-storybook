import React from "react";
import {
  AutoComplete as PrimeAutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteDropdownClickEvent,
  AutoCompletePassThroughOptions,
  AutoCompleteSelectEvent,
  AutoCompleteUnselectEvent,
} from "primereact/autocomplete";
import { IconType } from "primereact/utils";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { CSSTransitionProps } from "primereact/csstransition";
import { VirtualScrollerProps } from "primereact/virtualscroller";
import { PassThroughOptions } from "primereact/passthrough";

export interface AutoCompleteProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    "onChange" | "onSelect" | "ref"
  > {
  /**
   * Unique identifier of the element.
   */
  id?: string;
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
   * When enabled, highlights the first item in the list by default.
   * @defaultValue false
   */
  autoHighlight?: boolean;
  /**
   * Style class of the component.
   */
  className?: string;
  /**
   * Delay between keystrokes to wait before sending a query.
   * @defaultValue 300
   */
  delay?: number;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Displays a button next to the input field when enabled.
   * @defaultValue false
   */
  dropdown?: boolean;
  /**
   * ARIA label for the dropdown button. Defaults to placeholder then Locale "choose" label.
   * @defaultValue Choose
   */
  dropdownAriaLabel?: string;
  /**
   * Focus the input field when the dropdown button is clicked if enabled.
   * @defaultValue true
   */
  dropdownAutoFocus?: boolean;
  /**
   * Icon of the dropdown.
   */
  dropdownIcon?: IconType<AutoCompleteProps>;
  /**
   * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
   * @defaultValue blank
   */
  dropdownMode?: "blank" | "current";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @defaultValue No results found.
   */
  emptyMessage?: string;
  /**
   * Field of a suggested object to resolve and display.
   */
  field?: string;
  /**
   * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
   * @defaultValue false
   */
  forceSelection?: boolean;
  /**
   * Style class of the input field.
   */
  inputClassName?: string;
  /**
   * Identifier of the input element.
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
   * Icon of the loader.
   */
  loadingIcon?: IconType<AutoCompleteProps>;
  /**
   * Template of a list item.
   */
  itemTemplate?:
    | React.ReactNode
    | ((suggestion: any, index: number) => React.ReactNode);
  /**
   * Maximum number of characters to initiate a search.
   */
  maxLength?: number;
  /**
   * Minimum number of characters to initiate a search.
   * @defaultValue 1
   */
  minLength?: number;
  /**
   * Specifies if multiple values can be selected.
   * @defaultValue false
   */
  multiple?: boolean;
  /**
   * Number of maximum options that can be selected.
   */
  selectionLimit?: number;
  /**
   * Name of the input element.
   */
  name?: string;
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
    | ((suggestion: any, index: number) => React.ReactNode);
  /**
   * Style class of the overlay panel element.
   */
  panelClassName?: string;
  /**
   * Template of the panel footer.
   */
  panelFooterTemplate?:
    | React.ReactNode
    | ((props: AutoCompleteProps, hide: () => void) => React.ReactNode);
  /**
   * Inline style of the overlay panel element.
   */
  panelStyle?: React.CSSProperties;
  /**
   * Hint text for the input field.
   */
  placeholder?: string;
  /**
   * When present, it specifies that the input cannot be typed.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * Icon of the remove chip element in multiple mode.
   */
  removeTokenIcon?: IconType<AutoCompleteProps>;
  /**
   * Maximum height of the suggestions panel.
   * @defaultValue 200px
   */
  scrollHeight?: string;
  /**
   * Template of a selected item.
   */
  selectedItemTemplate?: React.ReactNode | ((value: any) => React.ReactNode);
  /**
   * Whether to show the empty message or not.
   * @defaultValue false
   */
  showEmptyMessage?: boolean;
  /**
   * Size of the input field.
   */
  size?: number;
  /**
   * Inline style of the component.
   */
  style?: React.CSSProperties;
  /**
   * An array of suggestions to display.
   */
  suggestions?: any[];
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
   * Type of the input element.
   */
  type?: string;
  /**
   * Value of the component.
   */
  value?: any;
  /**
   * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
   * @type {VirtualScrollerProps}
   */
  virtualScrollerOptions?: VirtualScrollerProps;
  /**
   * Callback to invoke to search for suggestions.
   * @param {AutoCompleteCompleteEvent} event - Custom complete method event.
   */
  completeMethod?(event: AutoCompleteCompleteEvent): void;
  /**
   * Callback to invoke when autocomplete loses focus.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event.
   */
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when autocomplete value changes.
   * @param {AutoCompleteChangeEvent} event - Custom change event.
   */
  onChange?(event: AutoCompleteChangeEvent): void;
  /**
   * Callback to invoke when input is cleared by the user.
   * @param {React.SyntheticEvent} event - Browser event.
   */
  onClear?(event: React.SyntheticEvent): void;
  /**
   * Callback to invoke on click.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke on right-click.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onContextMenu?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke on double click.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onDblClick?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke to when dropdown button is clicked.
   * @param {AutoCompleteDropdownClickEvent} event - Custom click event.
   */
  onDropdownClick?(event: AutoCompleteDropdownClickEvent): void;
  /**
   * Callback to invoke when autocomplete gets focus.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event.
   */
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when overlay panel becomes hidden.
   */
  onHide?(): void;
  /**
   * Callback to invoke to when a key is pressed.
   * @param {React.KeyboardEvent<HTMLInputElement>} event - Browser event.
   */
  onKeyPress?(event: React.KeyboardEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke to when a key is released.
   * @param {React.KeyboardEvent<HTMLInputElement>} event - Browser event.
   */
  onKeyUp?(event: React.KeyboardEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke to when a mouse button is pressed.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onMouseDown?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Callback to invoke when a suggestion is selected.
   * @param {AutoCompleteSelectEvent} event - Custom select event.
   */
  onSelect?(event: AutoCompleteSelectEvent): void;
  /**
   * Callback to invoke when overlay panel becomes visible.
   */
  onShow?(): void;
  /**
   * Callback to invoke when a selected value is removed.
   * @param {AutoCompleteUnselectEvent} event - Custom unselect event.
   */
  onUnselect?(event: AutoCompleteUnselectEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {AutoCompletePassThroughOptions}
   */
  pt?: AutoCompletePassThroughOptions;
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
 * **PrimeReact - AutoComplete**
 *
 * _AutoComplete is an input component that provides real-time suggestions while being typed._
 *
 * [Live Demo](https://www.primereact.org/autocomplete/)
 * --- ---
 *
 * @group Component
 */
export const Autocomplete = (props: AutoCompleteProps) => (
  <PrimeAutoComplete {...props} />
);
