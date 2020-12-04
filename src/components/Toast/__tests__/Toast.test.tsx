import * as React from "react"
import {
  screen,
  waitFor,
  getByRole,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { axe } from "jest-axe"
import { ToastProvider, ToastConsumer, useShowSuccessToast } from "../"
import { Toast, ToastProps } from "../Toast"
import { renderWithTheme as render } from "../../../utils/testing"

describe(`Toast`, () => {
  const baseProps: ToastProps = {
    message: `Lorem ipsum`,
    onClose: () => {
      // do nothing.
    },
    closeButtonLabel: "close",
    tone: `SUCCESS`,
  }

  // This test MUST come before all other tests due to some shenanigans with multiple React trees rendered by ReachUI's Alert
  it(`calls onRemove callback when clicking the close button`, async () => {
    const removeFn = jest.fn()
    render(<Toast {...baseProps} onClose={removeFn} />)

    await waitFor(() => screen.getByRole(`status`))

    const uiToast = screen.getAllByTestId("toast")[0]
    const srToast = screen.getByRole(`status`)

    userEvent.click(getByRole(uiToast, `button`, { name: /close/i }))
    userEvent.click(getByRole(srToast, `button`, { name: /close/i }))

    expect(removeFn).toHaveBeenCalledTimes(2)
  })

  it(`displays the toast message`, async () => {
    render(<Toast {...baseProps} />)

    await waitFor(() => screen.getByRole(`status`))

    const uiToast = screen.getAllByTestId("toast")[0]
    const srToast = screen.getByRole(`status`)

    expect(uiToast).toHaveTextContent(`Lorem ipsum`)
    expect(srToast).toHaveTextContent(`Lorem ipsum`)
  })

  it(`has accessible label for the close button`, async () => {
    render(<Toast {...baseProps} />)

    await waitFor(() => screen.getByRole(`status`))

    const uiToast = screen.getAllByTestId("toast")[0]
    const srToast = screen.getByRole(`status`)

    expect(getByRole(uiToast, `button`, { name: /close/i })).toBeVisible()
    expect(getByRole(srToast, `button`, { name: /close/i })).toBeVisible()
  })

  it(`passes axe checks`, async () => {
    const { container } = render(<Toast {...baseProps} />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})

describe(`ToastProvider`, () => {
  it(`exposes toast tools via context`, () => {
    const renderFn = jest.fn()

    render(
      <ToastProvider>
        <ToastConsumer>{renderFn}</ToastConsumer>
      </ToastProvider>
    )

    expect(renderFn).toHaveBeenCalledWith(
      expect.objectContaining({
        showToast: expect.any(Function),
      })
    )
  })

  function TestComponent({ toastOptions = {} }) {
    return (
      <ToastConsumer>
        {({ showToast }) => (
          <button onClick={() => showToast(`Hello World`, toastOptions)}>
            Show toast
          </button>
        )}
      </ToastConsumer>
    )
  }

  it(`allows to specify custom label for the toast close button`, async () => {
    document.body.innerHTML = ""
    render(
      <ToastProvider closeButtonLabel="Zamknąć">
        <TestComponent toastOptions={{ timeout: 0 }} />
      </ToastProvider>
    )

    userEvent.click(screen.getByRole(`button`, { name: /Show toast/i }))

    const uiToast = screen.getAllByTestId("toast")[0]

    expect(getByRole(uiToast, `button`, { name: /Zamknąć/i })).toBeVisible()
  })

  it(`removes a toast on timeout`, async () => {
    render(
      <ToastProvider>
        <TestComponent toastOptions={{ timeout: 500 }} />
      </ToastProvider>
    )

    userEvent.click(screen.getByRole(`button`, { name: /Show toast/i }))

    expect(screen.getByTestId(`toast`)).toBeVisible()

    await waitForElementToBeRemoved(() => screen.getByTestId(`toast`))
  })

  it(`persists a toast if the provided timeout is 0`, () => {
    render(
      <ToastProvider>
        <TestComponent toastOptions={{ timeout: 0 }} />
      </ToastProvider>
    )

    userEvent.click(screen.getByRole(`button`, { name: /Show toast/i }))

    expect(screen.getByTestId(`toast`)).toBeVisible()

    setTimeout(() => expect(screen.getByTestId(`toast`)).toBeVisible, 600)
  })
})

describe(`useShowSuccessToast hook`, () => {
  it(`can be used to show success toast`, () => {
    function TestComponent() {
      const showSuccessToast = useShowSuccessToast()

      return (
        <button onClick={() => showSuccessToast(`Lorem ipsum`)}>
          Show toast
        </button>
      )
    }

    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    userEvent.click(screen.getByRole(`button`, { name: /Show toast/i }))

    expect(screen.getByTestId(`toast`)).toBeVisible()
  })
})
