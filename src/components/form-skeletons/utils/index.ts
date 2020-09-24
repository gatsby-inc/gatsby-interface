import { ErrorValidationMode } from "../types"

export function getHintId(fieldId: string) {
  return `${fieldId}__hint`
}

export function getErrorId(fieldId: string) {
  return `${fieldId}__error`
}

export function getErrorAriaLiveAttribute(
  validationMode?: ErrorValidationMode
): React.HTMLAttributes<HTMLDivElement>["aria-live"] {
  if (validationMode === `focus`) {
    return `assertive`
  }
  if (validationMode === `change`) {
    return `polite`
  }
  return undefined
}
