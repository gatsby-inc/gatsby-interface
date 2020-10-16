/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import {
  Tabs as ReachTabs,
  TabsProps as ReachTabsProps,
  TabList as ReachTabList,
  TabListProps as ReachTabListProps,
  Tab as ReachTab,
  TabProps as ReachTabProps,
  TabPanels as ReachTabPanels,
  TabPanelsProps as ReachTabPanelsProps,
  TabPanel as ReachTabPanel,
  TabPanelProps as ReachTabPanelProps,
  useTabsContext as useReachTabsContext,
  TabsOrientation,
} from "@reach/tabs"
import { DisableReachStyleCheck } from "../../utils/helpers/DisableReachStyleCheck"
import { tabsStyles } from "./Tabs.styles"

export { TabsKeyboardActivation } from "@reach/tabs"

// We only support horizontal orientation, so we're omitting this prop
export type TabsProps = Omit<ReachTabsProps, "orientation">

export function Tabs(props: TabsProps) {
  return (
    <React.Fragment>
      <ReachTabs
        css={tabsStyles.tabs}
        {...props}
        orientation={TabsOrientation.Horizontal}
      />
      <DisableReachStyleCheck reachComponent="tabs" />
    </React.Fragment>
  )
}

export type TabListProps = ReachTabListProps

export function TabList(props: TabListProps) {
  return <ReachTabList css={tabsStyles.tabList} {...props} />
}

export type TabPanelsProps = ReachTabPanelsProps

export function TabPanels(props: TabPanelsProps) {
  return <ReachTabPanels {...props} />
}

export type TabPanelProps = ReachTabPanelProps

export function TabPanel(props: TabPanelProps) {
  return <ReachTabPanel {...props} />
}

export type TabProps = ReachTabProps

export function Tab(props: TabProps) {
  return (
    <ReachTab
      css={theme => [
        tabsStyles.tab(theme),
        tabsStyles.tabButton(theme),
        {
          "&[data-selected]": tabsStyles.tabButtonSelected(theme),
        },
      ]}
      {...props}
    />
  )
}

export function useTabsContext() {
  return useReachTabsContext()
}
