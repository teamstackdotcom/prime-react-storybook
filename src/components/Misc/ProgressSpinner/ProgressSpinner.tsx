import React from "react";
import {
  ProgressSpinner as PrimeProgressSpinner,
  ProgressSpinnerPassThroughOptions,
} from "primereact/progressspinner";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in ProgressSpinner component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ProgressSpinnerProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Width of the circle stroke.
   * @defaultValue 2
   */
  strokeWidth?: string;
  /**
   * 	Color for the background of the circle.
   */
  fill?: string;
  /**
   * Duration of the rotate animation.
   * @defaultValue 2s
   */
  animationDuration?: string;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ProgressSpinnerPassThroughOptions}
   */
  pt?: ProgressSpinnerPassThroughOptions;
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
 * **PrimeReact - ProgressSpinner**
 *
 * _ProgressSpinner is a process status indicator._
 *
 * [Live Demo](https://www.primereact.org/progressspinner/)
 * --- ---
 *
 * @group Component
 */
export const ProgressSpinner = (props: ProgressSpinnerProps) => (
  <PrimeProgressSpinner {...props} />
);
