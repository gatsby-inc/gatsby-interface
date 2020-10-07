/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
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

export const CheckboxGroupConnectedField: React.FC<CheckboxGroupConnectedFieldProps> = props => {
  const [connectedProps, _field, _meta, helpers] = useConnectedField<string[]>(
    props.name
  )
  const value = connectedProps.value || []

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback(
    e => {
      const target = e.currentTarget
      let newValue

      if (target.checked) {
        newValue = [...value, target.value]
      } else {
        newValue = value.filter(optionValue => optionValue !== target.value)
      }

      helpers.setValue(newValue)
    },
    [value, helpers.setValue]
  )

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = React.useCallback(() => {
    helpers.setTouched(true)
  }, [helpers.setTouched])

  return (
    <CheckboxGroupFieldBlock
      {...connectedProps}
      {...props}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}
