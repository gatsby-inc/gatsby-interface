/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import {
  CheckboxGroupFieldBlock,
  CheckboxGroupFieldBlockProps,
} from "./CheckboxGroupFieldBlock"
import { useConnectedField } from "../hooks/useConnectedField"

export type CheckboxGroupConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
  value?: string[]
} & Omit<CheckboxGroupFieldBlockProps, "id" | "label" | "value">

export const CheckboxGroupConnectedField: React.FC<
  CheckboxGroupConnectedFieldProps
> = props => {
  const [connectedProps, _field, _meta, helpers] = useConnectedField<string[]>(
    props.name
  )
  const value = connectedProps.value || []

  return (
    <CheckboxGroupFieldBlock
      {...connectedProps}
      {...props}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget
        let newValue

        if (target.checked) {
          newValue = [...value, target.value]
        } else {
          newValue = value.filter(optionValue => optionValue !== target.value)
        }

        helpers.setValue(newValue)
      }}
      onBlur={() => {
        helpers.setTouched(true)
      }}
    />
  )
}
