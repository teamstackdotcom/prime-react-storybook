import type { Meta, StoryObj } from "@storybook/react";
import { BreadCrumb } from "./BreadCrumb";
import { MenuItem } from "primereact/menuitem";

const meta = {
  title: "Components/Menu/BreadCrumb",
  component: BreadCrumb,
  tags: ["autodocs"],
} satisfies Meta<typeof BreadCrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const model: MenuItem[] = [
  { label: "Electronics" },
  { label: "Computer" },
  { label: "Accessories" },
  { label: "Keyboard" },
  { label: "Wireless" },
];
const home: MenuItem = { icon: "pi pi-home", url: "https://primereact.org" };

export const Basic: Story = {
  args: {
    unstyled: false,
    model,
    home,
  },
};
