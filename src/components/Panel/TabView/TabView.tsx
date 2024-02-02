import React from "react";
import {
  TabView as PrimeTabView,
  TabViewPassThroughOptions,
  TabViewTabChangeEvent,
  TabViewTabCloseEvent,
} from "primereact/tabview";
import { PassThroughOptions } from "primereact/passthrough";

/**
 * Defines valid properties in TabView component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface TabViewProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "ref"
  > {
  /**
   * Active index of the TabView.
   * @defaultValue 0
   */
  activeIndex?: number;
  /**
   * Used to get the child elements of the component.
   * @readonly
   */
  children?: React.ReactNode;
  /**
   * Style class of the panels container of the tabview.
   */
  panelContainerClassName?: string;
  /**
   * Inline style of the panels container of the tabview.
   */
  panelContainerStyle?: React.CSSProperties;
  /**
   * Whether to render the contents of the selected tab or all tabs.
   * @defaultValue true
   */
  renderActiveOnly?: boolean;
  /**
   * When enabled displays buttons at each side of the tab headers to scroll the tab list.
   * @defaultValue false
   */
  scrollable?: boolean;
  /**
   * Uses to pass attributes to DOM elements inside the component.
   * @type {TabViewPassThroughOptions}
   */
  pt?: TabViewPassThroughOptions;
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
  /**
   * Callback to invoke before an active tab is changed. Return false to prevent tab from changing.
   * @param {TabViewTabChangeEvent} event - Custom tab change event.
   */
  onBeforeTabChange?(event: TabViewTabChangeEvent): void;
  /**
   * Callback to invoke before an active tab is close. Return false to prevent tab from closing.
   * @param {TabViewTabCloseEvent} event - Custom tab close event.
   */
  onBeforeTabClose?(event: TabViewTabCloseEvent): void;
  /**
   * Callback to invoke when an active tab is changed.
   * @param {TabViewTabChangeEvent} event -  Custom tab change event.
   */
  onTabChange?(event: TabViewTabChangeEvent): void;
  /**
   * Callback to invoke when an active tab is closed.
   * @param {TabViewTabCloseEvent} event - Custom tab close event.
   */
  onTabClose?(event: TabViewTabCloseEvent): void;
}

/**
 * **PrimeReact - TabPanel**
 *
 * _TabView is a container component to group content with tabs._
 *
 * [Live Demo](https://www.primereact.org/tabview/)
 * --- ---
 *
 * @group Component
 */
export const TabView = (props: TabViewProps) => {
  return <PrimeTabView {...props} />;
};
