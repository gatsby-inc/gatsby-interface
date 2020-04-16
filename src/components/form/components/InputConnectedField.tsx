/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { InputFieldBlock } from "./InputFieldBlock"
import { InputFieldBlockProps } from "./InputFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type InputConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<InputFieldBlockProps, "id" | "label">

export const InputConnectedField = React.forwardRef<
  HTMLInputElement,
  InputConnectedFieldProps
>(function InputConnectedField(props, ref) {
  const [connectedProps] = useConnectedField(props.name)

  return <InputFieldBlock ref={ref} {...connectedProps} {...props} />
})
