/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios, boolean } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_CHECKBOX_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  CheckboxField,
  CheckboxFieldWrapper,
  CheckboxFieldControl,
  CheckboxFieldLabel,
  CheckboxFieldHint,
  CheckboxFieldError,
} from "../components/CheckboxField"
import { CheckboxFieldBlock } from "../components/CheckboxFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { enumToOptions } from "../../../utils/helpers"
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
  .add(`CheckboxField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const size: FormFieldLabelSize = radios(`size`, LABEL_SIZE_OPTIONS, `L`)
    const required = boolean(`Required`, false)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <CheckboxField
            id="input-example-1a"
            hasError={!!error}
            hasHint={true}
          >
            <CheckboxFieldWrapper>
              <CheckboxFieldControl
                onChange={e => action(`Change`)(e.target.value)}
                required={required}
              />
              <CheckboxFieldLabel size={size} isRequired={required}>
                Builds enabled
              </CheckboxFieldLabel>
              <CheckboxFieldHint>
                {hint
                  ? hint
                  : `This field is built with 'CheckboxField' and subcomponents placed explicitly as its children`}
              </CheckboxFieldHint>
              <CheckboxFieldError>{error}</CheckboxFieldError>
            </CheckboxFieldWrapper>
          </CheckboxField>

          <CheckboxFieldBlock
            id="input-example-1b"
            label="Builds enabled"
            labelSize={size}
            onChange={e => action(`Change`)(e.target.value)}
            error={error}
            hint={hint || `This one is built with 'CheckboxFieldBlock'`}
            required={required}
          />

          <CheckboxFieldBlock
            id="input-example-1c"
            label={
              <span>
                <strong>
                  {" "}
                  'S' label size let us easily build good-looking 'Accept Terms'
                  like fields. The text could be pretty long...{" "}
                </strong>{" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </span>
            }
            labelSize="S"
            onChange={e => action(`Change`)(e.target.value)}
            error={error}
            required={required}
          />
        </Wrapper>
      </StoryUtils.Container>
    )
  })
