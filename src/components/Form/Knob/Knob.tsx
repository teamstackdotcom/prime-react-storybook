import React from "react";
import {
  KnobChangeEvent,
  KnobPassThroughOptions,
  Knob as PrimeKnob,
} from "primereact/knob";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Knob component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface KnobProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "ref"
  > {
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * Inline style of the element.
   */
  style?: React.CSSProperties;
  /**
   * Style class of the element.
   */
  className?: string;
  /**
   * Value of the component.
   */
  value?: number;
  /**
   * Size of the component in pixels.
   * @defaultValue 100
   */
  size?: number;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * When present, it specifies that the component value cannot be edited.
   * @defaultValue false
   */
  readOnly?: boolean;
  /**
   * Whether the show the value inside the knob.
   * @defaultValue true
   */
  showValue?: boolean;
  /**
   * Step factor to increment/decrement the value.
   * @defaultValue 1
   */
  step?: number;
  /**
   * Mininum boundary value.
   * @defaultValue 0
   */
  min?: number;
  /**
   * Maximum boundary value.
   * @defaultValue 100
   */
  max?: number;
  /**
   * Width of the knob stroke.
   * @defaultValue 14
   */
  strokeWidth?: number;
  /**
   * Name of the input element.
   */
  name?: string;
  /**
   * Background of the value.
   * @defaultValue var(--primary-color, Black)
   */
  valueColor?: string;
  /**
   * Background color of the range.
   * @defaultValue var(--surface-border, LightGray)
   */
  rangeColor?: string;
  /**
   * Color of the value text.
   * @defaultValue var(--text-color-secondary, Black)
   */
  textColor?: string;
  /**
   * Template string of the value.
   * @defaultValue &#123;value&#125;
   */
  valueTemplate?: string;
  /**
   * Callback to invoke on value change.
   * @param {KnobChangeEvent} event - Custom change event
   */
  onChange?(event: KnobChangeEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {KnobPassThroughOptions}
   */
  pt?: KnobPassThroughOptions;
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
 * **PrimeReact - Knob**
 *
 * _Knob is a form component to define number inputs with a dial._
 *
 * [Live Demo](https://www.primereact.org/knob/)
 * --- ---
 *
 * @group Component
 */
export const Knob = (props: KnobProps) => {
  return <PrimeKnob {...props} />;
};
