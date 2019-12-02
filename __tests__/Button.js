import React from "react"
import { render } from "@testing-library/react"

import { PrimaryButton } from "../src/components/Button"

describe(`<PrimaryButton>`, () => {
  test(`renders unchanged`, async () => {
    const { container } = render(<PrimaryButton>Click me!</PrimaryButton>)

    expect(container).toMatchSnapshot()
  })
})
