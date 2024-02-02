import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BlockUI, BlockUIProps } from "./BlockUI";
import { Panel } from "primereact/panel";
import { Button } from "../../Button/Button/Button";

const meta = {
  title: "Components/Misc/BlockUI",
  component: BlockUI,
  tags: ["autodocs"],
} satisfies Meta<typeof BlockUI>;

export default meta;
type Story = StoryObj<typeof meta>;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const Template: Story = {
  args: {
    autoZIndex: true,
    baseZIndex: 0,
    blocked: false,
    fullScreen: false,
    unstyled: false,
    template: <i className="pi pi-lock" style={{ fontSize: "3rem" }}></i>,
  },
  render: (args: BlockUIProps) => {
    const [blocked, setBlocked] = useState<boolean>(false);
    const buttonText = blocked ? "Subscribe" : "Unsubscribe";
    return (
      <div className="card">
        <BlockUI {...args} blocked={blocked}>
          <Panel header="Prime React News">
            <p className="m-0">{text}</p>
          </Panel>
        </BlockUI>
        <div className="mt-3 flex flex-column align-items-center">
          <h3>Continue reading?</h3>
          <Button
            label={buttonText}
            onClick={() => setBlocked((oldState) => !oldState)}
          ></Button>
        </div>
      </div>
    );
  },
};
