import React from "react";
import {
  ProgressBar as PrimeProgressBar,
  ProgressBarPassThroughOptions,
} from "primereact/progressbar";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in ProgressBar component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ProgressBarProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Current value of the progress.
   */
  value?: string | number;
  /**
   * Show or hide progress bar value.
   * @defaultValue true
   */
  showValue?: boolean;
  /**
   * Unit sign appended to the value.
   * @defaultValue %
   */
  unit?: string;
  /**
   * Defines the mode of the progress, valid values are "determinate" and "indeterminate".
   * @defaultValue determinate
   */
  mode?: "determinate" | "indeterminate";
  /**
   * Color for the background of the progress.
   */
  color?: string;
  /**
   * Custom display value template
   */
  displayValueTemplate?(value: string | number): React.ReactNode;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ProgressBarPassThroughOptions}
   */
  pt?: ProgressBarPassThroughOptions;
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
 * **PrimeReact - ProgressBar**
 *
 * _ProgressBar is a process status indicator._
 *
 * [Live Demo](https://www.primereact.org/progressbar/)
 * --- ---
 *
 * @group Component
 */
export const ProgressBar = (props: ProgressBarProps) => (
  <PrimeProgressBar {...props} />
);
