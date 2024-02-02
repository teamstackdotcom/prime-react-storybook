import React from "react";
import {
  Steps as PrimeSteps,
  StepsPassThroughOptions,
  StepsSelectEvent,
} from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Steps component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface StepsProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onSelect" | "ref"
  > {
  /**
   * An array of menuitems.
   */
  model: MenuItem[];
  /**
   * Index of the active item.
   * @defaultValue 0
   */
  activeIndex?: number;
  /**
   * Whether the items are clickable or not.
   * @defaultValue true
   */
  readOnly?: boolean;
  /**
   * Callback to invoke when the new step is selected.
   * @param {StepsSelectEvent} event - Custom select event
   */
  onSelect?(event: StepsSelectEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {StepsPassThroughOptions}
   */
  pt?: StepsPassThroughOptions;
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
 * **PrimeReact - Steps**
 *
 * _Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design._
 *
 * [Live Demo](https://www.primereact.org/steps/)
 * --- ---
 *
 * @group Component
 */
export const Steps = (props: StepsProps) => <PrimeSteps {...props} />;
