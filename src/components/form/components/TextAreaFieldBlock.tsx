/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  TextAreaField,
  TextAreaFieldControlProps,
  TextAreaFieldLabel,
  TextAreaFieldControl,
  TextAreaFieldHint,
  TextAreaFieldError,
} from "./TextAreaField"
import { WithFormFieldBlock, FormFieldContainer } from "./FormField"

export type TextAreaFieldBlockProps = WithFormFieldBlock<
  TextAreaFieldControlProps
>

export const TextAreaFieldBlock = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldBlockProps
>(function TextAreaFieldBlock(props, ref) {
  const {
    id,
    label,
    labelSize,
    error,
    hint,
    className,
    validationMode,
    layout,
    ...rest
  } = props

  return (
    <FormFieldContainer layout={layout} className={className}>
      <TextAreaField id={id} hasError={!!error} hasHint={!!hint}>
        <TextAreaFieldLabel
          size={labelSize}
          isRequired={!!rest.required}
          css={theme => [
            layout === `horizontal` && {
              alignSelf: `baseline`,
              paddingTop: theme.space[2],
            },
          ]}
        >
          {label}
        </TextAreaFieldLabel>
        <TextAreaFieldControl ref={ref} {...rest} />
        <TextAreaFieldHint>{hint}</TextAreaFieldHint>
        <TextAreaFieldError validationMode={validationMode}>
          {error}
        </TextAreaFieldError>
      </TextAreaField>
    </FormFieldContainer>
  )
})
