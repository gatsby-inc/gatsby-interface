/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { TextAreaFieldBlock } from "./TextAreaFieldBlock"
import { TextAreaFieldBlockProps } from "./TextAreaFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type TextAreaConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<TextAreaFieldBlockProps, "id" | "label">

export const TextAreaConnectedField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaConnectedFieldProps
>(function TextAreaConnectedField(props, ref) {
  const [connectedProps] = useConnectedField(props.name)

  return <TextAreaFieldBlock ref={ref} {...connectedProps} {...props} />
})
