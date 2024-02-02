import React from "react";
import {
  BlockUIPassThroughOptions,
  BlockUI as PrimeBlockUI,
} from "primereact/blockui";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in BlockUI component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface BlockUIProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
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
   * Controls the blocked state.
   * @defaultValue false
   */
  blocked?: boolean;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Style class of the container element.
   */
  containerClassName?: string;
  /**
   * Inline style of the container element.
   */
  containerStyle?: React.CSSProperties;
  /**
   * When enabled, the whole document gets blocked.
   * @defaultValue false
   */
  fullScreen?: boolean;
  /**
   * Template of mask.
   */
  template?:
    | React.ReactNode
    | ((props: BlockUIProps) => React.ReactNode)
    | null;

  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {BlockUIPassThroughOptions}
   */
  pt?: BlockUIPassThroughOptions;
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
  /**
   * Fired when the element gets blocked.
   */
  onBlocked?(): void;
  /**
   * Fired when the element gets unblocked.
   */
  onUnblocked?(): void;
}

/**
 * **PrimeReact - BlockUI**
 *
 * _BlockUI represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primereact.org/blockui/)
 * --- ---
 *
 * @group Component
 */
export const BlockUI = (props: BlockUIProps) => <PrimeBlockUI {...props} />;
