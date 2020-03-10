/** @jsx jsx */
import { jsx } from "@emotion/core"
import { TextAreaFieldBlock } from "./TextAreaFieldBlock"
import { TextAreaFieldBlockProps } from "./TextAreaFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type TextAreaConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<TextAreaFieldBlockProps, "id" | "label">

export const TextAreaConnectedField: React.FC<
  TextAreaConnectedFieldProps
> = props => {
  const [connectedProps] = useConnectedField(props.name)

  return <TextAreaFieldBlock {...connectedProps} {...props} />
}
