import type { Meta, StoryObj } from "@storybook/react";
import { AdvancedDemo } from "./AdvancedDemo";
import { DataTable } from "./DataTable";

const meta = {
  title: "Components/Data/DataTable",
  component: DataTable,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Advanced: Story = {
  args: {
    globalFilterFields: [
      "name",
      "country.name",
      "representative.name",
      "balance",
      "status",
    ],
    dataKey: "id",
    paginator: true,
    showGridlines: true,
    rows: 10,
    alwaysShowPaginator: true,
    breakpoint: "960px",
    currentPageReportTemplate: "({currentPage} of {totalPages})",
    csvSeparator: ",",
    defaultSortOrder: null,
    dragSelection: false,
    editMode: "cell",
    emptyMessage: "No results found",
    expandableRowGroups: false,
    filterDelay: 300,
    filterDisplay: "menu",
    globalFilterMatchMode: "contains",
    lazy: false,
    loading: false,
    pageLinkSize: 5,
    paginatorPosition: "bottom",
    paginatorTemplate:
      "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    removableSort: false,
    reorderableColumns: false,
    reorderableRows: false,
    resizableColumns: false,
    responsiveLayout: "scroll",
    rowHover: false,
    scrollable: false,
    selectAll: false,
    selectOnEdit: true,
    selectionAutoFocus: true,
    showHeaders: true,
    size: "normal",
    sortMode: "single",
    stripedRows: false,
    unstyled: false,
  },
  render: AdvancedDemo,
};
