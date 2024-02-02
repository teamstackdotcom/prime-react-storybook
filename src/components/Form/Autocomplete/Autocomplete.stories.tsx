import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";
import { BasicDemo } from "./BasicDemo";
import GroupDemo from "./GroupDemo";
import { MultipleDemo } from "./MultipleDemo";
import { FloatLabelDemo } from "./FloatLabelDemo";

const meta = {
  title: "Components/Form/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    disabled: false,
    autoFocus: false,
    autoHighlight: false,
    dropdown: false,
    dropdownAutoFocus: true,
    forceSelection: false,
    multiple: false,
    readOnly: false,
    required: false,
    showEmptyMessage: false,
    appendTo: document.body,
    scrollHeight: "200px",
    dropdownAriaLabel: "Choose",
    dropdownMode: "blank",
    emptyMessage: "No results found.",
    minLength: 1,
    delay: 300,
    loadingIcon: null,
    unstyled: false,
  },
  render: BasicDemo,
};

export const Dropdown: Story = {
  args: {
    ...Basic.args,
    dropdown: true,
  },
  render: BasicDemo,
};

export const Group: Story = {
  args: {
    ...Basic.args,
    field: "label",
    optionGroupLabel: "label",
    optionGroupChildren: "items",
    placeholder: "Hint: type 'a'",
  },
  render: GroupDemo,
};

export const ForceSelection: Story = {
  args: {
    ...Basic.args,
    forceSelection: true,
  },
  render: BasicDemo,
};

export const Multiple: Story = {
  args: {
    ...Basic.args,
    field: "name",
    multiple: true,
    placeholder: "Hint: type 'ger' or 'jap'",
  },
  render: MultipleDemo,
};

export const FloatLabel: Story = {
  args: {
    ...Basic.args,
    inputId: "ac",
  },
  render: FloatLabelDemo,
};

export const Invalid: Story = {
  args: {
    ...Basic.args,
    className: "p-invalid",
  },
  render: BasicDemo,
};

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    placeholder: "Disabled",
  },
  render: BasicDemo,
};
