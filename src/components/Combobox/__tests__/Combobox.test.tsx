import { renderWithTheme as render } from "../../../utils/testing"
import { Basic, WithAccessibleNameForList } from "../Combobox.stories"

describe(`Combobox`, () => {
  it(`allows to link the combobox list to an accessible label`, () => {
    const { getByRole } = render(Basic())

    expect(getByRole(`listbox`)).toHaveAttribute("aria-labelledby", "demo")
  })

  it(`allows to provide an explicit accessible name to the combobox list`, () => {
    const { getByRole } = render(WithAccessibleNameForList())

    expect(getByRole(`listbox`)).toHaveAttribute("aria-label", "Grocery list")
  })
})
