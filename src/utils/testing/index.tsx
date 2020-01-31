import React from "react"
import { ThemeProvider } from "../../components/ThemeProvider"
import { render, RenderOptions } from "@testing-library/react"

export function renderWithTheme(
  ui: React.ReactElement<any>,
  options?: Omit<RenderOptions, "queries">
): ReturnType<typeof render> {
  return render(<ThemeProvider>{ui}</ThemeProvider>, options)
}
