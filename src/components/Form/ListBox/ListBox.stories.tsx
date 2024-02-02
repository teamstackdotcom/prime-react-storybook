import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ListBox } from "./ListBox";
import { ListBoxChangeEvent } from "primereact/listbox";

const meta = {
  title: "Components/Form/ListBox",
  component: ListBox,
  tags: ["autodocs"],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

interface City {
  name: string;
  code: string;
}

export const Basic: Story = {
  args: {
    filter: false,
    filterBy: "label",
    metaKeySelection: true,
    multiple: false,
    unstyled: false,
    options: [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
    ],
    optionLabel: "name",
    className: "w-full md:w-14rem",
  },
  render: (args) => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    return (
      <ListBox
        {...args}
        value={selectedCity}
        onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)}
      />
    );
  },
};
