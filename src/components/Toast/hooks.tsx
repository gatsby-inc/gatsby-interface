import React, { useState, useRef, useCallback } from "react"
import { useToastContext } from "./ToastContext"
import { MessageWithLink } from "./MessageWithLink"
import { DEFAULT_TIMEOUT, DEFAULT_TONE } from "./constants"
import { ToastTone } from "./types"

export const useShowToast = () => {
  const { showToast } = useToastContext()

  return showToast
}

export const useShowSuccessToast = () => {
  const showToast = useShowToast()

  return useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, tone: `SUCCESS` })
    },
    [showToast]
  )
}

export const useShowErrorToast = () => {
  const showToast = useShowToast()

  return useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, tone: `DANGER`, timeout: 0 })
    },
    [showToast]
  )
}

export const useShowErrorAlert = () => {
  const showToast = useShowErrorToast()

  return useCallback(
    (message, linkProps, options = {}) => {
      showToast(
        <MessageWithLink {...linkProps}>{message}</MessageWithLink>,
        options
      )
    },
    [showToast]
  )
}

export interface Toast {
  id: symbol
  message: React.ReactNode
  tone: ToastTone
}

export const useToastActions = () => {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timeoutsRef = useRef<Map<symbol, number>>(new Map())

  const removeToast = useCallback((toastId: symbol) => {
    setToasts(prevToasts => prevToasts.filter(({ id }) => id !== toastId))

    window.clearTimeout(timeoutsRef.current.get(toastId))

    timeoutsRef.current.delete(toastId)
  }, [])

  const showToast = useCallback(
    (message, { tone = DEFAULT_TONE, timeout = DEFAULT_TIMEOUT } = {}) => {
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

  return { toasts, showToast, removeToast }
}
