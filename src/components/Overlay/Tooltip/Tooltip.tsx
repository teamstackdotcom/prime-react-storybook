import React from "react";
import {
  Tooltip as PrimeTooltip,
  TooltipPassThroughOptions,
} from "primereact/tooltip";
import { PassThroughOptions } from "primereact/passthrough";
import { TooltipEvent } from "primereact/tooltip/tooltipoptions";

/**
 * Defines valid properties of TooltipOptions.
 * @group Model
 */
export interface TooltipOptions {
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  appendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Defines which position on the target element to align the positioned tooltip.
   */
  at?: string;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @defaultValue true
   */
  autoHide?: boolean;
  /**
   * Whether to automatically manage layering.
   * @defaultValue true
   */
  autoZIndex?: boolean;
  /**
   * Base zIndex value to use in layering.
   * @defaultValue 0
   */
  baseZIndex?: number;
  /**
   * Style class of the tooltip.
   */
  className?: string;
  /**
   * When present, it specifies that the tooltip should be hidden.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Event to show the tooltip.
   * @defaultValue hover
   */
  event?: "hover" | "focus" | "both";
  /**
   * Delay to hide the tooltip in milliseconds.
   * @defaultValue 0
   */
  hideDelay?: number;
  /**
   * Event to hide the tooltip if the event property is empty.
   * @defaultValue mouseleave
   */
  hideEvent?: string;
  /**
   * Whether the tooltip will follow the mouse.
   * @defaultValue false
   */
  mouseTrack?: boolean;
  /**
   * Defines left position of the tooltip in relation to the mouse when the mouseTrack is enabled.
   * @defaultValue 5
   */
  mouseTrackLeft?: number;
  /**
   * Defines top position of the tooltip in relation to the mouse when the mouseTrack is enabled.
   * @defaultValue 5
   */
  mouseTrackTop?: number;
  /**
   * Defines which position on the tooltip being positioned to align with the target element.
   */
  my?: string;
  /**
   * Position of the tooltip.
   * @defaultValue right
   */
  position?: "top" | "bottom" | "left" | "right" | "mouse";
  /**
   * Delay to show the tooltip in milliseconds.
   * @defaultValue 0
   */
  showDelay?: number;
  /**
   * Event to show the tooltip if the event property is empty.
   * @defaultValue mouseenter
   */
  showEvent?: string;
  /**
   * Whether to show tooltip for disabled elements.
   * @defaultValue false
   */
  showOnDisabled?: boolean;
  /**
   * Style of the tooltip.
   */
  style?: React.CSSProperties;
  /**
   * Delay to update the tooltip in milliseconds.
   * @defaultValue 0
   */
  updateDelay?: number;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   */
  pt?: TooltipPassThroughOptions;
  /**
   * Used to configure passthrough(pt) options of the component.
   * @type {PassThroughOptions}
   */
  ptOptions?: PassThroughOptions;
  /**
   * Callback to invoke before the tooltip is shown.
   * @param {TooltipEvent} event - Browser event
   */
  onBeforeShow?(event: TooltipEvent): void;
  /**
   * Callback to invoke before the tooltip is hidden.
   * @param {TooltipEvent} event - Browser event
   */
  onBeforeHide?(event: TooltipEvent): void;
  /**
   * Callback to invoke when the tooltip is shown.
   * @param {TooltipEvent} event - Browser event
   */
  onShow?(event: TooltipEvent): void;
  /**
   * Callback to invoke when the tooltip is hidden.
   * @param {TooltipEvent} event - Browser event
   */
  onHide?(event: TooltipEvent): void;
}

/**
 * Defines valid properties in Tooltip component. In addition to these, all properties of TooltipOptions can be used in this component.
 * @extends {TooltipOptions}
 * @group Properties
 */
export interface TooltipProps extends TooltipOptions {
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * Target element on global tooltip option.
   */
  target?: string | string[] | HTMLElement | React.RefObject<HTMLElement>;
  /**
   * Content to be displayed in tooltip.
   */
  content?: React.ReactNode | string;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {TooltipPassThroughOptions}
   */
  pt?: TooltipPassThroughOptions;
  /**
   * Used to configure passthrough(pt) options of the component.
   * @type {PassThroughOptions}
   */
  ptOptions?: PassThroughOptions;
}

/**
 * **PrimeReact - Tooltip**
 *
 * _Tooltip functionality is integrated within various PrimeReact components._
 *
 * [Live Demo](https://www.primereact.org/tooltip/)
 * --- ---
 *
 * @group Component
 */
export const Tooltip = (props: TooltipProps) => <PrimeTooltip {...props} />;
