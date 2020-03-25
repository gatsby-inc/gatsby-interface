/** @jsx jsx */
import { jsx } from "@emotion/core"
import { CheckboxFieldBlock } from "./CheckboxFieldBlock"
import { CheckboxFieldBlockProps } from "./CheckboxFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type CheckboxConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<CheckboxFieldBlockProps, "id" | "label">

export const CheckboxConnectedField: React.FC<
  CheckboxConnectedFieldProps
> = props => {
  const [connectedProps] = useConnectedField(props.name)

  return <CheckboxFieldBlock {...connectedProps} {...props} />
}
