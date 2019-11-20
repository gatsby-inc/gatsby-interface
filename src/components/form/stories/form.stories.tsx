/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README.md"
import { action } from "@storybook/addon-actions"
import InputField from "../components/InputField"
// import SingleCheckboxFieldSkeleton from "../components/SingleCheckboxFieldSkeleton"
// import TextAreaFieldSkeleton from "../components/TextAreaFieldSkeleton"
// import CheckboxGroupFieldSkeleton from "../components/CheckboxGroupFieldSkeleton"
// import RadioButtonFieldSkeleton from "../components/RadioButtonFieldSkeleton"
// import SelectFieldSkeleton from "../components/SelectFieldSkeleton"

storiesOf(`form`, module)
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
    // // const options = [
    // //   `Assire var Anahid`,
    // //   `Francesca Findabair`,
    // //   `Fringilla Vigo`,
    // //   `Ida Emean aep Sivney`,
    // //   `Keira Metz`,
    // //   `Margarita Laux-Antille`,
    // //   `Philippa Eilhart`,
    // //   `Sabrina Glevissig`,
    // //   `Sheala de Tancarville`,
    // //   `Triss Merigold`,
    // //   `Yennefer of Vengerberg`,
    // ].map(name => {
    //   return {
    //     label: name,
    //     value: name.toLowerCase().replace(/\s/g, `-`),
    //   }
    // })

    return (
      <StoryUtils.Container>
        <div>
          <InputField id="input-example" hasError={!!error} hasHint={!!hint}>
            <div>
              <InputField.Label>Input</InputField.Label>
              <InputField.Control
                onChange={e => action(`Change`)(e.target.value)}
              />
              <InputField.Error>{error}</InputField.Error>
              <InputField.Hint>{hint}</InputField.Hint>
            </div>
          </InputField>
        </div>
      </StoryUtils.Container>
    )
  })

/*
          <br />
          <TextAreaFieldSkeleton
            id="textarea-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <div>
              <TextAreaFieldSkeleton.Label>
                Text Area
              </TextAreaFieldSkeleton.Label>
              <TextAreaFieldSkeleton.Control
                onChange={e => action(`Change`)(e.target.value)}
              />
              <TextAreaFieldSkeleton.Error>{error}</TextAreaFieldSkeleton.Error>
              <TextAreaFieldSkeleton.Hint>{hint}</TextAreaFieldSkeleton.Hint>
            </div>
          </TextAreaFieldSkeleton>
          <br />
          <SelectFieldSkeleton
            id="select-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <div>
              <SelectFieldSkeleton.Label>Select</SelectFieldSkeleton.Label>
              <SelectFieldSkeleton.Control
                options={options}
                onChange={e => action(`Change`)(e.target.value)}
              />
              <SelectFieldSkeleton.Error>{error}</SelectFieldSkeleton.Error>
              <SelectFieldSkeleton.Hint>{hint}</SelectFieldSkeleton.Hint>
            </div>
          </SelectFieldSkeleton>
          <br />
          <SingleCheckboxFieldSkeleton id="checkbox-example">
            <div>
              <SingleCheckboxFieldSkeleton.Control
                onChange={e => action(`Change`)(e.target.value)}
              />
              <SingleCheckboxFieldSkeleton.Label>
                Single checkbox
              </SingleCheckboxFieldSkeleton.Label>
              <SingleCheckboxFieldSkeleton.Error>
                {error}
              </SingleCheckboxFieldSkeleton.Error>
              <SingleCheckboxFieldSkeleton.Hint>
                {hint}
              </SingleCheckboxFieldSkeleton.Hint>
            </div>
          </SingleCheckboxFieldSkeleton>
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
  */
