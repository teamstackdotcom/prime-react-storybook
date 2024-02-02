import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tree, TreeProps } from "./Tree";
import { TreeNode } from "primereact/treenode";
import { NodeService } from "../../../mocks/node";

const meta = {
  title: "Components/Data/Tree",
  component: Tree,
  tags: ["autodocs"],
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    disabled: false,
    selectionKeys: null,
    metaKeySelection: true,
    propagateSelectionUp: true,
    propagateSelectionDown: true,
    loading: false,
    showHeader: true,
    filter: false,
    filterMode: "lenient",
    unstyled: false,
    className: "w-full md:w-30rem",
  },
  render: (args: TreeProps) => {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    useEffect(() => {
      NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);
    return <Tree {...args} value={nodes} />;
  },
};
