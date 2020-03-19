import Case from "case"
import { useField, FormikHandlers } from "formik"

export type ConnectedFieldProps<TValue = string> = {
  id: string
  label: string
  value: TValue
  error?: string
  onBlur: FormikHandlers["handleBlur"]
  onChange: FormikHandlers["handleBlur"]
}

export function useConnectedField<TValue = string>(fieldName: string) {
  const id = `${fieldName}Field`
  const label = Case.sentence(fieldName)

  const [field, meta, helpers] = useField<TValue>(fieldName)

  const connectedProps: ConnectedFieldProps<TValue> = {
    id,
    label,
    value: field.value,
    error: meta.touched ? meta.error : "",
    onBlur: field.onBlur,
    onChange: field.onChange,
  }

  return [connectedProps, field, meta, helpers] as const
}
