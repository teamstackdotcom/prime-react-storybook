import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Form/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    appendTo: document.body,
    autoFocus: false,
    disabled: false,
    editable: false,
    emptyFilterMessage: "No available options",
    emptyMessage: "No results found",
    filter: false,
    filterBy: "label",
    filterInputAutoFocus: true,
    maxLength: undefined,
    required: false,
    resetFilterOnHide: false,
    scrollHeight: "200px",
    showClear: false,
    showFilterClear: false,
    showOnFocus: false,
    unstyled: false,
    optionLabel: "name",
    options: [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ],
    placeholder: "Select a City",
    className: "w-full md:w-14rem",
  },
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState(null);
    return (
      <Dropdown
        {...args}
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
      />
    );
  },
};
