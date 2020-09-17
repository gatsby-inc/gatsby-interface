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
