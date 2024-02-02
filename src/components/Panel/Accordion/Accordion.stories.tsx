import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionProps } from "./Accordion";
import { AccordionTab } from "primereact/accordion";

const tabs = [
  {
    header: "Title I",
    children: <p className="m-0">Content 1</p>,
    disabled: false,
  },
  {
    header: "Title II",
    children: <p className="m-0">Content 2 </p>,
    disabled: false,
  },
  {
    header: "Title III",
    children: <p className="m-0">Content 3 </p>,
    disabled: true,
  },
];

const meta = {
  title: "Components/Panel/Accordion",
  component: Accordion,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    activeIndex: 0,
    multiple: false,
    children: tabs.map((tab, i) => {
      return (
        <AccordionTab
          key={tab.header}
          header={tab.header}
          disabled={tab.disabled}
        >
          {tab.children}
        </AccordionTab>
      );
    }),
  },
  render: (args: AccordionProps) => (
    <Accordion {...args}>{args.children}</Accordion>
  ),
};
