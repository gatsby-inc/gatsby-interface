import * as React from "react"
import { fireEvent, act } from "@testing-library/react"
import { ToastProvider, ToastConsumer, useShowSuccessToast } from "../"
import { Toast } from "../Toast"
import { renderWithTheme } from "../../../utils/testing"

const render = renderWithTheme

describe(`Toast`, () => {
  const baseProps = {
    message: `Lorem ipsum`,
    onClose: () => {
      // do nothing.
    },
    closeButtonLabel: "close",
    tone: `SUCCESS`,
    id: 0,
  }

  it(`displays the toast message`, async () => {
    const { queryByText } = render(<Toast {...baseProps} />)

    expect(queryByText(`Lorem ipsum`)).toBeTruthy()
  })

  it(`has accessible label for the close button`, async () => {
    const { container } = render(<Toast {...baseProps} />)

    expect(container.querySelector(`button`)).toHaveAttribute(
      `aria-label`,
      `close`
    )
  })

  it(`calls onRemove callback when clicking the close button`, async () => {
    const removeFn = jest.fn()
    const { getByLabelText } = render(
      <Toast {...baseProps} onClose={removeFn} />
    )

    fireEvent.click(getByLabelText(`close`))

    expect(removeFn).toHaveBeenCalled()
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
          <button onClick={() => showToast(`Lorem ipsum`, toastOptions)}>
            Show toast
          </button>
        )}
      </ToastConsumer>
    )
  }

  it(`allows to specify custom label for the toast close button`, () => {
    const { getByText, getByTestId } = render(
      <ToastProvider closeButtonLabel="Zamknąć">
        <TestComponent toastOptions={{ timeout: 0 }} />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(getByTestId(`toast`).querySelector(`button`)).toHaveAttribute(
      `aria-label`,
      `Zamknąć`
    )
  })

  it(`removes a toast on timeout`, () => {
    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent toastOptions={{ timeout: 500 }} />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()

    setTimeout(() => expect(queryByTestId(`toast`)).toBeFalsy(), 500)
  })

  it(`persists a toast if the provided timeout is 0`, () => {
    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent toastOptions={{ timeout: 0 }} />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()

    setTimeout(() => expect(queryByTestId(`toast`)).toBeTruthy(), 600)
  })
})

describe(`useShowSuccessToast hook`, () => {
  it(`returns a method to show success toast`, () => {
    function TestComponent() {
      const showSuccessToast = useShowSuccessToast()

      return (
        <button onClick={() => showSuccessToast(`Lorem ipsum`)}>
          Show toast
        </button>
      )
    }

    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()
  })
})
