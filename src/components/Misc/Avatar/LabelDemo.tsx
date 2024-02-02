import React from "react";
import { Badge } from "primereact/badge";
import { Avatar, AvatarProps } from "./Avatar";

export const LabelDemo = (args: AvatarProps) => (
  <div className="flex flex-wrap gap-5">
    <div className="flex-auto">
      <h5>Label</h5>
      <Avatar {...args} label="P" className="mr-2" size="xlarge" />
      <Avatar
        {...args}
        label="V"
        className="mr-2"
        size="large"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
      />
      <Avatar
        {...args}
        label="U"
        style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
      />
    </div>

    <div className="flex-auto">
      <h5>Circle</h5>
      <Avatar
        {...args}
        label="P"
        className="mr-2"
        size="xlarge"
        shape="circle"
      />
      <Avatar
        {...args}
        label="V"
        className="mr-2"
        size="large"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
      <Avatar
        {...args}
        label="U"
        style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
        shape="circle"
      />
    </div>

    <div className="flex-auto">
      <h5>Badge</h5>
      <Avatar {...args} label="U" size="xlarge" className="p-overlay-badge">
        <Badge value="4" />
      </Avatar>
    </div>
  </div>
);
