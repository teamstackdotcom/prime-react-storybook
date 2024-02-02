import React from "react";
import {
  MessagePassThroughOptions,
  Message as PrimeMessage,
} from "primereact/message";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in Message component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface MessageProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref" | "content" | "pt"
  > {
  /**
   * Text of the message.
   */
  text?: React.ReactNode | ((props: MessageProps) => React.ReactNode);
  /**
   * Severity level of the message.
   */
  severity?: "success" | "info" | "warn" | "error";
  /**
   * Custom template of the message.
   */
  content?: React.ReactNode | ((props: MessageProps) => React.ReactNode);
  /**
   * Icon for the message. If not set it will default to severity icon.
   * @defaultValue based on severity
   */
  icon?: IconType<MessageProps>;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {MessagePassThroughOptions}
   */
  pt?: MessagePassThroughOptions;
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
 * **PrimeReact - Message**
 *
 * _Message is used to display inline message with various severities._
 *
 * [Live Demo](https://www.primereact.org/message/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
export const Message = (props: MessageProps) => <PrimeMessage {...props} />;
