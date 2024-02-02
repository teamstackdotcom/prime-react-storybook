import React from "react";
import {
  Slider as PrimeSlider,
  SliderChangeEvent,
  SliderPassThroughOptions,
  SliderSlideEndEvent,
} from "primereact/slider";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Slider component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SliderProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange" | "value" | "ref" | "pt"
  > {
  /**
   * Value of the component.
   * @defaultValue 0
   */
  value?: number | [number, number];
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
   * Orientation of the slider, valid values are horizontal and vertical.
   * @defaultValue horizontal
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Step factor to increment/decrement the value.
   * @defaultValue 1
   */
  step?: number;
  /**
   * When speficed, allows two boundary values to be picked.
   * @defaultValue false
   */
  range?: boolean;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   */
  ariaLabelledBy?: string;
  /**
   * Callback to invoke on value change via slide.
   * @param {SliderChangeEvent} event - Custom change event
   */
  onChange?(event: SliderChangeEvent): void;
  /**
   * Callback to invoke when slide ends.
   * @param {SliderSlideEndEvent} event - Custom slide event
   */
  onSlideEnd?(event: SliderSlideEndEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {SliderPassThroughOptions}
   */
  pt?: SliderPassThroughOptions;
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
 * **PrimeReact - Slider**
 *
 * _Slider is a component to provide input with a drag handle._
 *
 * [Live Demo](https://www.primereact.org/slider/)
 * --- ---
 *
 * @group Component
 */
export const Slider = (props: SliderProps) => {
  return <PrimeSlider {...props} />;
};
