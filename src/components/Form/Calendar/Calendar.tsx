import React, { useEffect } from "react";

import {
  Calendar as PrimeCalendar,
  CalendarPassThroughOptions,
  CalendarDateTemplateEvent,
  CalendarMonthChangeEvent,
  CalendarSelectEvent,
  CalendarViewChangeEvent,
  CalendarVisibleChangeEvent,
  CalendarYearNavigatorTemplateEvent,
  CalendarMonthNavigatorTemplateEvent,
} from "primereact/calendar";

import { IconType } from "primereact/utils";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";
import { CSSTransitionProps } from "primereact/csstransition";
import { FormEvent, Nullable } from "primereact/ts-helpers";

/**
 * Defines valid base properties in Calendar component.
 */
export type CalendarBaseProps = {
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
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledBy?: string;
  /**
   * ARIA label for screenreader support.
   */
  ariaLabel?: string;
  /**
   * Whether to automatically manage layering.
   * @defaultValue true
   */
  autoZIndex?: boolean;
  /**
   * Base zIndex value to use in layering.
   * @defaultValue 0
   */
  baseZIndex?: number;
  /**
   * Style class of the element.
   */
  className?: string;
  /**
   * Style class of the clear button.
   * @defaultValue p-secondary-button
   */
  clearButtonClassName?: string;
  /**
   * Format of the date.
   * @defaultValue mm/dd/yy
   */
  dateFormat?: string;
  /**
   * Icon to show in each of the decrement buttons.
   */
  decrementIcon?: IconType<CalendarProps>;
  /**
   * When specified, disables the component.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Array with dates to disable.
   */
  disabledDates?: Date[];
  /**
   * Array with disabled weekday numbers.
   */
  disabledDays?: number[];
  /**
   * Array with dates to enable (all other dates will be disabled).
   */
  enabledDates?: Date[];
  /**
   * Whether to hide the overlay on date selection when showTime is enabled.
   * @defaultValue false
   */
  hideOnDateTimeSelect?: boolean;
  /**
   * Specifies 12 or 24 hour format.
   * @defaultValue 24
   */
  hourFormat?: "12" | "24";
  /**
   * Icon of the calendar button.
   */
  icon?: IconType<CalendarProps>;
  /**
   * Icon position of the calendar button.
   * @defaultValue right
   */
  iconPos?: "left" | "right";
  /**
   * Icon to show in each of the increment buttons.
   */
  incrementIcon?: IconType<CalendarProps>;
  /**
   * When enabled, displays the calendar as inline instead of an overlay.
   * @defaultValue false
   */
  inline?: boolean;
  /**
   * Style class of the input element.
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
   * Keep invalid value when input blur.
   * @defaultValue false
   */
  keepInvalid?: boolean;
  /**
   * Used to display the values ​​of the locale object defined in the Locale API.
   * @defaultValue en
   */
  locale?: string;
  /**
   * Mask pattern for input element.
   */
  mask?: string;
  /**
   * Placeholder character in mask.
   * @defaultValue _
   */
  maskSlotChar?: string;
  /**
   * The maximum selectable date.
   */
  maxDate?: Date;
  /**
   * Maximum number of selectable dates in multiple mode.
   */
  maxDateCount?: number;
  /**
   * The minimum selectable date.
   */
  minDate?: Date;
  /**
   * Whether the month should be rendered as a dropdown instead of text.
   * @defaultValue false
   */
  monthNavigator?: boolean;
  /**
   * Name of the input element.
   */
  name?: string;
  /**
   * Icon to show in the next button.
   */
  nextIcon?: IconType<CalendarProps>;
  /**
   * Number of months to display.
   * @defaultValue 1
   */
  numberOfMonths?: number;
  /**
   * Style class of the datetimepicker panel.
   */
  panelClassName?: string;
  /**
   * Inline style of the datetimepicker panel.
   */
  panelStyle?: React.CSSProperties;
  /**
   * Placeholder text for the input.
   */
  placeholder?: string;
  /**
   * Icon to show in the previous button.
   */
  prevIcon?: IconType<CalendarProps>;
  /**
   * When specified, prevents entering the date manually with keyboard.
   * @defaultValue false
   */
  readOnlyInput?: boolean;
  /**
   * When present, it specifies that an input field must be filled out before submitting the form.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
   * @defaultValue false
   */
  selectOtherMonths?: boolean;
  /**
   * The cutoff year for determining the century for a date.
   * @defaultValue +10
   */
  shortYearCutoff?: string;
  /**
   * Whether to display today and clear buttons at the footer
   * @defaultValue false
   */
  showButtonBar?: boolean;
  /**
   * When enabled, displays a button with icon next to input.
   * @defaultValue false
   */
  showIcon?: boolean;
  /**
   * Whether to show the milliseconds in time picker.
   * @defaultValue false
   */
  showMillisec?: boolean;
  /**
   * Whether to allow navigation past min/max dates.
   * @defaultValue false
   */
  showMinMaxRange?: boolean;
  /**
   * When disabled, datepicker will not be visible with input focus.
   * @defaultValue true
   */
  showOnFocus?: boolean;
  /**
   * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
   * @defaultValue true
   */
  showOtherMonths?: boolean;
  /**
   * Whether to show the seconds in time picker.
   * @defaultValue false
   */
  showSeconds?: boolean;
  /**
   * Whether to display timepicker.
   * @defaultValue false
   */
  showTime?: boolean;
  /**
   * When enabled, calendar will show week numbers.
   * @defaultValue false
   */
  showWeek?: boolean;
  /**
   * Hours to change per step.
   * @defaultValue 1
   */
  stepHour?: number;
  /**
   * Milliseconds to change per step.
   * @defaultValue 1
   */
  stepMillisec?: number;
  /**
   * Minutes to change per step.
   * @defaultValue 1
   */
  stepMinute?: number;
  /**
   * Seconds to change per step.
   * @defaultValue 1
   */
  stepSecond?: number;
  /**
   * Inline style of the element.
   */
  style?: React.CSSProperties;
  /**
   * Index of the element in tabbing order.
   */
  tabIndex?: number;
  /**
   * Whether to display timepicker only.
   * @defaultValue false
   */
  timeOnly?: boolean;
  /**
   * Style class of the today button.
   * @defaultValue p-secondary-button
   */
  todayButtonClassName?: string;
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
   * When enabled, calendar overlay is displayed as optimized for touch devices.
   * @defaultValue false
   */
  touchUI?: boolean;
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   * @type {CSSTransitionProps}
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Type of view to display.
   * @defaultValue date
   */
  view?: "date" | "month" | "year";
  /**
   * Date instance whose month and year are used to display the calendar.
   */
  viewDate?: Nullable<Date>;
  /**
   * Specifies the visibility of the overlay.
   * @defaultValue false
   */
  visible?: boolean;
  /**
   * Whether the year should be rendered as a dropdown instead of text.
   * @defaultValue false
   */
  yearNavigator?: boolean;
  /**
   * The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).
   */
  yearRange?: string;
  /**
   * Value of the component.
   * @defaultValue null
   */
  formatDateTime?(date: Date): string;
  /**
   * Function for overriding default behavior that parses text into the Date.
   * @param {string} text - Parsing date
   * @return {Date} Parsed date
   */
  parseDateTime?(text: string): Date;
  /**
   * Function that gets a date information and returns the cell content in datepicker.
   * @param {CalendarDateTemplateEvent} event - Custom date template event
   * @return {React.ReactNode}
   */
  dateTemplate?(event: CalendarDateTemplateEvent): React.ReactNode;
  /**
   * Function that gets a navigator information and returns the decade selections in the panel.
   * @param {number[]} yearValues - The values of years
   * @return {React.ReactNode}
   */
  decadeTemplate?(yearValues: number[]): React.ReactNode;
  /**
   * Custom footer template of overlay.
   * @return {React.ReactNode}
   */
  footerTemplate?(): React.ReactNode;
  /**
   * Custom header template of overlay.
   * @return {React.ReactNode}
   */
  headerTemplate?(): React.ReactNode;
  /**
   * Function that gets a navigator information and returns the navigator element in header.
   * @param {CalendarMonthNavigatorTemplateEvent} event - Custom month navigator template event.
   * @return {React.ReactNode}
   */
  monthNavigatorTemplate?(
    event: CalendarMonthNavigatorTemplateEvent
  ): React.ReactNode;
  /**
   * Callback to invoke on blur event of input field.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event
   */
  onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when clear button is clicked.
   * @param {React.MouseEvent<HTMLButtonElement>} event - Browser event
   */
  onClearButtonClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  /**
   * Callback to invoke on focus event of input field.
   * @param {React.FocusEvent<HTMLInputElement>} event - Browser event
   */
  onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when overlay panel or modal becomes hidden.
   */
  onHide?(): void;
  /**
   * Callback to invoke on input event of input field.
   * @param {React.FormEvent<HTMLInputElement>} event - Browser event
   */
  onInput?(event: React.FormEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when month changes.
   * @param {CalendarMonthChangeEvent} event - Custom month change event
   */
  onMonthChange?(event: CalendarMonthChangeEvent): void;
  /**
   * Callback to invoke when a date is selected.
   * @param {CalendarSelectEvent} event - Custom select event
   */
  onSelect?(event: CalendarSelectEvent): void;
  /**
   * Callback to invoke when overlay panel or modal becomes visible.
   */
  onShow?(): void;
  /**
   * Callback to invoke when today button is clicked.
   * @param {React.MouseEvent<HTMLButtonElement>} event - Browser event
   */
  onTodayButtonClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  /**
   * Callback to invoke when the displayed month/year is changed.
   * @param {CalendarViewChangeEvent} event - Custom view change event
   */
  onViewDateChange?(event: CalendarViewChangeEvent): void;
  /**
   * Callback to invoke when visible is changed.
   * @param {CalendarVisibleChangeEvent} event - Custom visible change event
   */
  onVisibleChange?(event: CalendarVisibleChangeEvent): void;
  /**
   * Function that gets a navigator information and returns the navigator in header.
   * @param {CalendarYearNavigatorTemplateEvent} event - Custom year navigator template event
   */
  yearNavigatorTemplate?(
    event: CalendarYearNavigatorTemplateEvent
  ): React.ReactNode;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {CalendarPassThroughOptions}
   */
  pt?: CalendarPassThroughOptions;
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
};

/**
 * Defines valid properties in range Calendar component.
 * @group Properties
 */
interface CalendarPropsRange extends CalendarBaseProps {
  /**
   * Specifies the selection mode either "single", "range", or "multiple";
   * @defaultValue single
   */
  selectionMode: "range";
  /**
   * Value of the component.
   * @defaultValue null
   */
  value?: Nullable<(Date | null)[]>;
  /**
   * Callback to invoke when value changes.
   * @param { FormEvent<(Date | null)[]>} event - Custom change event
   */
  onChange?(event: FormEvent<(Date | null)[]>): void;
}

/**
 * Defines valid properties in multiple Calendar component.
 * @group Properties
 */
interface CalendarPropsMultiple extends CalendarBaseProps {
  /**
   * Specifies the selection mode either "single", "range", or "multiple";
   * @defaultValue single
   */
  selectionMode: "multiple";
  /**
   * Value of the component.
   * @defaultValue null
   */
  value?: Nullable<Date[]>;
  /**
   * Callback to invoke when value changes.
   * @param {FormEvent<Date[]>} event - Custom change event
   */
  onChange?(event: FormEvent<Date[]>): void;
}

/**
 * Defines valid properties in single Calendar component.
 * @group Properties
 */
interface CalendarPropsSingle extends CalendarBaseProps {
  /**
   * Specifies the selection mode either "single", "range", or "multiple";
   * @defaultValue single
   */
  selectionMode?: "single";
  /**
   * Value of the component.
   * @defaultValue null
   */
  value?: Nullable<Date>;
  /**
   * Callback to invoke when value changes.
   * @param { FormEvent<Date>} event - Custom change event
   */
  onChange?(event: FormEvent<Date>): void;
}

export type CalendarProps =
  | CalendarPropsRange
  | CalendarPropsMultiple
  | CalendarPropsSingle;

/**
 * **PrimeReact - Calendar**
 *
 * _Calendar also known as DatePicker, is a form component to work with dates._
 *
 * [Live Demo](https://www.primereact.org/calendar/)
 * --- ---
 *
 * @group Component
 */
export const Calendar = (props: CalendarProps) => {
  return <PrimeCalendar {...props} />;
};
