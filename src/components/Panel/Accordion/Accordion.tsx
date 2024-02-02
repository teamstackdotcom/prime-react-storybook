import React from "react";
import {
  Accordion as PrimeAccordion,
  AccordionTabOpenEvent,
  AccordionTabCloseEvent,
  AccordionTabChangeEvent,
  AccordionPassThroughOptions,
} from "primereact/accordion";
import { IconType } from "primereact/utils";
import { CSSTransitionProps } from "primereact/csstransition";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Accordion component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface AccordionProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Active index or indexes of the element. Use an array of numbers for multiple indexes.
   * The {@link multiple} prop must be set to true in order to specify multiple indexes.
   */
  activeIndex?: number | number[] | null;
  /**
   * When enabled, multiple tabs can be activated at the same time.
   * @defaultValue false
   */
  multiple?: boolean;
  /**
   * Icon of a collapsed tab.
   */
  expandIcon?: IconType<AccordionProps>;
  /**
   * Icon of an expanded tab.
   */
  collapseIcon?: IconType<AccordionProps>;
  /**
   * The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
   * @type {CSSTransitionProps}
   */
  transitionOptions?: CSSTransitionProps;
  /**
   * Callback to invoke when a tab gets expanded.
   * @param {AccordionTabOpenEvent} event - Custom tab open event.
   */
  onTabOpen?(event: AccordionTabOpenEvent): void;
  /**
   * Callback to invoke when an active tab is collapsed by clicking on the header.
   * @param {AccordionTabCloseEvent} event - Custom tab close event.
   */
  onTabClose?(event: AccordionTabCloseEvent): void;
  /**
   * Callback to invoke when state of the accordion changes.
   * @param {AccordionTabChangeEvent} event - Custom tab close event.
   */
  onTabChange?(event: AccordionTabChangeEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {AccordionPassThroughOptions}
   */
  pt?: AccordionPassThroughOptions;
  /**
   * Used to configure passthrough(pt) options of the component.
   * @type {PassThroughOptions}
   */
  ptOptions?: PassThroughOptions;
}

/**
 * **PrimeReact - Accordion**
 *
 * _Accordion groups a collection of contents in tabs._
 *
 * [Live Demo](https://www.primereact.org/accordion/)
 * --- ---
 *
 * @group Component
 */
export const Accordion = (props: AccordionProps) => {
  return <PrimeAccordion {...props} />;
};
