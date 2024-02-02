import React from "react";
import {
  Skeleton as PrimeSkeleton,
  SkeletonPassThroughOptions,
} from "primereact/skeleton";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Skeleton component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface SkeletonProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * It specifies an alternate text for an image, if the image cannot be displayed.
   * @defaultValue rectangle
   */
  shape?: "rectangle" | "circle";
  /**
   * Size of the Circle or Square.
   */
  size?: string;
  /**
   * Width of the element.
   * @defaultValue 100%
   */
  width?: string;
  /**
   * Height of the element.
   * @defaultValue 1rem
   */
  height?: string;
  /**
   * Border radius of the element, defaults to value from theme.
   */
  borderRadius?: string;
  /**
   * Type of the animation, valid options are "wave" and "none".
   * @defaultValue wave
   */
  animation?: "wave" | "none";
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {SkeletonPassThroughOptions}
   */
  pt?: SkeletonPassThroughOptions;
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
 * **PrimeReact - Skeleton**
 *
 * _Skeleton is a placeholder to display instead of the actual content._
 *
 * [Live Demo](https://www.primereact.org/skeleton/)
 * --- ---
 *
 * @group Component
 */
export const Skeleton = (props: SkeletonProps) => <PrimeSkeleton {...props} />;
