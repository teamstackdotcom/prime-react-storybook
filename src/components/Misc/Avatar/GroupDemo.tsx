import React from "react";
import { AvatarGroup } from "primereact/avatargroup";
import { Avatar, AvatarProps } from "./Avatar";

export const GroupDemo = (args: AvatarProps) => (
  <div className="card flex justify-content-center">
    <AvatarGroup>
      <Avatar
        {...args}
        image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
      />
      <Avatar
        {...args}
        image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"
      />
      <Avatar
        {...args}
        image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
      />
      <Avatar
        {...args}
        image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png"
      />
      <Avatar
        {...args}
        image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png"
      />
      <Avatar {...args} label="+2" />
    </AvatarGroup>
  </div>
);
