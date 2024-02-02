import type { Meta, StoryObj } from "@storybook/react";
import { DataView } from "./DataView";
import { LayoutDemo } from "./LayoutDemo";

const meta = {
  title: "Components/Data/DataView",
  component: DataView,
  tags: ["autodocs"],
} satisfies Meta<typeof DataView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    alwaysShowPaginator: true,
    layout: "list",
    first: 0,
    emptyMessage: "No records found.",
    paginator: false,
    paginatorPosition: "bottom",
    paginatorTemplate:
      "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
    pageLinkSize: 5,
    lazy: false,
    loading: false,
    gutter: false,
    unstyled: false,
  },
  render: LayoutDemo,
};
