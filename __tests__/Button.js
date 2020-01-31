import React from "react"
import { renderWithTheme } from "../src/utils/testing"

import { PrimaryButton } from "../src/components/Button"

const render = renderWithTheme

describe(`<PrimaryButton>`, () => {
  test(`renders unchanged`, async () => {
    const { container } = render(<PrimaryButton>Click me!</PrimaryButton>)

    expect(container).toMatchSnapshot()
  })
})
