/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios, boolean } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_SELECT_FIELD.md"
import { action } from "@storybook/addon-actions"
import {
  SelectField,
  SelectFieldWrapper,
  SelectFieldLabel,
  SelectFieldControl,
  SelectFieldHint,
  SelectFieldError,
} from "../components/SelectField"
import { SelectFieldBlock } from "../components/SelectFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { enumToOptions } from "../../../utils/helpers"
import { Wrapper } from "./stories.utils"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]
const LABEL_SIZE_OPTIONS = LABEL_SIZES.reduce(enumToOptions, {})

const options = [
  ` - `,
  `Assire var Anahid`,
  `Francesca Findabair`,
  `Fringilla Vigo`,
  `Ida Emean aep Sivney`,
  `Keira Metz`,
  `Margarita Laux-Antille`,
  `Philippa Eilhart`,
  `Sabrina Glevissig`,
  `Sheala de Tancarville`,
  `Triss Merigold`,
  `Yennefer of Vengerberg`,
].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

storiesOf(`form`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })

  .add(`SelectField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
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
          <SelectField id="example-1a" hasError={!!error} hasHint={true}>
            <SelectFieldWrapper>
              <SelectFieldLabel isRequired={required} size={size}>
                Author
              </SelectFieldLabel>
              <SelectFieldControl
                options={options}
                onChange={e => action(`Change`)(e.target.value)}
                disabled={disabled}
                required={required}
              />
              <SelectFieldHint>
                {hint
                  ? hint
                  : `This field is built with 'SelectField' and subcomponents placed explicitly as its children`}
              </SelectFieldHint>
              <SelectFieldError>{error}</SelectFieldError>
            </SelectFieldWrapper>
          </SelectField>

          <SelectFieldBlock
            id="example-1b"
            label="Comment"
            labelSize={size}
            options={options}
            onChange={e => action(`Change`)(e.target.value)}
            error={error}
            hint={hint || `And this one is built with 'SelectFieldBlock'`}
            disabled={disabled}
            required={required}
          />
        </Wrapper>
      </StoryUtils.Container>
    )
  })
