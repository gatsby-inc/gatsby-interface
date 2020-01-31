/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getIn, useFormikContext } from "formik"
import TextAreaFieldBlock from "./TextAreaFieldBlock"
import Case from "case"
import { TextAreaFieldBlockProps } from "./TextAreaFieldBlock"

export type TextAreaConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<TextAreaFieldBlockProps, "id" | "label">

const TextAreaConnectedField: React.FC<TextAreaConnectedFieldProps> = props => {
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
    <TextAreaFieldBlock
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

export default TextAreaConnectedField
