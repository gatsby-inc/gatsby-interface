/** @jsx jsx */
import { jsx } from "@emotion/core"
import { connect, getIn, FormikContext } from "formik"
import SelectFieldBlock from "./SelectFieldBlock"
import Case from "case"
import { SelectFieldBlockProps } from "./SelectFieldBlock"

export type InputConnectedFieldProps = {
  name: string;
} & SelectFieldBlockProps & {
    formik: FormikContext<{}>;
  }

const SelectConnectedField = (props: InputConnectedFieldProps) => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const error = getIn(props.formik.errors, props.name)
  const handleBlur = props.formik.handleBlur
  const handleChange = props.formik.handleChange
  const touched = getIn(props.formik.touched, props.name)
  const value = getIn(props.formik.values, props.name)

  return (
    <SelectFieldBlock
      id={id}
      label={label}
      error={touched && error && error}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  )
}

export default connect(SelectConnectedField)