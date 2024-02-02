import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Steps, StepsProps } from "./Steps";
import { MenuItem } from "primereact/menuitem";

const meta = {
  title: "Components/Menu/Steps",
  component: Steps,
  tags: ["autodocs"],
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Advanced: Story = {
  args: {
    model: [],
    activeIndex: 0,
    readOnly: false,
    unstyled: false,
    className: "m-2 pt-4",
  },
  render: (args: StepsProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const itemRenderer = (item: MenuItem, index: number) => {
      const isActive = activeIndex === index;
      const backgroundColor = isActive
        ? "var(--primary-color)"
        : "var(--surface-b)";
      const textColor = isActive
        ? "var(--surface-b)"
        : "var(--text-color-secondary)";
      return (
        <>
          <span
            className="inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer"
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              marginTop: "-25px",
            }}
            onClick={() => setActiveIndex(index)}
          >
            <i className={`${item.icon} text-xl`} />
          </span>
          <span
            className="p-steps-title"
            style={{ position: "absolute", bottom: "-26px" }}
          >
            {item.label}
          </span>
        </>
      );
    };

    const items: MenuItem[] = [
      {
        label: "Personal",
        icon: "pi pi-user",
        template: (item) => itemRenderer(item, 0),
      },
      {
        label: "Booking",
        icon: "pi pi-calendar",
        template: (item) => itemRenderer(item, 1),
      },
      {
        label: "Confirmation",
        icon: "pi pi-check",
        template: (item) => itemRenderer(item, 2),
      },
    ];
    return (
      <div style={{ minWidth: "500px" }}>
        <Steps {...args} model={items} activeIndex={activeIndex} />
      </div>
    );
  },
};
