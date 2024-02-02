import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from "./Chart";

const meta = {
  title: "Components/Chart",
  component: Chart,
  tags: ["autodocs"],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    unstyled: false,
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 159, 64, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(153, 102, 255, 0.8)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
        {
          label: "Costs",
          data: [240, 25, 402, 820],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 159, 64, 0.8)",
            "rgba(75, 192, 192, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(153, 102, 255, 0.8)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  },
};

export const Pie: Story = {
  args: {
    ...Basic.args,
    type: "pie",
    className: "w-full md:w-30rem",
  },
};

export const Doughnut: Story = {
  args: {
    ...Basic.args,
    type: "doughnut",
    className: "w-full md:w-30rem",
  },
};

export const Line: Story = {
  args: {
    ...Basic.args,
    type: "line",
  },
};

export const PolarArea: Story = {
  args: {
    ...Basic.args,
    type: "polarArea",
    className: "w-full md:w-30rem",
  },
};

export const Radar: Story = {
  args: {
    ...Basic.args,
    type: "radar",
    className: "w-full md:w-30rem",
  },
};
