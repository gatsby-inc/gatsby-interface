import React from "react"
import { ToastTone } from "./types"

export interface ToastOptions {
  tone?: ToastTone
  timeout: number
}

export interface ToastContextDefinition {
  showToast: (message: React.ReactNode, toastArg?: ToastOptions) => void
}

export const ToastContext = React.createContext<ToastContextDefinition>({
  showToast: () => undefined,
})

export function useToastContext() {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error(
      `Toast hooks cannot be used outside the ToastProvider component`
    )
  }

  return context
}
