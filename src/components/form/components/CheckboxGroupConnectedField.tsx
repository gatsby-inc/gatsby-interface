/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { useFormikContext, getIn } from "formik"
import CheckboxGroupFieldBlock from "./CheckboxGroupFieldBlock"
import Case from "case"
import { CheckboxGroupFieldBlockProps } from "./CheckboxGroupFieldBlock"

export type CheckboxGroupConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
  value?: any[]
} & Omit<CheckboxGroupFieldBlockProps, "id" | "label" | "value">

const CheckboxGroupConnectedField: React.FC<
  CheckboxGroupConnectedFieldProps
> = props => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const {
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
  } = useFormikContext()
  const error = getIn(errors, props.name)
  const isTouched = getIn(touched, props.name)
  const value = getIn(values, props.name) || []

  return (
    <CheckboxGroupFieldBlock
      id={id}
      label={label}
      error={isTouched && error}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget
        const valueArray = [...value]

        if (target.checked) {
          valueArray.push(target.value)
        } else {
          valueArray.splice(valueArray.indexOf(target.value), 1)
        }

        setFieldValue(props.name, valueArray, true)
      }}
      onBlur={() => {
        setFieldTouched(props.name, true)
      }}
      {...props}
    />
  )
}

export default CheckboxGroupConnectedField
