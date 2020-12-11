import * as React from "react"
import { ToastOptions, useToastContext } from "./ToastContext"
import { DEFAULT_TIMEOUT, DEFAULT_TONE } from "./constants"
import { ToastTone } from "./types"

export const useShowToast = () => {
  const { showToast } = useToastContext()

  return showToast
}

export const useShowSuccessToast = () => {
  const showToast = useShowToast()

  return React.useCallback(
    (
      message: React.ReactNode,
      options: Omit<Partial<ToastOptions>, "tone"> = {}
    ) => {
      showToast(message, { ...options, tone: `SUCCESS` })
    },
    [showToast]
  )
}

export interface ToastData {
  id: symbol
  message: React.ReactNode
  tone: ToastTone
}

export const useToastActions = () => {
  const [toasts, setToasts] = React.useState<ToastData[]>([])
  const timeoutsRef = React.useRef<Map<symbol, number>>(new Map())

  const removeToast = React.useCallback((toastId: symbol) => {
    setToasts(prevToasts => prevToasts.filter(({ id }) => id !== toastId))

    window.clearTimeout(timeoutsRef.current.get(toastId))

    timeoutsRef.current.delete(toastId)
  }, [])

  const showToast = React.useCallback(
    (
      message: React.ReactNode,
      {
        tone = DEFAULT_TONE,
        timeout = DEFAULT_TIMEOUT,
      }: Partial<ToastOptions> = {}
    ) => {
      const toastId = Symbol(`toast`)

      setToasts(prevToasts => [...prevToasts, { id: toastId, message, tone }])

      if (timeout > 0) {
        const timeOutId = window.setTimeout(() => {
          removeToast(toastId)
        }, timeout)

        timeoutsRef.current.set(toastId, timeOutId)
      }
    },
    []
  )

  React.useEffect(() => {
    // Clear all timeouts
    return () => {
      for (const timeout of timeoutsRef.current.values()) {
        window.clearTimeout(timeout)
      }
    }
  }, [])

  return { toasts, showToast, removeToast }
}
