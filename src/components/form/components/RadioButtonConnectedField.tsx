/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getIn, useFormikContext } from "formik"
import RadioButtonFieldBlock from "./RadioButtonFieldBlock"
import Case from "case"
import { RadioButtonFieldBlockProps } from "./RadioButtonFieldBlock"

export type RadioButtonConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<RadioButtonFieldBlockProps, "id" | "label" | "value">

const RadioButtonConnectedField: React.FC<
  RadioButtonConnectedFieldProps
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
    <RadioButtonFieldBlock
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

export default RadioButtonConnectedField
