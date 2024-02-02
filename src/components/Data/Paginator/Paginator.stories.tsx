import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Paginator, PaginatorProps } from "./Paginator";
import { PaginatorPageChangeEvent } from "primereact/paginator";

const meta = {
  title: "Components/Data/Paginator",
  component: Paginator,
  tags: ["autodocs"],
} satisfies Meta<typeof Paginator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    totalRecords: 120,
    rowsPerPageOptions: [10, 20, 30],
    rows: 0,
    first: 0,
    pageLinkSize: 5,
    template:
      "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    currentPageReportTemplate: "({currentPage} of {totalPages})",
    dropdownAppendTo: document.body,
    unstyled: false,
  },
  render: (args: PaginatorProps) => {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const onPageChange = (event: PaginatorPageChangeEvent) => {
      setFirst(event.first);
      setRows(event.rows);
    };
    return (
      <Paginator
        {...args}
        first={first}
        rows={rows}
        onPageChange={onPageChange}
      />
    );
  },
};
