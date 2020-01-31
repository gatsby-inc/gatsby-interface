/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_RADIO_FIELD.md"
import RadioButtonField from "../components/RadioButtonField"
import RadioButtonFieldBlock from "../components/RadioButtonFieldBlock"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { enumToOptions } from "../../../utils/helpers"
import { Wrapper } from "./stories.utils"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]
const LABEL_SIZE_OPTIONS = LABEL_SIZES.reduce(enumToOptions, {})

storiesOf(`form/RadioButtonField`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`standard`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const categories = [`article`, `essay`, `memories`].map(name => {
      return {
        label: name,
        value: name.toLowerCase().replace(/\s/g, `-`),
      }
    })

    const labeSize: FormFieldLabelSize = radios(
      `Label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )
    const optionLabelSize: FormFieldLabelSize = radios(
      `Option label size`,
      LABEL_SIZE_OPTIONS,
      `L`
    )

    const [fieldValue, setFieldValue] = React.useState<string>(``)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <RadioButtonFieldBlock
            id="example-1a"
            label="Category"
            name="category"
            value={fieldValue}
            options={categories}
            onChange={e => setFieldValue(e.currentTarget.value)}
            error={error}
            hint={hint}
          />

          <RadioButtonField
            id="example-1b"
            hasError={!!error}
            hasHint={!!hint}
            layout="horizontal"
          >
            <RadioButtonField.Label size={labeSize}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {categories.map(({ label, value }) => (
                <RadioButtonField.OptionWrapper key={value}>
                  <RadioButtonField.Option value={value} name="option1b" />
                  <RadioButtonField.OptionLabel
                    size={optionLabelSize}
                    optionValue={value}
                  >
                    {label}
                  </RadioButtonField.OptionLabel>
                </RadioButtonField.OptionWrapper>
              ))}
            </RadioButtonField.Options>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
          </RadioButtonField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`framed`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const categories = [`article`, `essay`, `memories`].map(name => {
      return {
        label: name,
        value: name.toLowerCase().replace(/\s/g, `-`),
      }
    })
    const labelSize: FormFieldLabelSize = radios(
      `Label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )
    const optionLabelSize: FormFieldLabelSize = radios(
      `Option label size`,
      LABEL_SIZE_OPTIONS,
      `L`
    )

    return (
      <StoryUtils.Container>
        <Wrapper>
          <RadioButtonField
            id="example-2"
            hasError={!!error}
            hasHint={!!hint}
            variant="framed"
          >
            <RadioButtonField.Label size={labelSize}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {categories.map(({ label, value }) => (
                <RadioButtonField.OptionFrame key={value}>
                  <RadioButtonField.Option value={value} name="categories" />
                  <RadioButtonField.OptionLabel
                    size={optionLabelSize}
                    optionValue={value}
                  >
                    {label}
                  </RadioButtonField.OptionLabel>
                </RadioButtonField.OptionFrame>
              ))}
            </RadioButtonField.Options>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
          </RadioButtonField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`Hint and Error placement`, () => {
    const hint = text(`Hint`, `This is a hint`)
    const error = text(`Error`, `And this is an error message`)
    const options = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`].map(
      name => {
        return {
          label: `option ${name}`,
          value: name.toLowerCase().replace(/\s/g, `-`),
        }
      }
    )
    const labelSize: FormFieldLabelSize = radios(
      `Label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )
    const optionLabelSize: FormFieldLabelSize = radios(
      `Option label size`,
      LABEL_SIZE_OPTIONS,
      `L`
    )

    return (
      <StoryUtils.Container>
        <Wrapper>
          <RadioButtonField id="example-3a" hasError={!!error} hasHint={!!hint}>
            <RadioButtonField.Label size={labelSize}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {options
                .filter((_, idx) => idx < 3)
                .map(({ label, value }) => (
                  <RadioButtonField.OptionWrapper key={value}>
                    <RadioButtonField.Option value={value} name="options3a" />
                    <RadioButtonField.OptionLabel
                      size={optionLabelSize}
                      optionValue={value}
                    >
                      {label}
                    </RadioButtonField.OptionLabel>
                  </RadioButtonField.OptionWrapper>
                ))}
            </RadioButtonField.Options>
            <RadioButtonField.Hint>
              {hint || `This one is also built with 'InputFieldBlock'`}
            </RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
          </RadioButtonField>

          <RadioButtonField id="example-3b" hasError={!!error} hasHint={!!hint}>
            <RadioButtonField.Label size={labelSize}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
            <RadioButtonField.Options>
              {options.map(({ label, value }) => (
                <RadioButtonField.OptionWrapper key={value}>
                  <RadioButtonField.Option value={value} name="options3b" />
                  <RadioButtonField.OptionLabel
                    size={optionLabelSize}
                    optionValue={value}
                  >
                    {label}
                  </RadioButtonField.OptionLabel>
                </RadioButtonField.OptionWrapper>
              ))}
            </RadioButtonField.Options>
          </RadioButtonField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
