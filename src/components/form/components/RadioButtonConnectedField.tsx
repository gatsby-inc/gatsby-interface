/** @jsx jsx */
import { jsx } from "@emotion/core"
import {
  RadioButtonFieldBlock,
  RadioButtonFieldBlockProps,
} from "./RadioButtonFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type RadioButtonConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<RadioButtonFieldBlockProps, "id" | "label" | "value">

export const RadioButtonConnectedField: React.FC<
  RadioButtonConnectedFieldProps
> = props => {
  const [connectedProps] = useConnectedField(props.name)

  return <RadioButtonFieldBlock {...connectedProps} {...props} />
}
