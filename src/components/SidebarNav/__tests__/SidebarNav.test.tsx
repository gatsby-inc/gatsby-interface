// @ts-nocheck
import * as React from "react"
import { fireEvent } from "@testing-library/react"
import { renderWithTheme as render } from "../../../utils/testing"
import { Basic } from "../SidebarNav.stories"

describe(`SidebarNav`, () => {
  it(`correctly labels navigation`, () => {
    const { getByLabelText } = render(<Basic {...Basic.args} />)

    expect(getByLabelText(`sidebar navigation`)).toHaveProperty(
      "tagName",
      "NAV"
    )
  })

  it(`supports custom label for navigation`, () => {
    const { getByLabelText } = render(
      <Basic {...Basic.args} aria-label="custom label" />
    )

    expect(getByLabelText(`custom label`)).toHaveProperty("tagName", "NAV")
  })

  it(`applies correct aria-current values to "General" links when clicking "General"`, () => {
    ;(global as any).___navigate = jest.fn()
    const { getByText } = render(<Basic {...Basic.args} />)

    fireEvent.click(getByText("General") as HTMLElement)
    expect(getByText("Integrations")).not.toHaveAttribute(
      "aria-current",
      "page"
    )
    expect(getByText("General")).toHaveAttribute("aria-current", "page")
    expect(getByText("Site Details")).toHaveAttribute(
      "aria-current",
      "location"
    )
  })

  it(`applies correct aria-current values to "Environment Variables" link when clicking "Environment Variables"`, () => {
    ;(global as any).___navigate = jest.fn()
    const { getByText } = render(<Basic {...Basic.args} />)

    fireEvent.click(getByText("General") as HTMLElement)
    fireEvent.click(getByText("Environment Variables") as HTMLElement)
    expect(getByText("General")).toHaveAttribute("aria-current", "page")
    expect(getByText("Site Details")).not.toHaveAttribute(
      "aria-current",
      "location"
    )
    expect(getByText("Environment Variables")).toHaveAttribute(
      "aria-current",
      "location"
    )
  })
})
