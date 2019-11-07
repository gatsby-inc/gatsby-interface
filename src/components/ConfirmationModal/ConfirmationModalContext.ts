import React from "react"

export interface ConfirmationModalContext {
  labelId: string
  descriptionId: string
}

export default React.createContext<ConfirmationModalContext>({
  labelId: "",
  descriptionId: "",
})
