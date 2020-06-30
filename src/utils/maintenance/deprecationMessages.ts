import { warn } from "./warn"

export function showCustomCssDeprecationMessage(customCss: any) {
  if (customCss === undefined) {
    return
  }
  warn(
    `Styling components via "customCss" prop is deprecated, please use Emotion "css" prop or pass a "className"`
  )
}

export function showFormSkeletonDeprecatedMessage(
  componentName: string,
  isGroupSkeleton = false
) {
  warn(
    `<${componentName}> and its subcomponents should be considered deprecated and replaced with "${
      isGroupSkeleton ? `useAriaFormGroupField` : `useAriaFormField`
    }"`
  )
}

export function showFormFieldDeprecatedMessage(
  componentName: string,
  isGroupField = false
) {
  warn(
    `
<${componentName}> and its subcomponents should be considered deprecated and replaced with one of the following:
  - <${componentName}Block> (or <${componentName.substring(
      0,
      componentName.indexOf("Field")
    )}ConnectedField> in Formik forms)
  - "${
    isGroupField ? `useAriaFormGroupField` : `useAriaFormField`
  }" hook and a combination of styled form elements, such as <StyledInput>, <${
      isGroupField ? `FormLegend` : `StyledLabel`
    }>, <FormError>
`.trim()
  )
}
