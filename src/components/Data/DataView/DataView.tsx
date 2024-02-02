import React from "react";
import {
  DataView as PrimeDataView,
  DataViewPageEvent,
  DataViewPassThroughOptions,
} from "primereact/dataview";
import { PaginatorTemplate } from "primereact/paginator";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in DataView component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface DataViewProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Header content of the component.
   */
  header?: React.ReactNode;
  /**
   * Footer content of the component.
   */
  footer?: React.ReactNode;
  /**
   * An array of objects to display.
   */
  value?: any[];
  /**
   * Layout of the items, valid values are "list" and "grid".
   * @defaultValue list
   */
  layout?: "list" | "grid" | (string & Record<string, unknown>);
  /**
   * Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.
   */
  dataKey?: string;
  /**
   * Number of rows to display per page.
   */
  rows?: number;
  /**
   * Index of the first record to render.
   * @defaultValue 0
   */
  first?: number;
  /**
   * Number of total records, defaults to length of value when not defined.
   */
  totalRecords?: number;
  /**
   * When specified as true, enables the pagination.
   * @defaultValue false
   */
  paginator?: boolean;
  /**
   * Position of the paginator, options are "top","bottom" or "both".
   * @defaultValue bottom
   */
  paginatorPosition?: "top" | "bottom" | "both";
  /**
   * Whether to show it even there is only one page.
   * @defaultValue true
   */
  alwaysShowPaginator?: boolean;
  /**
   * Style class of the paginator element.
   */
  paginatorClassName?: string;
  /**
   * Template of the paginator. For details, refer to the template section of the paginator documentation for further options.
   * @defaultValue FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown
   */
  paginatorTemplate?: PaginatorTemplate;
  /**
   * Content for the left side of the paginator.
   */
  paginatorLeft?: React.ReactNode;
  /**
   * Content for the right side of the paginator.
   */
  paginatorRight?: React.ReactNode;
  /**
   * Number of page links to display.
   * @defaultValue 5
   */
  pageLinkSize?: number;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  paginatorDropdownAppendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Array of integer values to display inside rows per page dropdown.
   */
  rowsPerPageOptions?: number[];
  /**
   * Template of the current page report element.
   * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
   */
  currentPageReportTemplate?: string;
  /**
   * Text to display when there is no data.
   * @defaultValue No records found.
   */
  emptyMessage?: string;
  /**
   * Name of the field to sort data by default.
   */
  sortField?: string;
  /**
   * Order to sort the data by default.
   */
  sortOrder?: 1 | 0 | -1 | null;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @defaultValue false
   */
  lazy?: boolean;
  /**
   * Display loading icon of the button.
   */
  loading?: boolean;
  /**
   * Name of the loading icon or JSX.Element for loading icon.
   */
  loadingIcon?: IconType<DataViewProps>;
  /**
   * Whether the grid structure in the container has gutter. Default value is false.
   * @defaultValue false
   */
  gutter?: boolean;
  /**
   * Callback to invoke on pagination.
   * @param {DataViewPageEvent} event - Custom page event.
   */
  onPage?(event: DataViewPageEvent): void;
  /**
   * Function that gets the option along with the layout mode and returns the content.
   * @param {*} item - Current item.
   * @param {'list' | 'grid' | (string & Record<string, unknown>)} layout - Current layout.
   */
  itemTemplate?(
    item: any,
    layout: "list" | "grid" | (string & Record<string, unknown>)
  ): React.ReactNode;
  /**
   * Function that gets the options along with the layout mode and returns the content.
   * @param {*} item - Current item.
   * @param {'list' | 'grid' | (string & Record<string, unknown>)} layout - Current layout.
   */
  listTemplate?(
    items: any[],
    layout: "list" | "grid" | (string & Record<string, unknown>)
  ): React.ReactNode[];
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {DataViewPassThroughOptions}
   */
  pt?: DataViewPassThroughOptions;
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
 * **PrimeReact - DataViewLayoutOptions**
 *
 * _DataView displays data in grid or list layout with pagination and sorting features._
 *
 * [Live Demo](https://www.primereact.org/dataview/)
 * --- ---
 *
 * @group Component
 *
 */
export const DataView = (props: DataViewProps) => <PrimeDataView {...props} />;
