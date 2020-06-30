/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Toast } from "./Toast"
import { ToastContext } from "./ToastContext"
import { useToastActions } from "./hooks"
import { ThemeCss } from "../../theme"

export const ToastConsumer = ToastContext.Consumer

const containerCss: ThemeCss = theme => ({
  display: `flex`,
  flexDirection: `column-reverse`,
  alignItems: `center`,
  bottom: 0,
  left: `50%`,
  position: `fixed`,
  transform: `translate(-50%, 0)`,
  zIndex: theme.zIndices.base,
})

export interface ToastProviderProps {
  closeButtonLabel?: string
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  closeButtonLabel = `Close`,
}) => {
  const { toasts, showToast, removeToast } = useToastActions()

  const contextValue = React.useMemo(() => {
    return {
      showToast,
    }
  }, [showToast])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      <div css={containerCss}>
        {toasts.map((toast, index) => (
          <Toast
            key={`toast-${index}`} // this is probably not the best, but we can't use symbol as key :(
            {...toast}
            onClose={() => removeToast(toast.id)}
            closeButtonLabel={closeButtonLabel || "close"}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
