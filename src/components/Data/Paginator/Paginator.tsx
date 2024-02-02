import React from "react";
import {
  PaginatorPageChangeEvent,
  PaginatorPassThroughOptions,
  PaginatorTemplateOptions,
  Paginator as PrimePaginator,
} from "primereact/paginator";
import { IconType } from "primereact/utils";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in Paginator component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface PaginatorProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref" | "pt"
  > {
  /**
   * Number of total records.
   * @defaultValue 0
   */
  totalRecords?: number;
  /**
   * Data count to display per page.
   * @defaultValue 0
   */
  rows?: number;
  /**
   * Zero-relative number of the first row to be displayed.
   * @defaultValue 0
   */
  first?: number;
  /**
   * Number of page links to display.
   * @defaultValue 5
   */
  pageLinkSize?: number;
  /**
   * Array of integer values to display inside rows per page dropdown.
   */
  rowsPerPageOptions?: number[];
  /**
   * Whether to show it even there is only one page.
   */
  alwaysShow?: boolean;
  /**
   * Custom template of the paginator.
   * @defaultValue FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown
   */
  template?: PaginatorTemplateOptions | string;
  /**
   * Content to inject into the left side of the paginator.
   */
  leftContent?: React.ReactNode;
  /**
   * Content to inject into the right side of the paginator.
   */
  rightContent?: React.ReactNode;
  /**
   * Icon of the first page link icon template.
   */
  firstPageLinkIcon?: IconType<PaginatorProps>;
  /**
   * Icon of the prev page link icon template.
   */
  prevPageLinkIcon?: IconType<PaginatorProps>;
  /**
   * Icon of the next page link icon template.
   */
  nextPageLinkIcon?: IconType<PaginatorProps>;
  /**
   * Icon of the last page link icon template.
   */
  lastPageLinkIcon?: IconType<PaginatorProps>;
  /**
   * Template of the current page report element. Available placeholders are &#123;currentPage&#125;, &#123;totalPages&#125;, &#123;rows&#125;, &#123;first&#125;, &#123;last&#125; and &#123;totalRecords&#125;
   * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
   */
  currentPageReportTemplate?: string;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  dropdownAppendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Callback to invoke when page changes, the event object contains information about the new state.
   * @param {PaginatorPageChangeEvent} event - Custom page change event.
   */
  onPageChange?(event: PaginatorPageChangeEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {PaginatorPassThroughOptions}
   */
  pt?: PaginatorPassThroughOptions;
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
 * **PrimeReact - Paginator**
 *
 * _Paginator is a generic widget to display content in paged format._
 *
 * [Live Demo](https://www.primereact.org/paginator/)
 * --- ---
 *
 * @group Component
 */
export const Paginator = (props: PaginatorProps) => {
  return <PrimePaginator {...props} />;
};
