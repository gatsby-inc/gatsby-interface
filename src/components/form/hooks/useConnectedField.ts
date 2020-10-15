import Case from "case"
import { useField, FormikHandlers, FieldHookConfig } from "formik"

export type ConnectedFieldProps<TValue = string> = {
  id: string
  label: string
  value: TValue
  checked?: boolean
  error?: string
  onBlur: FormikHandlers["handleBlur"]
  onChange: FormikHandlers["handleBlur"]
}

export function useConnectedField<TValue = string>(
  propsOrFieldName: string | FieldHookConfig<TValue>
) {
  const name =
    typeof propsOrFieldName === `string`
      ? propsOrFieldName
      : propsOrFieldName.name
  const id = `${name}Field`
  const label = Case.sentence(name)

  const [field, meta, helpers] = useField<TValue>(propsOrFieldName)

  const connectedProps: ConnectedFieldProps<TValue> = {
    id,
    label,
    value: field.value,
    checked: field.checked,
    error: meta.touched ? meta.error : "",
    onBlur: field.onBlur,
    onChange: field.onChange,
  }

  return [connectedProps, field, meta, helpers] as const
}
