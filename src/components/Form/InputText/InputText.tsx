import React from "react";
import {
  InputTextPassThroughOptions,
  InputText as PrimeInputText,
} from "primereact/inputtext";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";
import { KeyFilterType } from "primereact/keyfilter";

/**
 * Defines valid properties in InputText component. In addition to these, all properties of HTMLInputElement can be used in this component.
 * @group Properties
 */
export interface InputTextProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onInput" | "ref" | "value" | "size"
  > {
  /**
   * Format definition of the keys to block.
   */
  keyfilter?: KeyFilterType;
  /**
   * Size of the input.
   */
  size?: number | string;
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
   * When enabled, instead of blocking keys, input is validated internally to test against the regular expression.
   * @defaultValue false
   */
  validateOnly?: boolean;
  /**
   * The value of component
   */
  value?: string;
  /**
   * Callback to invoke while typing value on input
   * @param {React.FormEvent<HTMLInputElement>} event - Browser event
   * @param {boolean} validatePattern - Whether to validate the value
   */
  onInput?(
    event: React.FormEvent<HTMLInputElement>,
    validatePattern: boolean
  ): void;
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
 * **PrimeReact - InputText**
 *
 * _InputText is an extension to standard input element with theming and keyfiltering._
 *
 * [Live Demo](https://www.primereact.org/inputtext/)
 * --- ---
 *
 * @group Component
 */
export const InputText = (props: InputTextProps) => {
  return <PrimeInputText {...props} />;
};
