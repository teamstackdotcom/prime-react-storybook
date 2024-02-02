import React from "react";
import { BadgePassThroughOptions, Badge as PrimeBadge } from "primereact/badge";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Badge component. In addition to these, all properties of HTMLSpanElement can be used in this component.
 * @group Properties
 */
export interface BadgeProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    "ref"
  > {
  /**
   * Value to display inside the badge.
   *
   */
  value?: any | null;
  /**
   * Severity type of the badge.
   * @defaultValue null
   */
  severity?: "success" | "info" | "warning" | "danger";
  /**
   * Size of the badge, valid options are "large" and "xlarge".
   * @defaultValue null
   */
  size?: "normal" | "large" | "xlarge";
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {BadgePassThroughOptions}
   */
  pt?: BadgePassThroughOptions;
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
 * **PrimeReact - Badge**
 *
 * _Badge represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primereact.org/badge/)
 * --- ---
 *
 * @group Component
 */
export const Badge = (props: BadgeProps) => <PrimeBadge {...props} />;
