/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import README from "../README_FORM_FIELD.md"
import { StoryUtils } from "../../../utils/storybook"
import {
  InputField,
  InputFieldWrapper,
  InputFieldLabel,
  InputFieldControl,
  InputFieldHint,
  InputFieldError,
} from "../components/InputField"
import {
  TextAreaField,
  TextAreaFieldWrapper,
  TextAreaFieldLabel,
  TextAreaFieldControl,
  TextAreaFieldHint,
  TextAreaFieldError,
} from "../components/TextAreaField"
import {
  SelectField,
  SelectFieldWrapper,
  SelectFieldLabel,
  SelectFieldControl,
  SelectFieldHint,
  SelectFieldError,
} from "../components/SelectField"
import {
  CheckboxField,
  CheckboxFieldWrapper,
  CheckboxFieldControl,
  CheckboxFieldLabel,
  CheckboxFieldHint,
  CheckboxFieldError,
} from "../components/CheckboxField"
import CheckboxGroupField from "../components/CheckboxGroupField"
import RadioButtonField from "../components/RadioButtonField"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { enumToOptions } from "../../../utils/helpers"
import { Wrapper } from "./stories.utils"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]
const LABEL_SIZE_OPTIONS = LABEL_SIZES.reduce(enumToOptions, {})

const authors = [
  ``,
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

const categories = [`article`, `essay`, `memories`].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

const tags = [`one`, `two`, `three`, `four`, `five`].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

storiesOf(`form/FormField`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Shared components`, () => {
    const hint = text(`Hint`, `This is a hint`)
    const error = text(`Error`, `This is an error message`)
    const size: FormFieldLabelSize = radios(
      `label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )

    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputField id="example-1a" hasError={!!error} hasHint={!!hint}>
            <InputFieldWrapper>
              <InputFieldLabel size={size}>Title</InputFieldLabel>
              <InputFieldControl
                onChange={e => action(`Change`)(e.target.value)}
              />
              <InputFieldHint>{hint}</InputFieldHint>
              <InputFieldError>{error}</InputFieldError>
            </InputFieldWrapper>
          </InputField>

          <TextAreaField id="example-1b" hasError={!!error} hasHint={!!hint}>
            <TextAreaFieldWrapper>
              <TextAreaFieldLabel size={size}>Description</TextAreaFieldLabel>
              <TextAreaFieldControl
                onChange={e => action(`Change`)(e.target.value)}
              />
              <TextAreaFieldHint>{hint}</TextAreaFieldHint>
              <TextAreaFieldError>{error}</TextAreaFieldError>
            </TextAreaFieldWrapper>
          </TextAreaField>

          <SelectField id="example-1c" hasError={!!error} hasHint={!!hint}>
            <SelectFieldWrapper>
              <SelectFieldLabel size={size}>Author</SelectFieldLabel>
              <SelectFieldControl
                options={authors}
                onChange={e => action(`Change`)(e.target.value)}
              />
              <SelectFieldHint>{hint}</SelectFieldHint>
              <SelectFieldError>{error}</SelectFieldError>
            </SelectFieldWrapper>
          </SelectField>

          <CheckboxGroupField
            id="example-1d"
            hasError={!!error}
            hasHint={!!hint}
            layout="horizontal"
          >
            <CheckboxGroupField.Label size={size}>
              Tags
            </CheckboxGroupField.Label>
            <CheckboxGroupField.Options>
              {tags.map(({ label, value }) => (
                <CheckboxGroupField.OptionWrapper key={value}>
                  <CheckboxGroupField.Option
                    value={value}
                    name="checkbox-group"
                  />
                  <CheckboxGroupField.OptionLabel
                    size={size}
                    optionValue={value}
                  >
                    {label}
                  </CheckboxGroupField.OptionLabel>
                </CheckboxGroupField.OptionWrapper>
              ))}
            </CheckboxGroupField.Options>
            <CheckboxGroupField.Hint>{hint}</CheckboxGroupField.Hint>
            <CheckboxGroupField.Error>{error}</CheckboxGroupField.Error>
          </CheckboxGroupField>

          <RadioButtonField id="example-1e" hasError={!!error} hasHint={!!hint}>
            <RadioButtonField.Label size={size}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {categories.map(({ label, value }) => (
                <RadioButtonField.OptionWrapper key={value}>
                  <RadioButtonField.Option
                    value={value}
                    name="checkbox-group-1"
                  />
                  <RadioButtonField.OptionLabel size={size} optionValue={value}>
                    {label}
                  </RadioButtonField.OptionLabel>
                </RadioButtonField.OptionWrapper>
              ))}
            </RadioButtonField.Options>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
          </RadioButtonField>

          <CheckboxField id="example-1f" hasError={!!error} hasHint={!!hint}>
            <CheckboxFieldWrapper>
              <CheckboxFieldControl
                onChange={e => action(`Change`)(e.target.value)}
              />
              <CheckboxFieldLabel size={`S`}>
                I have read and agree with the <a href="/">Terms</a> and{" "}
                <a href="/">Privacy Policy</a>. Lorem Ipsum is simply dummy text
                of the printing and typesetting industry.
              </CheckboxFieldLabel>

              <CheckboxFieldHint>{hint}</CheckboxFieldHint>
              <CheckboxFieldError>{error}</CheckboxFieldError>
            </CheckboxFieldWrapper>
          </CheckboxField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`Label sizes`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputField id="example-2a" hasError={false} hasHint={false}>
            <InputFieldWrapper>
              <InputFieldLabel size="L">Label size L</InputFieldLabel>
              <InputFieldControl />
            </InputFieldWrapper>
          </InputField>
          <InputField id="example-2b" hasError={false} hasHint={false}>
            <InputFieldWrapper>
              <InputFieldLabel size="M">
                Label size M (default value)
              </InputFieldLabel>
              <InputFieldControl />
            </InputFieldWrapper>
          </InputField>
          <InputField id="example-2" hasError={false} hasHint={false}>
            <InputFieldWrapper>
              <InputFieldLabel size="S">Label size S</InputFieldLabel>
              <InputFieldControl />
            </InputFieldWrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`Required`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputField id="example-3a">
            <InputFieldWrapper>
              <InputFieldLabel isRequired={true}>First name</InputFieldLabel>
              <InputFieldControl required />
            </InputFieldWrapper>
          </InputField>

          <TextAreaField id="example-3b">
            <TextAreaFieldWrapper>
              <TextAreaFieldLabel isRequired={true}>
                Description
              </TextAreaFieldLabel>
              <TextAreaFieldControl required />
            </TextAreaFieldWrapper>
          </TextAreaField>

          <RadioButtonField id="example-3c">
            <RadioButtonField.Label isRequired={true}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {categories.map(({ label, value }) => (
                <RadioButtonField.OptionWrapper key={value}>
                  <RadioButtonField.Option
                    value={value}
                    name="checkbox-group-1"
                  />
                  <RadioButtonField.OptionLabel optionValue={value}>
                    {label}
                  </RadioButtonField.OptionLabel>
                </RadioButtonField.OptionWrapper>
              ))}
            </RadioButtonField.Options>
          </RadioButtonField>

          <InputField id="example-3d">
            <InputFieldWrapper>
              <InputFieldLabel isRequired={true}>
                Give us your <strong>name</strong>
              </InputFieldLabel>
              <InputFieldControl required />
            </InputFieldWrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`Error & Hint`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputField id="example-4a" hasError={true}>
            <InputFieldWrapper>
              <InputFieldLabel>First name</InputFieldLabel>
              <InputFieldControl />
              <InputFieldHint></InputFieldHint>
              <InputFieldError>Short error message.</InputFieldError>
            </InputFieldWrapper>
          </InputField>

          <InputField id="example-4b" hasError={true}>
            <InputFieldWrapper>
              <InputFieldLabel>First name</InputFieldLabel>
              <InputFieldControl />
              <InputFieldHint></InputFieldHint>
              <InputFieldError>
                Long error message ... ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </InputFieldError>
            </InputFieldWrapper>
          </InputField>

          <InputField id="example-4c" hasHint={true}>
            <InputFieldWrapper>
              <InputFieldLabel>First name</InputFieldLabel>
              <InputFieldControl />
              <InputFieldHint>Short hint.</InputFieldHint>
              <InputFieldError></InputFieldError>
            </InputFieldWrapper>
          </InputField>

          <InputField id="example-4d" hasHint={true}>
            <InputFieldWrapper>
              <InputFieldLabel>First name</InputFieldLabel>
              <InputFieldControl />
              <InputFieldHint>
                Long hint ... excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </InputFieldHint>
              <InputFieldError></InputFieldError>
            </InputFieldWrapper>
          </InputField>

          <InputField id="example-4e" hasHint={true} hasError={true}>
            <InputFieldWrapper>
              <InputFieldLabel>First name</InputFieldLabel>
              <InputFieldControl />
              <InputFieldHint>
                Long hint ... excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </InputFieldHint>
              <InputFieldError>
                Long error message ... ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </InputFieldError>
            </InputFieldWrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

/*


           <RadioButtonField
            id="checkbox-group-example-3"
            hasError={!!error}
            hasHint={!!hint}
            layout="horizontal"
          >
            <RadioButtonField.Label size={size}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {categories.map(({ label, value }) => (
                <React.Fragment key={value}>
                  <RadioButtonField.Option
                    value={value}
                    name="checkbox-group-2"
                  />
                  <RadioButtonField.OptionLabel size={size} optionValue={value}>
                    {label}
                  </RadioButtonField.OptionLabel>
                </React.Fragment>
              ))}
            </RadioButtonField.Options>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
          </RadioButtonField>

          <RadioButtonField
            id="checkbox-group-example-2"
            hasError={!!error}
            hasHint={!!hint}
            variant="framed"
          >
            <RadioButtonField.Label size={size}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {categories.map(({ label, value }) => (
                <React.Fragment key={value}>
                  <RadioButtonField.Option
                    value={value}
                    name="checkbox-group-3"
                  />
                  <RadioButtonField.OptionLabel size={size} optionValue={value}>
                    {label}
                  </RadioButtonField.OptionLabel>
                </React.Fragment>
              ))}
            </RadioButtonField.Options>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
          </RadioButtonField>

          <RadioButtonField
            id="checkbox-group-example-4"
            hasError={!!error}
            hasHint={!!hint}
          >
            <RadioButtonField.Label size={size}>
              Category
            </RadioButtonField.Label>
            <RadioButtonField.Options>
              {categories.map(({ label, value }) => (
                <RadioButtonField.OptionFrame key={value}>
                  <RadioButtonField.Option
                    value={value}
                    name="checkbox-group-4"
                  />
                  <RadioButtonField.OptionLabel size={size} optionValue={value}>
                    {label}
                  </RadioButtonField.OptionLabel>
                </RadioButtonField.OptionFrame>
              ))}
            </RadioButtonField.Options>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
          </RadioButtonField>

  */
