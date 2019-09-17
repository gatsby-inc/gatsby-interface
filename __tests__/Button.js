import React from "react"
import { render } from "react-testing-library"

import { PrimaryButton } from "../src"

describe(`<PrimaryButton>`, () => {
  test(`renders unchanged`, async () => {
    const { container } = render(
      <PrimaryButton>Click me!</PrimaryButton>
    )

    expect(container).toMatchSnapshot()
  })
})
