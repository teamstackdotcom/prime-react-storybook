import React from "react";
import {
  PasswordIconEvent,
  PasswordPassThroughOptions,
  Password as PrimePassword,
} from "primereact/password";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { IconType } from "primereact/utils";
import { KeyFilterType } from "primereact/keyfilter";
import { CSSTransitionProps } from "primereact/csstransition";

/**
 * Defines valid properties in Password component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface PasswordProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "onInput" | "ref" | "content" | "pt"
  > {
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
   * Style class of the input field.
   */
  inputClassName?: string;
  /**
   * Hide icon template.
   */
  hideIcon?: IconType<PasswordProps>;
  /**
   * Show icon template.
   */
  showIcon?: IconType<PasswordProps>;
  /**
   * Text to prompt password entry.
   * @defaultValue Please enter a password
   */
  promptLabel?: string;
  /**
   * Text for a weak password.
   * @defaultValue Weak
   */
  weakLabel?: string;
  /**
   * Text for a medium password.
   * @defaultValue Medium
   */
  mediumLabel?: string;
  /**
   * Text for a strong password.
   * @defaultValue Strong
   */
  strongLabel?: string;
  /**
   * Regex for a medium level password.
   * @defaultValue ^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.&#123;6,&#125;).
   */
  mediumRegex?: string;
  /**
   * Regex for a strong level password.
   * @defaultValue ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.&#123;8,&#125;)
   */
  strongRegex?: string;
  /**
   * Whether to show the strength indicator or not.
   * @defaultValue true
   */
  feedback?: boolean;
  /**
   * Whether to show an icon to display the password as plain text.
   * @defaultValue false
   */
  toggleMask?: boolean;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Template of panel header if "feedback" is enabled.
   */
  header?: React.ReactNode | ((props: PasswordProps) => React.ReactNode);
  /**
   * Template of panel content if "feedback" is enabled.
   */
  content?: React.ReactNode | ((props: PasswordProps) => React.ReactNode);
  /**
   * Template of panel footer if "feedback" is enabled.
   */
  footer?: React.ReactNode | ((props: PasswordProps) => React.ReactNode);
  /**
   * Template of mask icon if "toggleMask" is enabled.
   */
  icon?: React.ReactNode | ((event: PasswordIconEvent) => React.ReactNode);
  /**
   * Content of the tooltip.
   */
  tooltip?: string;
  /**
   * Configuration of the tooltip, refer to the tooltip documentation for more information.
   */
  tooltipOptions?: TooltipOptions;
  /**
   * Format definition of the keys to block.
   */
  keyfilter?: KeyFilterType;
  /**
   * Inline style of the overlay panel element.
   */
  panelStyle?: React.CSSProperties;
  /**
   * Style class of the overlay panel element.
   */
  panelClassName?: string;
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Callback to invoke on input event of input field.
   * @param {React.FormEvent<HTMLInputElement>} event - Browser event
   * @param {boolean} validatePattern - Whether to validate the value
   */
  onInput?(
    event: React.FormEvent<HTMLInputElement>,
    validatePattern: boolean
  ): void;
  /**
   * Callback to invoke when overlay becomes visible.
   */
  onShow?(): void;
  /**
   * Callback to invoke when overlay becomes hidden.
   */
  onHide?(): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {PasswordPassThroughOptions}
   */
  pt?: PasswordPassThroughOptions;
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
 * **PrimeReact - Password**
 *
 * _Password displays strength indicator for password fields._
 *
 * [Live Demo](https://www.primereact.org/password/)
 * --- ---
 *
 * @group Component
 */
export const Password = (props: PasswordProps) => {
  return <PrimePassword {...props} />;
};
