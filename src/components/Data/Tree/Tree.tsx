import React from "react";
import {
  Tree as PrimeTree,
  TreeCheckboxSelectionKeys,
  TreeDragDropEvent,
  TreeEventNodeEvent,
  TreeExpandedEvent,
  TreeExpandedKeysType,
  TreeFilterOptions,
  TreeFilterValueChangeEvent,
  TreeHeaderTemplateOptions,
  TreeMultipleSelectionKeys,
  TreeNodeClickEvent,
  TreeNodeDoubleClickEvent,
  TreeNodeTemplateOptions,
  TreePassThroughOptions,
  TreeSelectionEvent,
  TreeTogglerTemplateOptions,
} from "primereact/tree";
import { PassThroughOptions } from "primereact/passthrough";
import { TreeNode } from "primereact/treenode";
import { IconType } from "primereact/utils";

/**
 * Defines valid properties in TreeProps component.
 * @group Properties
 */
export interface TreeProps {
  /**
   * Unique identifier of the element.
   */
  id?: string;
  /**
   * An array of treenodes.
   */
  value?: TreeNode[];
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * Defines the selection mode, valid values "single", "multiple", and "checkbox".
   */
  selectionMode?: "single" | "multiple" | "checkbox";
  /**
   * A single or an array of keys to control the selection state.
   */
  selectionKeys?:
    | string
    | TreeMultipleSelectionKeys
    | TreeCheckboxSelectionKeys
    | null;
  /**
   * A single key to control the selection with the context menu.
   */
  contextMenuSelectionKey?: string;
  /**
   * An array of keys to represent the state of the tree expansion state in controlled mode.
   */
  expandedKeys?: TreeExpandedKeysType;
  /**
   * Inline style of the component.
   */
  style?: React.CSSProperties;
  /**
   * Style class of the component.
   */
  className?: string;
  /**
   * Inline style of the tree content.
   */
  contentStyle?: React.CSSProperties;
  /**
   * Style class of the tree content.
   */
  contentClassName?: string;
  /**
   * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @defaultValue true
   */
  metaKeySelection?: boolean;
  /**
   * Whether checkbox selections propagate to ancestor nodes.
   * @defaultValue true
   */
  propagateSelectionUp?: boolean;
  /**
   * 	Whether checkbox selections propagate to descendant nodes.
   * @defaultValue true
   */
  propagateSelectionDown?: boolean;
  /**
   * Whether to display loading indicator.
   * @defaultValue false
   */
  loading?: boolean;
  /**
   * Icon to display when tree is loading.
   */
  loadingIcon?: IconType<TreeProps>;
  /**
   * Icon to display in the checkbox.
   */
  checkboxIcon?: IconType<TreeProps>;
  /**
   * Icon of an expanded tab.
   */
  collapseIcon?: IconType<TreeProps>;
  /**
   * Icon of an collapsed tab.
   */
  expandIcon?: IconType<TreeProps>;
  /**
   * Unique key to enable dragdrop functionality.
   * @defaultValue false
   */
  dragdropScope?: string;
  /**
   * The template of header.
   */
  header?:
    | React.ReactNode
    | ((options: TreeHeaderTemplateOptions) => React.ReactNode);
  /**
   * The template of header.
   */
  footer?: React.ReactNode | ((props: TreeProps) => React.ReactNode);
  /**
   * Template of filter element.
   */
  filterTemplate?:
    | React.ReactNode
    | ((options: TreeFilterOptions) => React.ReactNode);
  /**
   * Whether to show the header or not.
   * @defaultValue true
   */
  showHeader?: boolean;
  /**
   * When specified, displays an input field to filter the items.
   * @defaultValue false
   */
  filter?: boolean;
  /**
   * Icon of the filter.
   */
  filterIcon?: IconType<TreeProps> | string;
  /**
   * When filtering is enabled, the value of input field.
   */
  filterValue?: string;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @defaultValue label
   */
  filterBy?: string;
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   * @defaultValue lenient
   */
  filterMode?: "lenient" | "strict";
  /**
   * Placeholder text to show when filter input is empty.
   */
  filterPlaceholder?: string;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @defaultValue undefined
   */
  filterLocale?: string;
  /**
   * Defines a string value that labels an interactive element.
   */
  ariaLabel?: string;
  /**
   * Identifier of the underlying menu element.
   */
  ariaLabelledby?: string;
  /**
   * Template of toggler element.
   */
  togglerTemplate?:
    | React.ReactNode
    | ((
        node: TreeNode,
        options: TreeTogglerTemplateOptions
      ) => React.ReactNode);
  /**
   * Template of node element.
   * @defaultValue false
   */
  nodeTemplate?:
    | React.ReactNode
    | ((node: TreeNode, options: TreeNodeTemplateOptions) => React.ReactNode);
  /**
   * Callback to invoke when selection changes.
   * @param {TreeSelectionEvent} event - Custom select event.
   */
  onSelectionChange?(event: TreeSelectionEvent): void;
  /**
   * Callback to invoke when selection changes with a context menu.
   * @param {TreeSelectionEvent} event - Custom select event.
   */
  onContextMenuSelectionChange?(event: TreeSelectionEvent): void;
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeEventNodeEvent} event - Custom node event.
   */
  onSelect?(event: TreeEventNodeEvent): void;
  /**
   * Callback to invoke when a node is unselected.
   * @param {TreeEventNodeEvent} event - Custom node event.
   */
  onUnselect?(event: TreeEventNodeEvent): void;
  /**
   * Callback to invoke when a node is expanded.
   * @param {TreeEventNodeEvent} event - Custom node event.
   */
  onExpand?(event: TreeEventNodeEvent): void;
  /**
   * Callback to invoke when a node is collapsed.
   * @param {TreeEventNodeEvent} event - Custom node event.
   */
  onCollapse?(event: TreeEventNodeEvent): void;
  /**
   * Callback to invoke when a node is toggled.
   * @param {TreeExpandedEvent} event - Custom expand event.
   */
  onToggle?(event: TreeExpandedEvent): void;
  /**
   * Callback to invoke when a node is selected.
   * @param {TreeDragDropEvent} event - Custom dragdrop event.
   */
  onDragDrop?(event: TreeDragDropEvent): void;
  /**
   * Callback to invoke when a node is selected with a context menu.
   * @param {TreeEventNodeEvent} event - Custom node event.
   */
  onContextMenu?(event: TreeEventNodeEvent): void;
  /**
   * Callback to invoke when filter value changes.
   * @param {TreeFilterValueChangeEvent} event - Custom filter value change event.
   */
  onFilterValueChange?(event: TreeFilterValueChangeEvent): void;
  /**
   * Callback to invoke when the node is clicked.
   * @param {TreeNodeClickEvent} event - Custom click event.
   */
  onNodeClick?(event: TreeNodeClickEvent): void;
  /**
   * Callback to invoke when the node is double-clicked.
   * @param {TreeNodeDoubleClickEvent} event - Custom doubleclick event.
   */
  onNodeDoubleClick?(event: TreeNodeDoubleClickEvent): void;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {TreePassThroughOptions}
   */
  pt?: TreePassThroughOptions;
  /**
   * Used to configure passthrough(pt) options of the component.
   * @type {PassThroughOptions}
   */
  ptOptions?: PassThroughOptions;
  /**
   * When enabled, it removes component related styles in the core.
   * @defaultValue false
   */
  unstyled?: boolean;
}

/**
 * **PrimeReact - Tree**
 *
 * _Tree is used to display hierarchical data._
 *
 * [Live Demo](https://www.primereact.org/tree/)
 * --- ---
 *
 * @group Component
 */
export const Tree = (props: TreeProps) => {
  return <PrimeTree {...props} />;
};
