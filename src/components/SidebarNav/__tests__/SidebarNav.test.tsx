import { fireEvent } from "@testing-library/react"
import { renderWithTheme as render } from "../../../utils/testing"
import { Basic, Sandbox } from "../SidebarNav.stories"

describe(`SidebarNav`, () => {
  it(`correctly labels navigation`, () => {
    const { getByLabelText } = render(Basic())

    expect(getByLabelText(`sidebar navigation`)).toHaveProperty(
      "tagName",
      "NAV"
    )
  })

  it(`supports custom label for navigation`, () => {
    const { getByLabelText } = render(Sandbox())

    expect(getByLabelText(`Sandbox navigation`)).toHaveProperty(
      "tagName",
      "NAV"
    )
  })

  it(`applies correct aria-current values to links`, () => {
    ;(global as any).___navigate = jest.fn()
    const { getByText } = render(Basic())

    fireEvent.click(getByText("Integrations") as HTMLElement)

    expect(getByText("Integrations")).toHaveAttribute("aria-current", "page")

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
