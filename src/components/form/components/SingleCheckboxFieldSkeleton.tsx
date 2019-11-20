import React from "react"
import FormFieldSkeleton, { FormFieldSkeletonProps } from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

function SingleCheckboxFieldSkeleton(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type SingleCheckboxFieldSkeletonControlProps = Omit<
  OmitControlProps<JSX.IntrinsicElements["input"]>,
  "type"
>

SingleCheckboxFieldSkeleton.Control = React.forwardRef<
  HTMLInputElement,
  SingleCheckboxFieldSkeletonControlProps
>((props, ref) => {
  const { id, hasError, meta } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <input
      id={id}
      {...props}
      type="checkbox"
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        props[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    />
  )
})
SingleCheckboxFieldSkeleton.Control.displayName = `SingleCheckboxFieldSkeleton.Control`

SingleCheckboxFieldSkeleton.Label = FormFieldSkeleton.Label
SingleCheckboxFieldSkeleton.Label.displayName = `SingleCheckboxFieldSkeleton.Label`
SingleCheckboxFieldSkeleton.Hint = FormFieldSkeleton.Hint
SingleCheckboxFieldSkeleton.Hint.displayName = `SingleCheckboxFieldSkeleton.Hint`
SingleCheckboxFieldSkeleton.Error = FormFieldSkeleton.Error
SingleCheckboxFieldSkeleton.Error.displayName = `SingleCheckboxFieldSkeleton.Hint`

export default SingleCheckboxFieldSkeleton
