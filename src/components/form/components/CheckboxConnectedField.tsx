/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useFormikContext, getIn } from "formik"
import { CheckboxFieldBlock } from "./CheckboxFieldBlock"
import Case from "case"
import { CheckboxFieldBlockProps } from "./CheckboxFieldBlock"

export type CheckboxConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<CheckboxFieldBlockProps, "id" | "label">

export const CheckboxConnectedField: React.FC<
  CheckboxConnectedFieldProps
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
    <CheckboxFieldBlock
      id={id}
      label={label}
      error={isTouched && error}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      {...props}
    />
  )
}
