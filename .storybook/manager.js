import { addons } from "@storybook/addons"
import { create, themes } from "@storybook/theming"
import { getTheme } from "../src"

const theme = getTheme()

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "right",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  selectedPanel: undefined,
  theme: create({
    ...themes.normal,
    base: `light`,
    fontBase: theme.fonts.body,
    fontCode: theme.fonts.monospace,
    colorSecondary: theme.colors.gatsby,
    brandTitle: `Gatsby Interface`,
    barTextColor: theme.colors.grey[70],
    barSelectedColor: theme.colors.purple[50],
  }),
})
