import React from "react"
import { fireEvent } from "@testing-library/react"
import { CopyButton } from "../index"
import { renderWithTheme } from "../../../utils/testing"

const render = renderWithTheme

const clipboard = () => {
  let buffer: string | undefined = undefined

  return {
    writeText: async (text: string) =>
      new Promise(resolve => {
        buffer = text
        resolve()
      }),
    readText: async () => new Promise<string>(resolve => resolve(buffer)),
  }
}

let oldClipboard: Clipboard

beforeAll(() => {
  oldClipboard = window.navigator.clipboard

  // @ts-ignore
  window.navigator.clipboard = clipboard()
})

afterAll(() => {
  // @ts-ignore
  window.navigator.clipboard = oldClipboard
})

describe(`<CopyButton>`, () => {
  it(`renders unchanged`, async () => {
    const { container } = render(<CopyButton content="test" />)

    expect(container).toMatchSnapshot()
  })

  it(`allows to configure button label`, async () => {
    const { container } = render(
      <CopyButton
        content="lorem ipsum"
        getButtonLabel={copied => (copied ? `BarCopied` : `FooCopy`)}
      />
    )

    const button = container.querySelector(`button`) as HTMLButtonElement
    expect(button).toHaveTextContent(`FooCopy`)

    fireEvent.click(button)

    await window.navigator.clipboard.readText()

    expect(button).toHaveTextContent(`BarCopied`)
  })

  it(`allows to configure button title`, async () => {
    const { container } = render(
      <CopyButton
        content="lorem ipsum"
        getButtonTitle={copied => (copied ? `BarCopied` : `FooCopy`)}
      />
    )

    const button = container.querySelector(`button`) as HTMLButtonElement
    expect(button).toHaveAttribute(`title`, `FooCopy`)

    fireEvent.click(button)

    await window.navigator.clipboard.readText()

    expect(button).toHaveAttribute(`title`, `BarCopied`)
  })

  it(`copies the passed content to clipboard and updates button label`, async () => {
    const { container } = render(<CopyButton content="lorem ipsum" />)

    const button = container.querySelector(`button`) as HTMLButtonElement
    expect(button).toHaveTextContent(`Copy`)

    fireEvent.click(button)

    let copiedText = ``
    await window.navigator.clipboard
      .readText()
      .then((text: string) => (copiedText = text))

    expect(button).toHaveTextContent(`Copied`)
    expect(copiedText).toBe(`lorem ipsum`)
  })
})
