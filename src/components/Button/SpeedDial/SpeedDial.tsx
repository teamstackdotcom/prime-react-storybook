import React from "react";
import {
  SpeedDial as PrimeSpeedDial,
  SpeedDialButtonOptions,
  SpeedDialPassThroughOptions,
} from "primereact/speeddial";
import { IconType } from "primereact/utils";
import { PassThroughOptions } from "primereact/passthrough";
import { MenuItem } from "primereact/menuitem";

/**
 * Defines valid properties in SpeedDial component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SpeedDialProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * MenuModel instance to define the action items.
   */
  model?: MenuItem[];
  /**
   * Specifies the visibility of the overlay.
   * @defaultValue false
   */
  visible?: boolean;
  /**
   * Specifies the opening direction of actions. Valid values are 'up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left' and 'down-right'
   * @defaultValue up
   */
  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "up-left"
    | "up-right"
    | "down-left"
    | "down-right";
  /**
   * Transition delay step for each action item.
   * @defaultValue 30
   */
  transitionDelay?: number;
  /**
   * Specifies the opening type of actions.
   * @defaultValue linear
   */
  type?: "linear" | "circle" | "semi-circle" | "quarter-circle";
  /**
   * Radius for *circle types.
   * @defaultValue 0
   */
  radius?: number;
  /**
   * Whether to show a mask element behind the speeddial.
   * @defaultValue false
   */
  mask?: boolean;
  /**
   * Whether the component is disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Whether the actions close when clicked outside.
   * @defaultValue true
   */
  hideOnClickOutside?: boolean;
  /**
   * Inline style of the button element.
   */
  buttonStyle?: React.CSSProperties;
  /**
   * Style class of the button element.
   */
  buttonClassName?: string;
  /**
   * Template of button element.
   */
  buttonTemplate?:
    | React.ReactNode
    | ((options: SpeedDialButtonOptions) => React.ReactNode);
  /**
   * Inline style of the mask element.
   */
  maskStyle?: React.CSSProperties;
  /**
   * Style class of the mask element.
   */
  maskClassName?: string;
  /**
   * Show icon of the button element.
   */
  showIcon?: IconType<SpeedDialProps>;
  /**
   * Hide icon of the button element.
   */
  hideIcon?: IconType<SpeedDialProps>;
  /**
   * Defined to rotate showIcon when hideIcon is not present.
   * @defaultValue true
   */
  rotateAnimation?: boolean;
  /**
   * Fired when the visibility of element changed.
   * @param {boolean} visible - Custom visible change event
   */
  onVisibleChange?(visible: boolean): void;
  /**
   * Fired when the button element clicked.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Fired when the actions are visible.
   */
  onShow?(): void;
  /**
   * Fired when the actions are hidden.
   */
  onHide?(): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {SpeedDialPassThroughOptions}
   */
  pt?: SpeedDialPassThroughOptions;
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
 * **PrimeReact - SpeedDial**
 *
 * _When pressed, a floating action button can display multiple primary actions that can be performed on a page._
 *
 * [Live Demo](https://www.primereact.org/speeddial/)
 * --- ---
 *
 * @group Component
 */
export const SpeedDial = (props: SpeedDialProps) => (
  <PrimeSpeedDial {...props} />
);
