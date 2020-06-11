import { getHintId, getErrorId, getErrorAriaLiveAttribute } from "../utils"
import { ErrorValidationMode } from "../types"

export type AriaFormFieldData = {
  controlProps: {
    id: string
    "aria-describedby": string | undefined
    "aria-invalid": boolean
    required: boolean
  }
  labelProps: {
    htmlFor: string
  }
  hintProps: {
    id: string
    hidden: boolean
  }
  errorProps: {
    id: string
    hidden: boolean
    "aria-live": `polite` | `assertive` | `off` | undefined
  }
}

export function useAriaFormField(
  fieldId: string,
  {
    required = false,
    hasError = false,
    hasHint = false,
    validationMode,
  }: {
    required?: boolean
    hasError?: boolean
    hasHint?: boolean
    validationMode?: ErrorValidationMode
  }
): AriaFormFieldData {
  const hintId = getHintId(fieldId)
  const errorId = getErrorId(fieldId)
  const controlDescribedBy =
    [hasError && errorId, hasHint && hintId]
      .filter(describedBy => describedBy)
      .join(` `) || undefined

  return {
    controlProps: {
      id: fieldId,
      "aria-describedby": controlDescribedBy,
      "aria-invalid": hasError,
      required,
    },
    labelProps: {
      htmlFor: fieldId,
    },
    hintProps: {
      id: hintId,
      hidden: !hasHint,
    },
    errorProps: {
      id: errorId,
      hidden: !hasError,
      "aria-live": getErrorAriaLiveAttribute(validationMode),
    },
  }
}
