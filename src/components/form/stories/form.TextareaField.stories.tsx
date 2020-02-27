/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios, boolean } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_TEXTAREA_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  TextAreaField,
  TextAreaFieldWrapper,
  TextAreaFieldLabel,
  TextAreaFieldControl,
  TextAreaFieldHint,
  TextAreaFieldError,
} from "../components/TextAreaField"
import { TextAreaFieldBlock } from "../components/TextAreaFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { enumToOptions } from "../../../utils/helpers"
import colors from "../../../theme/colors"
import { Wrapper } from "./stories.utils"

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
  .add(`TextAreaField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const placeholder = text(`Placeholder`, `This is a placeholder`)
    const size: FormFieldLabelSize = radios(
      `Label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )
    const disabled = boolean(`Disabled`, false)
    const required = boolean(`Required`, false)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <TextAreaField id="example-1a" hasError={!!error} hasHint={true}>
            <TextAreaFieldWrapper>
              <TextAreaFieldLabel size={size} isRequired={required}>
                Comment
              </TextAreaFieldLabel>
              <TextAreaFieldControl
                onChange={e => action(`Change`)(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
              />
              <TextAreaFieldHint>
                {hint
                  ? hint
                  : `This field is built with 'TextAreaField' and subcomponents placed explicitly as its children`}
              </TextAreaFieldHint>
              <TextAreaFieldError>{error}</TextAreaFieldError>
            </TextAreaFieldWrapper>
          </TextAreaField>

          <TextAreaFieldBlock
            id="example-1b"
            label="Comment"
            labelSize={size}
            onChange={e => action(`Change`)(e.target.value)}
            error={error}
            hint={hint || `And this one is built with 'TextAreaFieldBlock'`}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
          />

          <TextAreaFieldBlock
            id="example-1c"
            label={
              <span>
                <strong>Important</strong> Comment{" "}
                <em css={{ color: colors.grey[50] }}>(ReactNode label)</em>
              </span>
            }
            labelSize={size}
            onChange={e => action(`Change`)(e.target.value)}
            error={error}
            hint={hint || `This one is also built with 'TextAreaFieldBlock'`}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
          />
        </Wrapper>
      </StoryUtils.Container>
    )
  })
