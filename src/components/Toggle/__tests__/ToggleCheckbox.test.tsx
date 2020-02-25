import { renderWithTheme as render } from "../../../utils/testing"
import { Basic } from "../ToggleCheckbox.stories"

describe(`ToggleCheckbox`, () => {
  it(`correctly links label to the checkbox`, () => {
    const { getByLabelText } = render(Basic())

    expect(getByLabelText(`Behaves like a checkbox`)).toHaveAttribute(
      `type`,
      `checkbox`
    )
  })
})
