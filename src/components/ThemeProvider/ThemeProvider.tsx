import React from "react"
import { ThemeProvider as ThemeUiProvider, useThemeUI } from "theme-ui"
import { getTheme, Theme } from "../../theme"

export type ThemeProviderProps = {
  children?: React.ReactNode
  theme?: Partial<Theme>
}

const defaultCustomTheme = {}

export default function ThemeProvider({
  children,
  theme: customTheme = defaultCustomTheme,
}: ThemeProviderProps) {
  const theme = React.useMemo(
    () => ({
      ...getTheme(),
      ...customTheme,
    }),
    [customTheme]
  )

  return <ThemeUiProvider<Theme> theme={theme}>{children}</ThemeUiProvider>
}

// To distinguish from Theme UI's ThemeProvider
ThemeProvider.displayName = "GatsbyInterfaceThemeProvider"

export function useTheme() {
  // @ts-ignore
  return useThemeUI().theme as Theme
}
