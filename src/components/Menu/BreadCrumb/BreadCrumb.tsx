import React from "react";
import {
  BreadCrumbPassThroughOptions,
  BreadCrumb as PrimeBreadCrumb,
} from "primereact/breadcrumb";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";
import { MenuItem } from "primereact/menuitem";

/**
 * Defines valid properties in BreadCrumb component. In addition to these, all properties of HTMLElement can be used in this component.
 * @group Properties
 */
export interface BreadCrumbProps
  extends Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    "ref"
  > {
  /**
   * An array of menuitems.
   */
  model?: MenuItem[];
  /**
   * MenuItem configuration for the home icon.
   */
  home?: MenuItem;
  /**
   * Icon of the separator.
   */
  separatorIcon?: IconType<BreadCrumbProps>;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {BreadCrumbPassThroughOptions}
   */
  pt?: BreadCrumbPassThroughOptions;
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
 * **PrimeReact - BreadCrumb**
 *
 * _Breadcrumb provides contextual information about page hierarchy._
 *
 * [Live Demo](https://www.primereact.org/breadcrumb/)
 * --- ---
 *
 * @group Component
 */
export const BreadCrumb = (props: BreadCrumbProps) => (
  <PrimeBreadCrumb {...props} />
);
