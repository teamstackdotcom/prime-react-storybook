import React from "react";
import {
  DataTableCellClassNameOptions,
  DataTableCellClickEvent,
  DataTableColReorderEvent,
  DataTableColumnResizeEndEvent,
  DataTableColumnResizerClickEvent,
  DataTableDataSelectableEvent,
  DataTableEditingRows,
  DataTableExpandedRows,
  DataTableExportFunctionEvent,
  DataTableFilterMeta,
  DataTableFooterTemplateType,
  DataTableHeaderTemplateType,
  DataTablePassThroughOptions,
  DataTableProps,
  DataTableRowClassNameOptions,
  DataTableRowClickEvent,
  DataTableRowData,
  DataTableRowDataArray,
  DataTableRowEditCompleteEvent,
  DataTableRowEditEvent,
  DataTableRowEditSaveEvent,
  DataTableRowEditValidatorOptions,
  DataTableRowEvent,
  DataTableRowExpansionTemplate,
  DataTableRowGroupFooterTemplateType,
  DataTableRowGroupHeaderTemplateType,
  DataTableRowMouseEvent,
  DataTableRowPointerEvent,
  DataTableRowReorderEvent,
  DataTableRowToggleEvent,
  DataTableSelectAllChangeEvent,
  DataTableSelectEvent,
  DataTableShowRowReorderElementOptions,
  DataTableShowSelectionElementOptions,
  DataTableSortMeta,
  DataTableStateEvent,
  DataTableUnselectEvent,
  DataTableValueArray,
  DataTable as PrimeDataTable,
  SortOrder,
} from "primereact/datatable";
import { PaginatorTemplate } from "primereact/paginator";
import { PassThroughOptions } from "primereact/passthrough";
import { IconType } from "primereact/utils";
import { VirtualScrollerProps } from "primereact/virtualscroller";

/**
 * Defines valid properties in DataTable component. In addition to these, all properties of HTMLDivElement can be used in this component.
 */
export interface DataTableBaseProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "size" | "onContextMenu" | "ref" | "value"
  > {
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * An array of objects to display.
   */
  value?: Object[];
  /**
   * Whether to show it even there is only one page.
   * @defaultValue true
   */
  alwaysShowPaginator?: boolean;
  /**
   * The breakpoint to define the maximum width boundary when using stack responsive layout.
   * @defaultValue 960px
   */
  breakpoint?: string;
  /**
   * Icon to display in the checkbox.
   */
  checkIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * Style class of the component.
   */
  className?: string;
  /**
   * Icon of the row toggler to display the row as collapsed.
   */
  collapsedRowIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * Used to define the resize mode of the columns, valid values are "fit" and "expand".
   * @defaultValue fit
   */
  columnResizeMode?: "fit" | "expand";
  /**
   * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
   * @defaultValue deepEquals
   */
  compareSelectionBy?: "deepEquals" | "equals";
  /**
   * Selected row in single mode or an array of values in multiple mode.
   */
  contextMenuSelection?: object;
  /**
   * Character to use as the csv separator.
   * @defaultValue ,
   */
  csvSeparator?: string;
  /**
   * Template of the current page report element. Available placeholders are &#123;currentPage&#125;, &#123;totalPages&#125;, &#123;rows&#125;, &#123;first&#125;, &#123;last&#125; and &#123;totalRecords&#125;
   * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
   */
  currentPageReportTemplate?: string;
  /**
   * Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.
   * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
   */
  dataKey?: string;
  /**
   * Default sort order of an unsorted column.
   * @defaultValue (&#123;currentPage&#125; of &#123;totalPages&#125;)
   */
  defaultSortOrder?: 1 | 0 | -1 | null;
  /**
   * When enabled, a rectangle that can be dragged can be used to make a range selection.
   * @defaultValue false
   */
  dragSelection?: boolean;
  /**
   * Defines editing mode, options are "cell" and "row".
   * @defaultValue cell
   */
  editMode?: string;
  /**
   * A collection of rows to represent the current editing data in row edit mode.
   */
  editingRows?: DataTableValueArray | DataTableEditingRows;
  /**
   * Text to display when there is no data.
   * @defaultValue No results found
   */
  emptyMessage?:
    | string
    | React.ReactNode
    | ((frozen: boolean) => React.ReactNode);
  /**
   * Makes row groups toggleable, default is false.
   * @defaultValue false
   */
  expandableRowGroups?: boolean;
  /**
   * Icon of the row toggler to display the row as expanded.
   */
  expandedRowIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * A collection of rows or a map object row data keys that are expanded.
   */
  expandedRows?: DataTableValueArray | DataTableExpandedRows;
  /**
   * Name of the exported file.
   * @defaultValue download
   */
  exportFilename?: string;
  /**
   * Delay in milliseconds before filtering the data.
   * @defaultValue 300
   */
  filterDelay?: number;
  /**
   * Layout of the filter elements, valid values are "row" and "menu".
   * @defaultValue menu
   */
  filterDisplay?: "menu" | "row";
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @defaultValue undefined
   */
  filterLocale?: string;
  /**
   * Icon to display the current filtering status.
   */
  filterIcon?: IconType<PrimeDataTable<Object[]>>;
  /**
   * Icon to display when the filter can be cleared.
   */
  filterClearIcon?: IconType<PrimeDataTable<Object[]>>;
  /**
   * An array of FilterMetadata objects to provide external filters.
   */
  filters?: DataTableFilterMeta;
  /**
   * Index of the first row to be displayed.
   * @defaultValue 0
   */
  first?: number;
  /**
   * Custom footer content of the table.
   */
  footer?: DataTableFooterTemplateType<Object[]>;
  /**
   * ColumnGroup component for footer.
   */
  footerColumnGroup?: React.ReactNode;
  /**
   * Items of the frozen part in scrollable DataTable.
   */
  frozenValue?: DataTableRowDataArray<Object[]>;
  /**
   * Width of the frozen part in scrollable DataTable.
   */
  frozenWidth?: string;
  /**
   * Whether the row is frozen or not. Read-Only necessary for unstyled TypeScript definition.
   * @defaultValue false
   */
  readonly frozenRow?: boolean;
  /**
   * Value of the global filter to use in filtering.
   */
  globalFilter?: string | null;
  /**
   * Define fields to be filtered globally.
   */
  globalFilterFields?: string[];
  /**
   * Defines filterMatchMode; "startsWith", "contains", "endsWith", "equals", "notEquals", "in", "lt", "lte", "gt", "gte" and "custom".
   * @defaultValue contains
   */
  globalFilterMatchMode?:
    | "startsWith"
    | "contains"
    | "endsWith"
    | "equals"
    | "notEquals"
    | "in"
    | "lt"
    | "lte"
    | "gt"
    | "gte"
    | "custom";
  /**
   * Used for either be grouped by a separate grouping row or using rowspan.
   */
  groupRowsBy?: string;
  /**
   * Custom header content of the table.
   */
  header?: DataTableHeaderTemplateType<Object[]>;
  /**
   * ColumnGroup component for header.
   */
  headerColumnGroup?: React.ReactNode;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @defaultValue false
   */
  lazy?: boolean;
  /**
   * Displays a loader to indicate data load is in progress.
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * The icon to show while indicating data load is in progress.
   */
  loadingIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @defaultValue true
   */
  metaKeySelection?: boolean;
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode.
   */
  multiSortMeta?: DataTableSortMeta[] | null;
  /**
   * Number of page links to display.
   * @defaultValue 5
   */
  pageLinkSize?: number;
  /**
   * When specified as true, enables the pagination.
   * @defaultValue false
   */
  paginator?: boolean;
  /**
   * Style class of the paginator element.
   */
  paginatorClassName?: string;
  /**
   * DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The self value is used to render a component where it is located.
   * @defaultValue document.body
   */
  paginatorDropdownAppendTo?: "self" | HTMLElement | null | (() => HTMLElement);
  /**
   * Content for the left side of the paginator.
   */
  paginatorLeft?: React.ReactNode;
  /**
   * Position of the paginator, options are "top","bottom" or "both".
   * @defaultValue bottom
   */
  paginatorPosition?: "top" | "bottom" | "both";
  /**
   * Content for the right side of the paginator.
   */
  paginatorRight?: React.ReactNode;
  /**
   * Template of the paginator. For details, refer to the template section of the paginator documentation for further options.
   * @defaultValue FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown
   */
  paginatorTemplate?: PaginatorTemplate;
  /**
   * When enabled, columns can have an un-sorted state.
   * @defaultValue false
   */
  removableSort?: boolean;
  /**
   * When enabled, columns can be reordered using drag and drop.
   * @defaultValue false
   */
  reorderableColumns?: boolean;
  /**
   * When enabled, rows can be reordered using drag and drop.
   * @defaultValue false
   */
  reorderableRows?: boolean;
  /**
   * Defines the reorder indicator down icon.
   */
  reorderIndicatorDownIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * Defines the reorder indicator up icon.
   */
  reorderIndicatorUpIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * When enabled, columns can be resized using drag and drop.
   * @defaultValue false
   */
  resizableColumns?: boolean;
  /**
   * Defines the responsive mode, valid options are "stack" and "scroll".
   * @defaultValue scroll
   * @deprecated since version 9.2.0
   */
  responsiveLayout?: "scroll" | "stack";
  /**
   * Icon to display in the row editor cancel button.
   */
  rowEditorCancelIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * Icon to display in the row editor init button.
   */
  rowEditorInitIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * Icon to display in the row editor save button.
   */
  rowEditorSaveIcon?: IconType<DataTableProps<Object[]>>;
  /**
   * Function to provide the content of row group footer.
   */
  rowGroupFooterTemplate?: DataTableRowGroupFooterTemplateType<Object[]>;
  /**
   * Function to provide the content of row group header.
   */
  rowGroupHeaderTemplate?: DataTableRowGroupHeaderTemplateType<Object[]>;
  /**
   * Defines the row grouping mode, valid values are "subheader" and "rowgroup".
   */
  rowGroupMode?: string;
  /**
   * When enabled, background of the rows change on hover.
   */
  rowHover?: boolean;
  /**
   * Number of rows to display per page.
   */
  rows?: number;
  /**
   * Array of integer values to display inside rows per page dropdown.
   */
  rowsPerPageOptions?: number[];
  /**
   * Height of the scroll viewport.
   */
  scrollHeight?: string;
  /**
   * When specified, enables horizontal and/or vertical scrolling.
   * @defaultValue false
   */
  scrollable?: boolean;
  /**
   * When specified, selects all rows on page.
   * @defaultValue false
   */
  selectAll?: boolean;
  /**
   * Determines whether the cell editor will be opened when clicking to select any row on Selection and Cell Edit modes.
   * @defaultValue true
   */
  selectOnEdit?: boolean;
  /**
   * When a selectable row is clicked on RadioButton and Checkbox selection, it automatically decides whether to focus on elements such as checkbox or radio.
   * @defaultValue true
   */
  selectionAutoFocus?: boolean;
  /**
   * A field property from the row to add Select &#123;field&#125; and Unselect &#123;field&#125; ARIA labels to checkbox/radio buttons.
   */
  selectionAriaLabel?: string;
  /**
   * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
   * @defaultValue false
   */
  selectionPageOnly?: boolean;
  /**
   * Whether to show grid lines between cells.
   * @defaultValue false
   */
  showGridlines?: boolean;
  /**
   * Whether to show headers.
   * @defaultValue true
   */
  showHeaders?: boolean;
  /**
   * Whether to show the select all checkbox inside the datatable's header.
   */
  showSelectAll?: boolean;
  /**
   * Define to set alternative sizes. Valid values: "small", "normal" and "large".
   * @defaultValue normal
   */
  size?: "small" | "normal" | "large";
  /**
   * Property of a row data used for sorting, defaults to field.
   */
  sortField?: string;
  /**
   * Defines whether sorting works on single column or on multiple columns.
   * @defaultValue single
   */
  sortMode?: "single" | "multiple";
  /**
   * Icon to display the current sorting status.
   */
  sortIcon?: IconType<
    PrimeDataTable<Object[]>,
    { sortOrder?: SortOrder; sorted?: boolean }
  >;
  /**
   * Order to sort the data by default.
   */
  sortOrder?: SortOrder;
  /**
   * Unique identifier of a stateful table to use in state storage.
   */
  stateKey?: string;
  /**
   * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage, "local" for localStorage and "custom".
   * @defaultValue session
   */
  stateStorage?: "session" | "local" | "custom";
  /**
   * Whether to displays rows with alternating colors.
   * @defaultValue false
   */
  stripedRows?: boolean;
  /**
   * Inline style of the component.
   */
  style?: React.CSSProperties;
  /**
   * Index of the element in tabbing order.
   */
  tabIndex?: number;
  /**
   * Style class of the table element.
   */
  tableClassName?: string;
  /**
   * Inline style of the table element.
   */
  tableStyle?: React.CSSProperties;
  /**
   * Number of total records, defaults to length of value when not defined.
   */
  totalRecords?: number;
  /**
   * Whether to use the virtualScroller feature. The properties of VirtualScroller component can be used like an object in it.
   *
   * Note: Currently only vertical orientation mode is supported.
   */
  virtualScrollerOptions?: VirtualScrollerProps;
  /**
   * Function that takes the cell data and returns an object in &#123;'styleclass' : condition&#125; format to define a classname for a particular now.
   * @param {*} value - Value of the cell.
   * @param {DataTableCellClassNameOptions<Object[]>} options - ClassName options.
   * @return {object | string } A string or object to define a classname for a particular cell.
   */
  cellClassName?(
    value: any,
    options: DataTableCellClassNameOptions<Object[]>
  ): object | string;
  /**
   * A function to implement custom restoreState with stateStorage="custom". Need to return state object.
   * @return {object } Returns the state object.
   */
  customRestoreState?(): object;
  /**
   * A function to implement custom saveState with stateStorage="custom".
   * @param {object} state - The object to be stored.
   */
  customSaveState?(state: object): void;
  /**
   * A function to implement custom export. Need to return string value.
   * @param {DataTableExportFunctionEvent<Object[]>} event - Custom export function event.
   */
  exportFunction?(event: DataTableExportFunctionEvent<Object[]>): any;
  /**
   * Function that returns a boolean to decide whether the data should be selectable.
   * @param {DataTableDataSelectableEvent<Object[]>} event - Custom data selectable event.
   */
  isDataSelectable?(event: DataTableDataSelectableEvent): boolean | null;
  /**
   * Callback to invoke when all rows are selected using the header checkbox.
   * @param {DataTableSelectEvent} event - Custom select event.
   */
  onAllRowsSelect?(event: DataTableSelectEvent): void;
  /**
   * Callback to invoke when all rows are unselected using the header checkbox.
   * @param {DataTableUnselectEvent} event - Custom unselect event.
   */
  onAllRowsUnselect?(event: DataTableUnselectEvent): void;
  /**
   * Callback to invoke on cell click.
   * @param {DataTableCellClickEvent<Object[]>} event - Custom cell click event.
   */
  onCellClick?(event: DataTableCellClickEvent<Object[]>): void;
  /**
   * Callback to invoke on cell select.
   * @param {DataTableCellClickEvent<Object[]>} event - Custom select event.
   */
  onCellSelect?(event: DataTableCellClickEvent<Object[]>): void;
  /**
   * Callback to invoke on cell unselect.
   * @param {DataTableCellClickEvent<Object[]>} event - Custom unselect event.
   */
  onCellUnselect?(event: DataTableCellClickEvent<Object[]>): void;
  /**
   * Callback to invoke when a column is reordered.
   * @param {DataTableColReorderEvent} event - Custom column reorder event.
   */
  onColReorder?(event: DataTableColReorderEvent): void;
  /**
   * Callback to invoke when a column is resized.
   * @param {DataTableColumnResizeEndEvent} event - Custom column resize end event.
   */
  onColumnResizeEnd?(event: DataTableColumnResizeEndEvent): void;
  /**
   * Callback to invoke when a resizer element is clicked.
   * @param {DataTableColumnResizerClickEvent} event - Custom column resizer click event.
   */
  onColumnResizerClick?(event: DataTableColumnResizerClickEvent): void;
  /**
   * Callback to invoke when a resizer element is double clicked.
   * @param {DataTableColumnResizerClickEvent} event - Custom column resizer double click event.
   */
  onColumnResizerDoubleClick?(event: DataTableColumnResizerClickEvent): void;
  /**
   * Callback to invoke when a context menu is clicked.
   * @param {DataTableRowEvent} event - Custom row event.
   */
  onContextMenu?(event: DataTableRowEvent): void;
  /**
   * Callback to invoke on filtering.
   * @param {DataTableStateEvent} event - Custom state event.
   */
  onFilter?(event: DataTableStateEvent): void;
  /**
   * Callback to invoke on pagination.
   * @param {DataTableStateEvent} event - Custom state event.
   */
  onPage?(event: DataTableStateEvent): void;
  /**
   * Callback to invoke when a row is clicked.
   * @param {DataTableRowClickEvent} event - Custom row click event.
   */
  onRowClick?(event: DataTableRowClickEvent): void;
  /**
   * Callback to invoke when a row is collapsed.
   * @param {DataTableRowEvent} event - Custom row event.
   */
  onRowCollapse?(event: DataTableRowEvent): void;
  /**
   * Callback to invoke when a row is double clicked.
   * @param {DataTableRowClickEvent} event - Custom click event.
   */
  onRowDoubleClick?(event: DataTableRowClickEvent): void;
  /**
   * Callback to invoke when a row pointerDown event occurs.
   * @param {DataTableRowPointerEvent} event - Custom click event.
   */
  onRowPointerDown?(event: DataTableRowPointerEvent): void;
  /**
   * Callback to invoke when a row pointerUp event occurs.
   * @param {DataTableRowPointerEvent} event - Custom click event.
   */
  onRowPointerUp?(event: DataTableRowPointerEvent): void;
  /**
   * Callback to invoke when the cancel icon is clicked on row editing mode.
   * @param {DataTableRowEditEvent} event - Custom row edit event.
   */
  onRowEditCancel?(event: DataTableRowEditEvent): void;
  /**
   * Callback to invoke when the editing icon is clicked on row editing mode. Use in conjuction with editingRows value from the Datatable to programmatically control editing rows.
   * @param {DataTableRowEditEvent} event - Custom row edit event.
   */
  onRowEditChange?(event: DataTableRowEditEvent): void;
  /**
   * Callback to invoke when row edit is completed.
   * @param {DataTableRowEditCompleteEvent} event - Custom row edit complete event.
   */
  onRowEditComplete?(event: DataTableRowEditCompleteEvent): void;
  /**
   * Callback to invoke when the editing icon is clicked on row editing mode.
   * @param {DataTableRowEditEvent} event - Custom row edit event.
   */
  onRowEditInit?(event: DataTableRowEditEvent): void;
  /**
   * Callback to invoke when the save icon is clicked on row editing mode.
   * @param {DataTableRowEditSaveEvent} event - Custom row edit save event.
   */
  onRowEditSave?(event: DataTableRowEditSaveEvent): void;
  /**
   * Callback to invoke when a row is expanded.
   * @param {DataTableRowEvent} event - Custom row event.
   */
  onRowExpand?(event: DataTableRowEvent): void;
  /**
   * Callback to invoke when a row is hovered with mouse.
   * @param {DataTableRowMouseEvent} event - Custom row mouse event.
   */
  onRowMouseEnter?(event: DataTableRowMouseEvent): void;
  /**
   * Callback to invoke when a row is navigated away from with mouse.
   * @param {DataTableRowMouseEvent} event - Custom row mouse event.
   */
  onRowMouseLeave?(event: DataTableRowMouseEvent): void;
  /**
   * Callback to update the new order.
   * @param {DataTableRowReorderEvent<Object[]>} event - Custom row reorder event.
   */
  onRowReorder?(event: DataTableRowReorderEvent<Object[]>): void;
  /**
   * Callback to invoke when a row is selected.
   * @param {DataTableSelectEvent} event - Custom select event.
   */
  onRowSelect?(event: DataTableSelectEvent): void;
  /**
   * Callback to invoke when a row is toggled or collapsed.
   * @param {DataTableRowToggleEvent} event - Custom row toggle event.
   */
  onRowToggle?(event: DataTableRowToggleEvent): void;
  /**
   * Callback to invoke when a row is unselected.
   * @param {DataTableUnselectEvent} event - Custom unselect event.
   */
  onRowUnselect?(event: DataTableUnselectEvent): void;
  /**
   * Callback to invoke when select all value changes.
   * @param {DataTableSelectAllChangeEvent} event - Custom select all change event.
   */
  onSelectAllChange?(event: DataTableSelectAllChangeEvent): void;
  /**
   * Callback to invoke on sort.
   * @param {DataTableStateEvent} event - Custom state event.
   */
  onSort?(event: DataTableStateEvent): void;
  /**
   * Callback to invoke table state is restored.
   * @param {object} state - Table state.
   */
  onStateRestore?(state: object): void;
  /**
   * Callback to invoke table state is saved.
   * @param {object} state - Table state.
   */
  onStateSave?(state: object): void;
  /**
   * Callback to invoke after filtering and sorting to pass the rendered value.
   * @param {DataTableRowDataArray<Object[]>} value - Value displayed by the table.
   */
  onValueChange?(value: DataTableRowDataArray<Object[]>): void;
  /**
   * Function that takes the row data and returns an object in &#123;'styleclass' : condition&#125; format to define a classname for a particular now.
   * @param {DataTableRowData<Object[]>} data - Value displayed by the table.
   */
  rowClassName?(
    data: DataTableRowData<Object[]>,
    options: DataTableRowClassNameOptions<Object[]>
  ): object | string;
  /**
   * Callback to invoke to validate the editing row when the save icon is clicked on row editing mode.
   * @param {DataTableRowData<Object[]>} data - Editing row data.
   */
  rowEditValidator?(
    data: DataTableRowData<Object[]>,
    options: DataTableRowEditValidatorOptions<Object[]>
  ): boolean;
  /**
   * Function that receives the row data as the parameter and returns the expanded row content. You can override the rendering of the content by setting options.customRendering = true.
   * @param {DataTableRowData<Object[]>} data - Editing row data.
   * @param {DataTableRowExpansionTemplate} options - Options for the row expansion template.
   */
  rowExpansionTemplate?(
    data: DataTableRowData<Object[]>,
    options: DataTableRowExpansionTemplate
  ): React.ReactNode;
  /**
   * Function that returns a boolean by passing the row data to decide if the row reorder element should be displayed per row.
   * @param {DataTableRowData<Object[]>} data - Editing row data.
   * @param {DataTableShowRowReorderElementOptions} options - Options for the row reorder element.
   */
  showRowReorderElement?(
    data: DataTableRowData<Object[]>,
    options: DataTableShowRowReorderElementOptions<Object[]>
  ): boolean | null;
  /**
   * Function that returns a boolean by passing the row data to decide if the radio or checkbox should be displayed per row.
   * @param {DataTableRowData<Object[]>} data - Editing row data.
   * @param {DataTableShowSelectionElementOptions} options - Options for the row reorder element.
   */
  showSelectionElement?(
    data: DataTableRowData<Object[]>,
    options: DataTableShowSelectionElementOptions<Object[]>
  ): boolean | null;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {DataTablePassThroughOptions}
   */
  pt?: DataTablePassThroughOptions;
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
 * **PrimeReact - DataTable<Object[]**
 *
 * _DataTable displays data in tabular format._
 *
 * [Live Demo](https://www.primereact.org/datatable/)
 * --- ---
 *
 * @group Component
 */
export const DataTable = (props: DataTableBaseProps) => (
  <PrimeDataTable {...props} />
);
