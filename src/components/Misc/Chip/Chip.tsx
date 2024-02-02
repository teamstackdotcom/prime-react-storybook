import React from "react";
import {
  ChipPassThroughOptions,
  ChipRemoveEvent,
  Chip as PrimeChip,
} from "primereact/chip";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType, TemplateType } from "primereact/utils";

/**
 * Defines valid properties in Chip component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface ChipProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Defines the text to display.
   */
  label?: string;
  /**
   * Defines the icon to display.
   */
  icon?: IconType<ChipProps>;
  /**
   * Defines the image to display.
   */
  image?: string;
  /**
   * Whether to display a remove icon.
   * @defaultValue false
   */
  removable?: boolean;
  /**
   * Icon of the remove element.
   */
  removeIcon?: IconType<ChipProps>;
  /**
   * Template of an item.
   */
  template?: TemplateType<ChipProps>;
  /**
   * It specifies an alternate text for an image, if the image cannot be displayed.
   */
  imageAlt?: string;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {React.SyntheticEvent}  event - Browser event.
   */
  onImageError?(event: React.SyntheticEvent): void;
  /**
   * Callback to invoke when a chip is removed.
   * * @param {ChipRemoveEvent} event - Custom remove event
   */
  onRemove?(event: ChipRemoveEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {ChipPassThroughOptions}
   */
  pt?: ChipPassThroughOptions;
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
 * **PrimeReact - Chip**
 *
 * _Chip represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primereact.org/chip/)
 * --- ---
 *
 * @group Component
 */
export const Chip = (props: ChipProps) => <PrimeChip {...props} />;
