/** @jsx jsx */
import { jsx } from "@emotion/core"
import * as React from "react"
import { getHintId, getErrorId, getErrorAriaLiveAttribute } from "../utils"
import { visuallyHiddenCss } from "../../../stylesheets/a11y"
import { ErrorValidationMode } from "../types"

export type AriaFormGroupFieldData = {
  getLegendProps: (
    label: React.ReactNode
  ) => {
    children: React.ReactNode
  }
  getOptionControlProps: (
    optionValue: string
  ) => {
    id: string
    required: boolean
  }
  getOptionLabelProps: (
    optionValue: string
  ) => {
    htmlFor: string
  }
  hintProps: {
    id: string
    hidden: boolean
    "aria-hidden": boolean
  }
  errorProps: {
    id: string
    hidden: boolean
    "aria-hidden": boolean
    "aria-live": `polite` | `assertive` | `off` | undefined
  }
  meta: {
    required: boolean
  }
}

/**
 * "group" fields (radio buttons and checkbox groups) are more complicated
 * than "single" ones when it comes to aria-attributes
 *
 * Apparently, we cannot just put aria-invalid and aria-describedby to each option's input,
 * as this would result in too many screen reader announcements
 *
 * Atatching those aria- attributes to only the first option kinda works but not entirely without issues
 *
 * So instead we are going to require the actual hint and error messages and put them (visually hidden) in the group label,
 * while marking the actual visible messages as hidden from screen readers
 * For more details see this article: https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups
 */
export function useAriaFormGroupField(
  fieldId: string,
  {
    required = false,
    error,
    hint,
    hasError = Boolean(error),
    hasHint = Boolean(hint),
    validationMode,
  }: {
    required?: boolean
    error?: React.ReactNode
    hint?: React.ReactNode
    hasError?: boolean
    hasHint?: boolean
    validationMode?: ErrorValidationMode
  }
): AriaFormGroupFieldData {
  const hintId = getHintId(fieldId)
  const errorId = getErrorId(fieldId)

  const getLegendProps: AriaFormGroupFieldData["getLegendProps"] = React.useCallback(
    label => ({
      children: (
        <React.Fragment>
          {label}
          <div css={visuallyHiddenCss}>
            <div>{hint}</div>
            <div>{error}</div>
          </div>
        </React.Fragment>
      ),
    }),
    [hint, error]
  )

  const getOptionControlProps: AriaFormGroupFieldData["getOptionControlProps"] = React.useCallback(
    optionValue => ({
      id: getGroupOptionId(fieldId, optionValue),
      required,
    }),
    [fieldId, required]
  )

  const getOptionLabelProps: AriaFormGroupFieldData["getOptionLabelProps"] = React.useCallback(
    optionValue => ({
      htmlFor: getGroupOptionId(fieldId, optionValue),
    }),
    [fieldId]
  )

  return {
    getLegendProps,
    getOptionControlProps,
    getOptionLabelProps,
    hintProps: {
      id: hintId,
      hidden: !hasHint,
      "aria-hidden": true,
    },
    errorProps: {
      id: errorId,
      hidden: !hasError,
      "aria-hidden": true,
      "aria-live": getErrorAriaLiveAttribute(validationMode),
    },
    meta: {
      required,
    },
  }
}

function getGroupOptionId(fieldId: string, optionValue: string) {
  return `${fieldId}__option--${optionValue}`
}
