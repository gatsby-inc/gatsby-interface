/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Toast from "./Toast"
import { zIndices } from "../../utils/presets"

export const ToastContext = React.createContext()
export const ToastConsumer = ToastContext.Consumer

const containerCss = css`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  left: 50%;
  position: fixed;
  transform: translate(-50%, 0);
  width: 100%;
  z-index: ${zIndices.toasts};
`

const DEFAULT_TIMEOUT = 5000
const DEFAULT_TONE = `SUCCESS`

export function ToastProvider({ children, closeButtonLabel = `Close` }) {
  const [toasts, setToasts] = React.useState([])

  const timeoutsRef = React.useRef({})

  const removeToast = React.useCallback(toastId => {
    setToasts(prevToasts => prevToasts.filter(({ id }) => id !== toastId))
    clearTimeout(timeoutsRef.current[toastId])
    delete timeoutsRef.current[toastId]
  }, [])

  const showToast = React.useCallback(
    (message, { tone = DEFAULT_TONE, timeout = DEFAULT_TIMEOUT } = {}) => {
      const toastId = Math.random()
      setToasts(prevToasts => [...prevToasts, { id: toastId, message, tone }])

      if (timeout > 0) {
        timeoutsRef.current[toastId] = setTimeout(() => {
          removeToast(toastId)
        }, timeout)
      }
    },
    []
  )

  const contextValue = React.useMemo(() => {
    return {
      showToast,
    }
  }, [showToast])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div css={containerCss}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            {...toast}
            onRemove={removeToast}
            closeButtonLabel={closeButtonLabel}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
  closeButtonLabel: PropTypes.string,
}

export function useToastContext() {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error(
      `Toast hooks cannot be used outside the ToastProvider component`
    )
  }

  return context
}
