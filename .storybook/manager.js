import { addons } from "@storybook/addons"
import { storybookThemeLight } from "./theming"

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "right",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  theme: storybookThemeLight,
})
