/** @jsx jsx */
import { jsx } from "@emotion/core"
import { SelectFieldBlock } from "./SelectFieldBlock"
import { SelectFieldBlockProps } from "./SelectFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type SelectConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<SelectFieldBlockProps, "id" | "label">

export const SelectConnectedField: React.FC<
  SelectConnectedFieldProps
> = props => {
  const [connectedProps] = useConnectedField(props.name)

  return <SelectFieldBlock {...connectedProps} {...props} />
}
