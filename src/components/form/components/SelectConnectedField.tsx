/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { SelectFieldBlock } from "./SelectFieldBlock"
import { SelectFieldBlockProps } from "./SelectFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type SelectConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<SelectFieldBlockProps, "id" | "label">

export const SelectConnectedField = React.forwardRef<
  HTMLSelectElement,
  SelectConnectedFieldProps
>(function SelectConnectedField(props, ref) {
  const [connectedProps] = useConnectedField(props.name)

  return <SelectFieldBlock ref={ref} {...connectedProps} {...props} />
})
