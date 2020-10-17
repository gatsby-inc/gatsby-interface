/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { animated, useSpring } from "react-spring"
import { Toast, ToastProps } from "./Toast"
import { ToastContext } from "./ToastContext"
import { useToastActions } from "./hooks"
import { ThemeCss } from "../../theme"

export const ToastConsumer = ToastContext.Consumer

const containerCss: ThemeCss = theme => ({
  alignItems: "center",
  bottom: 0,
  display: "flex",
  flexDirection: "column-reverse",
  left: "50%",
  position: "fixed",
  transform: "translate(-50%, 0)",
  width: "100%",
  zIndex: theme.zIndices.base,
  pointerEvents: `none`,
  paddingRight: theme.space[7],
  paddingLeft: theme.space[7],
})

const toastCss: ThemeCss = theme => ({
  pointerEvents: `auto`,
  marginBottom: theme.space[1],

  "&:first-of-type": {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 0,
  },
})

const AnimatedToast = animated(Toast)

function ToastItem(props: ToastProps) {
  const styleProps = useSpring({
    from: {
      transform: `perspective(1000px) rotateX(90deg)`,
      transformOrigin: "bottom center",
    },
    to: {
      transform: `perspective(1000px) rotateX(0)`,
      transformOrigin: "bottom center",
    },
  })

  return <AnimatedToast style={styleProps} {...props} />
}

export interface ToastProviderProps {
  children: React.ReactNode
  closeButtonLabel?: string
}

export function ToastProvider({
  children,
  closeButtonLabel = `Close`,
}: ToastProviderProps) {
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
          <ToastItem
            key={`toast-${index}`} // this is probably not the best, but we can't use symbol as key :(
            {...toast}
            onClose={() => removeToast(toast.id)}
            closeButtonLabel={closeButtonLabel}
            css={toastCss}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
