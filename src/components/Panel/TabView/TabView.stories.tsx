import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabView, TabViewProps } from "./TabView";
import { TabPanel } from "primereact/tabview";

const meta = {
  title: "Components/Panel/TabView",
  component: TabView,
  tags: ["autodocs"],
} satisfies Meta<typeof TabView>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const Basic: Story = {
  args: {
    activeIndex: 0,
    renderActiveOnly: true,
    scrollable: false,
    unstyled: false,
    children: Array(4)
      .fill(text)
      .map((text, index) => (
        <TabPanel
          key={index}
          header={"Header " + index + 1}
          leftIcon="pi pi-calendar mr-2"
        >
          <p className="m-0">{text}</p>
        </TabPanel>
      )),
  },
  render: (args: TabViewProps) => <TabView {...args} />,
};
