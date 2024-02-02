import React from "react";
import {
  AvatarPassThroughOptions,
  Avatar as PrimeAvatar,
} from "primereact/avatar";
import { IconType } from "primereact/utils";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Avatar component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface AvatarProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Defines the icon to display.
   */
  icon?: IconType<AvatarProps>;
  /**
   * Defines the image to display.
   */
  image?: string;
  /**
   * It specifies an alternate text for an image, if the image cannot be displayed.
   * @defaultValue avatar
   */
  imageAlt?: string;
  /**
   * Defines a fallback image or URL if the main image fails to load. If "default" will fallback to label then icon.
   * @defaultValue default
   */
  imageFallback?: "default" | string;
  /**
   * Defines the text to display.
   */
  label?: string;
  /**
   * Shape of the element.
   * @defaultValue square
   */
  shape?: "square" | "circle";
  /**
   * Size of the element.
   * @defaultValue normal
   */
  size?: "normal" | "large" | "xlarge";
  /**
   * Template of the content.
   */
  template?: React.ReactNode | ((props: AvatarProps) => React.ReactNode);
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {React.SyntheticEvent}  event - Browser event.
   */
  onImageError?(event: React.SyntheticEvent): void;
  /**
   * Callback to invoke on click.
   * @param {React.MouseEvent<HTMLElement>} event - Browser event.
   */
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {AvatarPassThroughOptions}
   */
  pt?: AvatarPassThroughOptions;
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
 * **PrimeReact - Avatar**
 *
 * _Avatar represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primereact.org/avatar/)
 * --- ---
 *
 * @group Component
 */
export const Avatar = (props: AvatarProps) => <PrimeAvatar {...props} />;
