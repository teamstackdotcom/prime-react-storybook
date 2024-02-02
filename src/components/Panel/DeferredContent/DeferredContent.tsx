import React from "react";
import {
  DeferredContentPassThroughOptions,
  DeferredContent as PrimeDeferredContent,
} from "primereact/deferredcontent";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in DeferredContent component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface DeferredContentProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Callback to invoke when deferred content is loaded.
   * @param {React.SyntheticEvent} event - Event object
   */
  onLoad?(event: React.SyntheticEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {DeferredContentPassThroughOptions}
   */
  pt?: DeferredContentPassThroughOptions;
  /**
   * Used to configure passthrough(pt) options of the component.
   * @type {PassThroughOptions}
   */
  ptOptions?: PassThroughOptions;
}

/**
 * **PrimeReact - DeferredContent**
 *
 * _DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll._
 *
 * [Live Demo](https://www.primereact.org/deferredcontent/)
 * --- ---
 *
 * @group Component
 */
export const DeferredContent = (props: DeferredContentProps) => {
  return <PrimeDeferredContent {...props} />;
};
