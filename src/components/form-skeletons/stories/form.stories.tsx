import React from "react"

import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README.md"
import { action } from "@storybook/addon-actions"
import {
  InputFieldSkeleton,
  InputFieldSkeletonLabel,
  InputFieldSkeletonControl,
  InputFieldSkeletonError,
  InputFieldSkeletonHint,
} from "../components/InputFieldSkeleton"
import {
  TextAreaFieldSkeleton,
  TextAreaFieldSkeletonLabel,
  TextAreaFieldSkeletonControl,
  TextAreaFieldSkeletonError,
  TextAreaFieldSkeletonHint,
} from "../components/TextAreaFieldSkeleton"
import {
  SelectFieldSkeleton,
  SelectFieldSkeletonLabel,
  SelectFieldSkeletonControl,
  SelectFieldSkeletonError,
  SelectFieldSkeletonHint,
} from "../components/SelectFieldSkeleton"
import {
  CheckboxFieldSkeleton,
  CheckboxFieldSkeletonControl,
  CheckboxFieldSkeletonLabel,
  CheckboxFieldSkeletonError,
  CheckboxFieldSkeletonHint,
} from "../components/CheckboxFieldSkeleton"
import CheckboxGroupFieldSkeleton from "../components/CheckboxGroupFieldSkeleton"
import RadioButtonFieldSkeleton from "../components/RadioButtonFieldSkeleton"

storiesOf(`form-skeletons`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Default`, () => {
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

    return (
      <StoryUtils.Container>
        <div>
          <InputFieldSkeleton
            id="input-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <div>
              <InputFieldSkeletonLabel>Input</InputFieldSkeletonLabel>
              <InputFieldSkeletonControl
                onChange={e => action(`Change`)(e.target.value)}
              />
              <InputFieldSkeletonError>{error}</InputFieldSkeletonError>
              <InputFieldSkeletonHint>{hint}</InputFieldSkeletonHint>
            </div>
          </InputFieldSkeleton>
          <br />
          <TextAreaFieldSkeleton
            id="textarea-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <div>
              <TextAreaFieldSkeletonLabel>Text Area</TextAreaFieldSkeletonLabel>
              <TextAreaFieldSkeletonControl
                onChange={e => action(`Change`)(e.target.value)}
              />
              <TextAreaFieldSkeletonError>{error}</TextAreaFieldSkeletonError>
              <TextAreaFieldSkeletonHint>{hint}</TextAreaFieldSkeletonHint>
            </div>
          </TextAreaFieldSkeleton>
          <br />
          <SelectFieldSkeleton
            id="select-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <div>
              <SelectFieldSkeletonLabel>Select</SelectFieldSkeletonLabel>
              <SelectFieldSkeletonControl
                options={options}
                onChange={e => action(`Change`)(e.target.value)}
              />
              <SelectFieldSkeletonError>{error}</SelectFieldSkeletonError>
              <SelectFieldSkeletonHint>{hint}</SelectFieldSkeletonHint>
            </div>
          </SelectFieldSkeleton>
          <br />
          <CheckboxFieldSkeleton id="checkbox-example">
            <div>
              <CheckboxFieldSkeletonControl
                onChange={e => action(`Change`)(e.target.value)}
              />
              <CheckboxFieldSkeletonLabel>
                Single checkbox
              </CheckboxFieldSkeletonLabel>
              <CheckboxFieldSkeletonError>{error}</CheckboxFieldSkeletonError>
              <CheckboxFieldSkeletonHint>{hint}</CheckboxFieldSkeletonHint>
            </div>
          </CheckboxFieldSkeleton>
          <br />
          <CheckboxGroupFieldSkeleton
            id="checkbox-group-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <CheckboxGroupFieldSkeleton.Label>
              Checkbox group
            </CheckboxGroupFieldSkeleton.Label>
            {options.map(({ label, value }) => (
              <React.Fragment key={value}>
                <CheckboxGroupFieldSkeleton.Option
                  value={value}
                  name="checkbox-group"
                />
                <CheckboxGroupFieldSkeleton.OptionLabel optionValue={value}>
                  {label}
                </CheckboxGroupFieldSkeleton.OptionLabel>
              </React.Fragment>
            ))}
            <CheckboxGroupFieldSkeleton.Error>
              {error}
            </CheckboxGroupFieldSkeleton.Error>
            <CheckboxGroupFieldSkeleton.Hint>
              {hint}
            </CheckboxGroupFieldSkeleton.Hint>
          </CheckboxGroupFieldSkeleton>
          <br />
          <RadioButtonFieldSkeleton
            id="radio-group-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <RadioButtonFieldSkeleton.Label>
              Radio button
            </RadioButtonFieldSkeleton.Label>
            {options.map(({ label, value }) => (
              <React.Fragment key={value}>
                <RadioButtonFieldSkeleton.Option
                  value={value}
                  name="radio-button"
                />
                <RadioButtonFieldSkeleton.OptionLabel optionValue={value}>
                  {label}
                </RadioButtonFieldSkeleton.OptionLabel>
              </React.Fragment>
            ))}
            <RadioButtonFieldSkeleton.Error>
              {error}
            </RadioButtonFieldSkeleton.Error>
            <RadioButtonFieldSkeleton.Hint>
              {hint}
            </RadioButtonFieldSkeleton.Hint>
          </RadioButtonFieldSkeleton>
        </div>
      </StoryUtils.Container>
    )
  })
