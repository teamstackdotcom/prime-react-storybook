import React from "react";
import {
  DividerPassThroughOptions,
  Divider as PrimeDivider,
} from "primereact/divider";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Divider component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface DividerProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center", "bottom" for vertical.
   */
  align?: "center" | "left" | "right" | "bottom" | "top";
  /**
   * Specifies the orientation, valid values are "horizontal" and "vertical".
   * @defaultValue horizontal
   */
  layout?: "vertical" | "horizontal";
  /**
   * Border style type, default is "solid" and other options are "dashed" and "dotted".
   * @defaultValue solid
   */
  type?: "solid" | "dashed" | "dotted";
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {DividerPassThroughOptions}
   */
  pt?: DividerPassThroughOptions;
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
 * **PrimeReact - Divider**
 *
 * _Divider is used to separate contents._
 *
 * [Live Demo](https://www.primereact.org/divider/)
 * --- ---
 *
 * @group Component
 */
export const Divider = (props: DividerProps) => {
  return <PrimeDivider {...props} />;
};
