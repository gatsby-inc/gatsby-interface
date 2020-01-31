import React from "react"
import FormFieldSkeleton, { FormFieldSkeletonProps } from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

function TextAreaFieldSkeleton(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type TextAreaFieldSkeletonControlProps = OmitControlProps<
  JSX.IntrinsicElements["textarea"]
>

TextAreaFieldSkeleton.Control = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldSkeletonControlProps
>((props, ref) => {
  const { id, hasError, meta } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <textarea
      id={id}
      {...props}
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        props[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    />
  )
})
TextAreaFieldSkeleton.Control.displayName = `TextAreaFieldSkeleton.Control`

TextAreaFieldSkeleton.Label = FormFieldSkeleton.Label
TextAreaFieldSkeleton.Label.displayName = `TextAreaFieldSkeleton.Label`
TextAreaFieldSkeleton.Hint = FormFieldSkeleton.Hint
TextAreaFieldSkeleton.Hint.displayName = `TextAreaFieldSkeleton.Hint`
TextAreaFieldSkeleton.Error = FormFieldSkeleton.Error
TextAreaFieldSkeleton.Error.displayName = `TextAreaFieldSkeleton.Hint`

export default TextAreaFieldSkeleton
