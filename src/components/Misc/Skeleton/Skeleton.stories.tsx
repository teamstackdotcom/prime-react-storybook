import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, SkeletonProps } from "./Skeleton";
import { DataTable as PrimeDataTable } from "../../Data/DataTable/DataTable";
import { Column } from "primereact/column";

const meta = {
  title: "Components/Misc/Skeleton",
  parameters: {
    layout: "fullscreen",
  },
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Shapes: Story = {
  args: {
    shape: "rectangle",
    width: "100%",
    height: "1rem",
    animation: "wave",
    unstyled: false,
  },
  render: (args: SkeletonProps) => (
    <div className="card">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6 p-3">
          <h5>Rectangle</h5>
          <Skeleton {...args} className="mb-2"></Skeleton>
          <Skeleton {...args} width="10rem" className="mb-2"></Skeleton>
          <Skeleton {...args} width="5rem" className="mb-2"></Skeleton>
          <Skeleton {...args} height="2rem" className="mb-2"></Skeleton>
          <Skeleton {...args} width="10rem" height="4rem"></Skeleton>
        </div>
        <div className="w-full md:w-6 p-3">
          <h5>Rounded</h5>
          <Skeleton {...args} className="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton
            {...args}
            width="10rem"
            className="mb-2"
            borderRadius="16px"
          ></Skeleton>
          <Skeleton
            {...args}
            width="5rem"
            borderRadius="16px"
            className="mb-2"
          ></Skeleton>
          <Skeleton
            {...args}
            height="2rem"
            className="mb-2"
            borderRadius="16px"
          ></Skeleton>
          <Skeleton
            {...args}
            width="10rem"
            height="4rem"
            borderRadius="16px"
          ></Skeleton>
        </div>
        <div className="w-full md:w-6 p-3">
          <h5>Square</h5>
          <div className="flex align-items-end">
            <Skeleton {...args} size="2rem" className="mr-2"></Skeleton>
            <Skeleton {...args} size="3rem" className="mr-2"></Skeleton>
            <Skeleton {...args} size="4rem" className="mr-2"></Skeleton>
            <Skeleton {...args} size="5rem"></Skeleton>
          </div>
        </div>
        <div className="w-full md:w-6 p-3">
          <h5>Circle</h5>
          <div className="flex align-items-end">
            <Skeleton
              {...args}
              shape="circle"
              size="2rem"
              className="mr-2"
            ></Skeleton>
            <Skeleton
              {...args}
              shape="circle"
              size="3rem"
              className="mr-2"
            ></Skeleton>
            <Skeleton
              {...args}
              shape="circle"
              size="4rem"
              className="mr-2"
            ></Skeleton>
            <Skeleton {...args} shape="circle" size="5rem"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Card: Story = {
  args: Shapes.args,
  render: (args: SkeletonProps) => (
    <div className="card">
      <div className="border-round border-1 surface-border p-4 surface-card">
        <div className="flex mb-3">
          <Skeleton
            {...args}
            shape="circle"
            size="4rem"
            className="mr-2"
          ></Skeleton>
          <div>
            <Skeleton {...args} width="10rem" className="mb-2"></Skeleton>
            <Skeleton {...args} width="5rem" className="mb-2"></Skeleton>
            <Skeleton {...args} height=".5rem"></Skeleton>
          </div>
        </div>
        <Skeleton {...args} width="100%" height="150px"></Skeleton>
        <div className="flex justify-content-between mt-3">
          <Skeleton {...args} width="4rem" height="2rem"></Skeleton>
          <Skeleton {...args} width="4rem" height="2rem"></Skeleton>
        </div>
      </div>
    </div>
  ),
};

export const DataTable: Story = {
  args: Shapes.args,
  render: (args: SkeletonProps) => {
    const items: number[] = Array.from({ length: 5 }, (v, i) => i);
    return (
      <div className="card">
        <PrimeDataTable value={items} className="p-datatable-striped">
          <Column
            field="code"
            header="Code"
            style={{ width: "25%" }}
            body={<Skeleton {...args} />}
          ></Column>
          <Column
            field="name"
            header="Name"
            style={{ width: "25%" }}
            body={<Skeleton {...args} />}
          ></Column>
          <Column
            field="category"
            header="Category"
            style={{ width: "25%" }}
            body={<Skeleton {...args} />}
          ></Column>
          <Column
            field="quantity"
            header="Quantity"
            style={{ width: "25%" }}
            body={<Skeleton {...args} />}
          ></Column>
        </PrimeDataTable>
      </div>
    );
  },
};
