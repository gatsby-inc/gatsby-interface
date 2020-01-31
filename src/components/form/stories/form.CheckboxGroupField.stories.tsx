/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_CHECKBOX_GROUP_FIELD.md"
import CheckboxGroupField from "../components/CheckboxGroupField"
import CheckboxGroupFieldBlock from "../components/CheckboxGroupFieldBlock"
import { Wrapper } from "./stories.utils"

storiesOf(`form`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`CheckboxGroupField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const options = [
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

    const [fieldValue, setFieldValue] = React.useState<string[]>([])

    return (
      <StoryUtils.Container>
        <Wrapper>
          <CheckboxGroupFieldBlock
            id="example-1a"
            label="Fieldset Legend"
            options={options}
            error={error}
            onChange={e => {
              const target = e.currentTarget
              const valueArray: string[] = [...fieldValue]

              if (target.checked) {
                valueArray.push(target.value)
              } else {
                valueArray.splice(valueArray.indexOf(target.value), 1)
              }

              setFieldValue(valueArray)
            }}
            hint={hint}
            required
            value={fieldValue}
            name="field"
          />

          <CheckboxGroupField
            id="example-1b"
            hasError={!!error}
            hasHint={!!hint}
            layout="horizontal"
          >
            <CheckboxGroupField.Label isRequired={true}>
              Tags ('horizontal' layout)
            </CheckboxGroupField.Label>
            <CheckboxGroupField.Options>
              {options.map(({ label, value }) => (
                <CheckboxGroupField.OptionWrapper key={value}>
                  <CheckboxGroupField.Option value={value} name="tags" />
                  <CheckboxGroupField.OptionLabel optionValue={value}>
                    {label}
                  </CheckboxGroupField.OptionLabel>
                </CheckboxGroupField.OptionWrapper>
              ))}
            </CheckboxGroupField.Options>
            <CheckboxGroupField.Hint>{hint}</CheckboxGroupField.Hint>
            <CheckboxGroupField.Error>{error}</CheckboxGroupField.Error>
          </CheckboxGroupField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
