/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { text, radios, boolean } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  InputField,
  InputFieldWrapper,
  InputFieldLabel,
  InputFieldControl,
  InputFieldHint,
  InputFieldError,
} from "../components/InputField"
import { InputFieldBlock } from "../components/InputFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { enumToOptions } from "../../../utils/helpers"
import { Wrapper } from "./stories.utils"
import colors from "../../../theme/colors"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]
const LABEL_SIZE_OPTIONS = LABEL_SIZES.reduce(enumToOptions, {})

storiesOf(`form`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`InputField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const placeholder = text(`Placeholder`, `This is a placeholder`)
    const size: FormFieldLabelSize = radios(
      `label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )
    const required = boolean(`Required`, false)
    const disabled = boolean(`Disabled`, false)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputField id="example-1a" hasError={!!error} hasHint={true}>
            <InputFieldWrapper>
              <InputFieldLabel size={size} isRequired={required}>
                First name
              </InputFieldLabel>
              <InputFieldControl
                onChange={e => action(`Change`)(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
              />
              <InputFieldHint>
                {hint
                  ? hint
                  : ` This field is built with 'InputField' and subcomponents placed  explicitly as its children`}
              </InputFieldHint>
              <InputFieldError>{error}</InputFieldError>
            </InputFieldWrapper>
          </InputField>

          <InputFieldBlock
            id="example-1b"
            label="First name"
            labelSize={size}
            onChange={e => action(`Change`)(e.target.value)}
            hint={hint || `And this one is built with 'InputFieldBlock'`}
            error={error}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
          />

          <InputFieldBlock
            id="example-1c"
            label={
              <React.Fragment>
                First <strong>name</strong>{" "}
                <em css={{ color: colors.grey[50] }}>(ReactNode label)</em>
              </React.Fragment>
            }
            labelSize={size}
            onChange={e => action(`Change`)(e.target.value)}
            hint={hint || `This one is also built with 'InputFieldBlock'`}
            error={error}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
          />
        </Wrapper>
      </StoryUtils.Container>
    )
  })
