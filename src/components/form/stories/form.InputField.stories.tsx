/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import InputField from "../components/InputField"
import InputFieldBlock from "../components/InputFieldBlock"
import { FormFieldLabelSize } from "../components/FormField"
import { enumToOptions } from "../../../utils/helpers"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]
const LABEL_SIZE_OPTIONS = LABEL_SIZES.reduce(enumToOptions, {})

const Wrapper: React.FC<{}> = ({ children }) => (
  <div
    css={{
      display: `flex`,
      flexDirection: `column`,
      maxWidth: `80%`,
      width: `25rem`,
    }}
  >
    {children}
  </div>
)

storiesOf(`form/InputField`, module)
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
    const size: FormFieldLabelSize = radios(`size`, LABEL_SIZE_OPTIONS, `M`)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputField id="input-example-1" hasError={!!error} hasHint={!!hint}>
            <InputField.Wrapper>
              <InputField.Label size={size}>Last name</InputField.Label>
              <InputField.Control
                onChange={e => action(`Change`)(e.target.value)}
              />
              <InputField.Hint>{hint}</InputField.Hint>
              <InputField.Error>{error}</InputField.Error>
            </InputField.Wrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`InputFieldBlock`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const size: FormFieldLabelSize = radios(`size`, LABEL_SIZE_OPTIONS, `M`)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputFieldBlock
            id="input-example-2a"
            label="First name"
            labelSize={size}
            onChange={e => action(`Change`)(e.target.value)}
            error={error}
            hint={hint}
          />
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`Label sizes`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputFieldBlock
            id="input-example-3a"
            label="Label size L"
            labelSize="L"
          ></InputFieldBlock>
          <InputFieldBlock
            id="input-example-3b"
            label="Label size M (default value)"
            labelSize="M"
          ></InputFieldBlock>
          <InputField id="input-example-3d" hasError={false} hasHint={false}>
            <InputField.Wrapper>
              <InputField.Label size="S">Label size S</InputField.Label>
              <InputField.Control />
            </InputField.Wrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`error & hint styles`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputFieldBlock
            id="input-example-4a"
            label="Last name"
            error={`Short error message.`}
          ></InputFieldBlock>

          <InputFieldBlock
            id="input-example-4b"
            label="Last name"
            error={`Long error message ... ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
          ></InputFieldBlock>

          <InputFieldBlock
            id="input-example-4c"
            label="Last name"
            hint={`Really short hint.`}
          ></InputFieldBlock>

          <InputFieldBlock
            id="input-example-4d"
            label="Last name"
            hint={`Much longer hint ... excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          ></InputFieldBlock>

          <InputFieldBlock
            id="input-example-4e"
            label="Last name"
            error={`Field with error `}
            hint={`and Hint at the same time `}
          ></InputFieldBlock>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`required`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputFieldBlock
            id="input-example-5a"
            label="First name"
            required={true}
          ></InputFieldBlock>

          <InputField id="input-example-5b">
            <InputField.Wrapper>
              <InputField.Label isRequired={true}>First name</InputField.Label>
              <InputField.Control required />
            </InputField.Wrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`disbled`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputFieldBlock
            id="input-example-5a"
            label="First name"
            disabled
          ></InputFieldBlock>

          <InputField id="input-example-5b">
            <InputField.Wrapper>
              <InputField.Label>First name</InputField.Label>
              <InputField.Control disabled />
            </InputField.Wrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
