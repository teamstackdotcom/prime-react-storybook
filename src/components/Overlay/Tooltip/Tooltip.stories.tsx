import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { Knob } from "primereact/knob";
import { Button } from "primereact/button";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProps } from "./Tooltip";

const meta = {
  title: "Components/Overlay/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    appendTo: document.body,
    autoHide: true,
    autoZIndex: true,
    baseZIndex: 0,
    disabled: false,
    event: "hover",
    hideDelay: 0,
    hideEvent: "mouseleave",
    mouseTrack: false,
    mouseTrackLeft: 5,
    mouseTrackTop: 5,
    position: "top",
    showDelay: 0,
    showEvent: "mouseenter",
    showOnDisabled: false,
    updateDelay: 0,
  },
  render: (args: TooltipProps) => {
    const [buttonTooltip, setButtonTooltip] =
      useState<string>("Click to proceed");
    const [knobValue, setKnobValue] = useState<number>(60);
    const [sliderValue, setSliderValue] = useState<number>(20);

    return (
      <div className="card flex flex-wrap gap-5">
        <Button
          type="button"
          label="Save"
          icon="pi pi-check"
          tooltipOptions={args}
          tooltip={buttonTooltip}
          onClick={() => setButtonTooltip("Completed")}
        />

        <Tooltip {...args} target=".knob" content={`${knobValue}%`} />
        <Knob
          className="knob"
          value={knobValue}
          onChange={(e) => setKnobValue(e.value)}
          showValue={false}
        />

        <Tooltip
          {...args}
          target=".slider>.p-slider-handle"
          content={`${sliderValue}%`}
        />
        <Slider
          className="slider"
          value={sliderValue}
          onChange={(e) => setSliderValue(e.value as number)}
          style={{ width: "14rem" }}
        />
      </div>
    );
  },
};
