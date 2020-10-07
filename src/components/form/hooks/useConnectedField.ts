import * as React from "react"
import Case from "case"
import {
  useField,
  FormikHandlers,
  useFormikContext,
  FieldHelperProps,
} from "formik"

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

  const [field, meta, helpers] = useFieldFast<TValue>(fieldName)

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

/**
 * Taken from this comment in Formik's issues:
 * https://github.com/formium/formik/issues/2268#issuecomment-682685788
 */
function useFieldFast<TValue = string>(fieldName: string) {
  const [field, meta] = useField<TValue>(fieldName)

  // `setField*` helpers from `useFormikContext` seem to be more "stable" than the ones returned by `useField`
  const { setFieldTouched, setFieldValue, setFieldError } = useFormikContext()

  // so we are going to shim field level helpers using them and `useMemo`:
  const helpers = React.useMemo<FieldHelperProps<TValue>>(
    () => ({
      setValue: (...args) => setFieldValue(field.name, ...args),
      setTouched: (...args) => setFieldTouched(field.name, ...args),
      // Seems like Formik's type defs for `setError` are incorrectly expecting the argument to have type TValue instead of a string
      // @ts-expect-error
      setError: (...args) => setFieldError(field.name, ...args),
    }),
    [setFieldTouched, setFieldValue, setFieldError, field.name]
  )

  return [field, meta, helpers] as const
}
