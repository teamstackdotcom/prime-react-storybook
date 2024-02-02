import React from "react";
import { ChartPassThroughOptions, Chart as PrimeChart } from "primereact/chart";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Chart component.
 * @group Properties
 */
export interface ChartProps {
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * Type of the chart.
   */
  type?: string;
  /**
   * Data to display.
   */
  data?: object;
  /**
   * Options to customize the chart.
   */
  options?: object;
  /**
   * Used to custom plugins of the chart.
   */
  plugins?: any[];
  /**
   * Width of the chart in non-responsive mode.
   */
  width?: string;
  /**
   * Height of the chart in non-responsive mode.
   */
  height?: string;
  /**
   * Inline style of the element.
   */
  style?: React.CSSProperties;
  /**
   * Style class of the element.
   */
  className?: string;
  /**
   * ARIA label for the chart canvas. Defaults to options.plugins.title.text if available.
   * @default options.plugins.title.text
   */
  ariaLabel?: string;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ChartPassThroughOptions}
   */
  pt?: ChartPassThroughOptions;
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
 * **PrimeReact - Chart**
 *
 * _Chart components are based on Chart.js, an open source HTML5 based charting library._
 *
 * [Live Demo](https://www.primereact.org/chart/)
 * --- ---
 *
 * @group Component
 */
export const Chart = (props: ChartProps) => <PrimeChart {...props} />;
