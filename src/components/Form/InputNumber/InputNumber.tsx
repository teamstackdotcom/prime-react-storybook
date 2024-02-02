import React from "react";
import {
  InputNumberChangeEvent,
  InputNumberPassThroughOptions,
  InputNumberValueChangeEvent,
  InputNumber as PrimeInputNumber,
  RoundingMode,
} from "primereact/inputnumber";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in InputNumber component. In addition to these, all properties of HTMLSpanElement can be used in this component.
 * @group Properties
 */
export interface InputNumberProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    "onChange" | "ref"
  > {
  /**
   * 	Value of the component.
   */
  value?: number | null;
  /**
   * Reference of the input element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * Whether to format the value.
   * @defaultValue true
   */
  format?: boolean;
  /**
   * Displays spinner buttons.
   * @defaultValue false
   */
  showButtons?: boolean;
  /**
   * Layout of the buttons.
   * @defaultValue stacked
   */
  buttonLayout?: "stacked" | "horizontal" | "vertical";
  /**
   * Style class of the increment button.
   */
  incrementButtonClassName?: string;
  /**
   * Style class of the decrement button.
   */
  decrementButtonClassName?: string;
  /**
   * Style class of the increment button.
   */
  incrementButtonIcon?: IconType<InputNumberProps>;
  /**
   * Style class of the decrement button.
   */
  decrementButtonIcon?: IconType<InputNumberProps>;
  /**
   * Locale to be used in formatting.
   */
  locale?: string;
  /**
   * The locale matching algorithm to use. See [Locale Negotation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation) for details.
   * @defaultValue best fit
   */
  localeMatcher?: "lookup" | "best fit" | string;
  /**
   * Defines the behavior of the component.
   * @defaultValue decimal
   */
  mode?: "decimal" | "currency";
  /**
   * Text to display after the value.
   */
  suffix?: string;
  /**
   * Text to display before the value.
   */
  prefix?: string;
  /**
   * The currency to use in currency formatting. Possible values are the [ISO 4217 currency codes](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency), such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.
   * There is no default value; if the style is "currency", the currency property must be provided.
   */
  currency?: string;
  /**
   * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   * @defaultValue symbol
   */
  currencyDisplay?: string;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @defaultValue true
   */
  useGrouping?: boolean;
  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
   * the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) (2 if the list doesn't provide that information).
   */
  minFractionDigits?: number;
  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3;
   * the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) (2 if the list doesn't provide that information).
   */
  maxFractionDigits?: number;
  /**
   * How decimals should be rounded. [further information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode).
   * @defaultValue halfExpand
   */
  roundingMode?: RoundingMode;
  /**
   * Name of the input element.
   */
  name?: string;
  /**
   * Type of the input element.
   * @defaultValue text
   */
  type?: string;
  /**
   * Determines whether the input field is empty.
   * @defaultValue true
   */
  allowEmpty?: boolean;
  /**
   * Step factor to increment/decrement the value.
   * @defaultValue 1
   */
  step?: number;
  /**
   * Mininum boundary value.
   */
  min?: number;
  /**
   * Maximum boundary value.
   */
  max?: number;
  /**
   * Maximum value length.
   */
  maxLength?: number;
  /**
   * When present, it specifies that the element should be disabled.
   */
  disabled?: boolean;
  /**
   * When present, it specifies that the element must be filled out before submitting the form.
   * @defaultValue false
   */
  required?: boolean;
  /**
   * Index of the element in tabbing order.
   */
  tabIndex?: number;
  /**
   * The pattern attribute specifies a regular expression that the element's value is checked against on form submission.
   */
  pattern?: string;
  /**
   * Hint text for the input field.
   */
  placeholder?: string;
  /**
   * When present, it specifies that the element should be read-only.
   */
  readOnly?: boolean;
  /**
   * Size of the input field.
   */
  size?: number;
  /**
   * Identifier of the input element.
   */
  inputId?: string;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @defaultValue false
   */
  autoFocus?: boolean;
  /**
   * Inline style of the input field.
   */
  inputStyle?: React.CSSProperties;
  /**
   * Inline style of the input field.
   */
  inputClassName?: string;
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
   * Callback to invoke after validation check and value change.
   * @param {InputNumberValueChangeEvent} event - Custom value change event
   */
  onValueChange?(event: InputNumberValueChangeEvent): void;
  /**
   * Callback to invoke on value change.
   * @param {InputNumberChangeEvent} event - Custom change event
   */
  onChange?(event: InputNumberChangeEvent): void;
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
   * Callback to invoke when the key pressed down.
   * @param {React.KeyboardEvent<HTMLInputElement>} event - Browser event
   */
  onKeyDown?(event: React.KeyboardEvent<HTMLInputElement>): void;
  /**
   * Callback to invoke when the key released.
   * @param {React.KeyboardEvent<HTMLInputElement>} event - Browser event
   */
  onKeyUp?(event: React.KeyboardEvent<HTMLInputElement>): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {InputNumberPassThroughOptions}
   */
  pt?: InputNumberPassThroughOptions;
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
 * **PrimeReact - InputNumber**
 *
 * _InputNumber is an input component to provide numerical input._
 *
 * [Live Demo](https://www.primereact.org/inputnumber/)
 * --- ---
 *
 * @group Component
 */
export const InputNumber = (props: InputNumberProps) => {
  return <PrimeInputNumber {...props} />;
};
