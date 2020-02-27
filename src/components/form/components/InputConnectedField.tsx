/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getIn, useFormikContext } from "formik"
import { InputFieldBlock } from "./InputFieldBlock"
import Case from "case"
import { InputFieldBlockProps } from "./InputFieldBlock"

export type InputConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<InputFieldBlockProps, "id" | "label">

export const InputConnectedField: React.FC<
  InputConnectedFieldProps
> = props => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  } = useFormikContext()
  const error = getIn(errors, props.name)
  const isTouched = getIn(touched, props.name)
  const value = getIn(values, props.name)

  return (
    <InputFieldBlock
      id={id}
      label={label}
      error={isTouched && error}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      {...props}
    />
  )
}
