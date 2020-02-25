import { fireEvent } from "@testing-library/react"
import { renderWithTheme as render } from "../../../utils/testing"
import { Basic } from "../ToggleSwitch.stories"

describe(`ToggleSwitch`, () => {
  it(`correctly links labels to radio buttons`, () => {
    const { getByLabelText } = render(Basic())

    expect(getByLabelText(`Monthly`)).toHaveAttribute(`type`, `radio`)
    expect(getByLabelText(`Yearly`)).toHaveAttribute(`type`, `radio`)
  })

  it(`defaults to "off"`, () => {
    const { getByLabelText } = render(Basic())

    expect(getByLabelText(`Monthly`)).not.toBeChecked()
    expect(getByLabelText(`Yearly`)).toBeChecked()
  })

  it(`clicking on "off" label switches the choice`, () => {
    const { getByText, getByLabelText } = render(Basic())

    fireEvent.click(getByText(`Yearly`) as HTMLLabelElement)
    expect(getByLabelText(`Monthly`)).toBeChecked()
    expect(getByLabelText(`Yearly`)).not.toBeChecked()

    fireEvent.click(getByText(`Yearly`) as HTMLLabelElement)
    expect(getByLabelText(`Monthly`)).not.toBeChecked()
    expect(getByLabelText(`Yearly`)).toBeChecked()
  })

  it(`clicking on "on" label switches the choice`, () => {
    const { getByText, getByLabelText } = render(Basic())

    fireEvent.click(getByText(`Monthly`) as HTMLLabelElement)
    expect(getByLabelText(`Monthly`)).toBeChecked()
    expect(getByLabelText(`Yearly`)).not.toBeChecked()

    fireEvent.click(getByText(`Monthly`) as HTMLLabelElement)
    expect(getByLabelText(`Monthly`)).not.toBeChecked()
    expect(getByLabelText(`Yearly`)).toBeChecked()
  })

  it(`clicking on the toggle gutter switches the choice`, () => {
    const { container, getByLabelText } = render(Basic())

    fireEvent.click(container.querySelector(`span`) as HTMLSpanElement)
    expect(getByLabelText(`Monthly`)).toBeChecked()
    expect(getByLabelText(`Yearly`)).not.toBeChecked()

    fireEvent.click(container.querySelector(`span`) as HTMLSpanElement)
    expect(getByLabelText(`Monthly`)).not.toBeChecked()
    expect(getByLabelText(`Yearly`)).toBeChecked()
  })
})
