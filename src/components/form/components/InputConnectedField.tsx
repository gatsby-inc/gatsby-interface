/** @jsx jsx */
import { jsx } from "@emotion/core"
import { InputFieldBlock } from "./InputFieldBlock"
import { InputFieldBlockProps } from "./InputFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type InputConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<InputFieldBlockProps, "id" | "label">

export const InputConnectedField: React.FC<
  InputConnectedFieldProps
> = props => {
  const [connectedProps] = useConnectedField(props.name)

  return <InputFieldBlock {...connectedProps} {...props} />
}
