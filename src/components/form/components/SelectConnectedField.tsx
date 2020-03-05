/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getIn, useFormikContext } from "formik"
import { SelectFieldBlock } from "./SelectFieldBlock"
import Case from "case"
import { SelectFieldBlockProps } from "./SelectFieldBlock"

export type SelectConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<SelectFieldBlockProps, "id" | "label">

export const SelectConnectedField: React.FC<
  SelectConnectedFieldProps
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
    <SelectFieldBlock
      id={id}
      label={label}
      error={isTouched && error}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  )
}
