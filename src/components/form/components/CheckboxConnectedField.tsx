/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { CheckboxFieldBlock } from "./CheckboxFieldBlock"
import { CheckboxFieldBlockProps } from "./CheckboxFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type CheckboxConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<CheckboxFieldBlockProps, "id" | "label">

export const CheckboxConnectedField = React.forwardRef<
  HTMLInputElement,
  CheckboxConnectedFieldProps
>(function CheckboxConnectedField(props, ref) {
  const [connectedProps] = useConnectedField(props.name)

  return <CheckboxFieldBlock ref={ref} {...connectedProps} {...props} />
})
