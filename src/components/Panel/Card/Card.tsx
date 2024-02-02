import React from "react";
import { CardPassThroughOptions, Card as PrimeCard } from "primereact/card";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Card component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface CardProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref" | "title"
  > {
  /**
   * Header of the card.
   */
  header?: React.ReactNode | ((props: CardProps) => React.ReactNode);
  /**
   * Footer of the card.
   */
  footer?: React.ReactNode | ((props: CardProps) => React.ReactNode);
  /**
   * Title of the card.
   */
  title?: React.ReactNode | ((props: CardProps) => React.ReactNode);
  /**
   * Secondary title of the card.
   */
  subTitle?: React.ReactNode | ((props: CardProps) => React.ReactNode);
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {CardPassThroughOptions}
   */
  pt?: CardPassThroughOptions;
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
 * **PrimeReact - Card**
 *
 * _Card is a flexible container component._
 *
 * [Live Demo](https://www.primereact.org/card/)
 * --- ---
 *
 * @group Component
 */
export const Card = (props: CardProps) => {
  return <PrimeCard {...props} />;
};
