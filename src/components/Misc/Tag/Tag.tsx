import React from "react";
import { Tag as PrimeTag, TagPassThroughOptions } from "primereact/tag";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in Tag component. In addition to these, all properties of HTMLSpanElement can be used in this component.
 * @group Properties
 */
export interface TagProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLSpanElement>,
      HTMLSpanElement
    >,
    "ref"
  > {
  /**
   * Value to display inside the tag.
   */
  value?: React.ReactNode;
  /**
   * Severity type of the tag.
   * @defaultValue null
   */
  severity?: "success" | "info" | "warning" | "danger";
  /**
   * Whether the corners of the tag are rounded.
   * @defaultValue false
   */
  rounded?: boolean;
  /**
   * Icon of the tag to display next to the value.
   */
  icon?: IconType<TagProps>;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {TagPassThroughOptions}
   */
  pt?: TagPassThroughOptions;
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
 * **PrimeReact - Tag**
 *
 * _Tag component is used to categorize content._
 *
 * [Live Demo](https://www.primereact.org/tag/)
 * --- ---
 *
 * @group Component
 */
//@ts-ignore
export const Tag = (props: TagProps) => <PrimeTag {...props} />;
