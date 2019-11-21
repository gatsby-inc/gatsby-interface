/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README.md"
import { action } from "@storybook/addon-actions"
import InputField from "../components/InputField"
import InputFieldBlock from "../components/InputFieldBlock"

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

    return (
      <StoryUtils.Container>
        <InputField id="input-example" hasError={!!error} hasHint={!!hint}>
          <InputField.Wrapper>
            <InputField.Label>Input</InputField.Label>
            <InputField.Control
              onChange={e => action(`Change`)(e.target.value)}
            />
            <InputField.Error>{error}</InputField.Error>
            <InputField.Hint>{hint}</InputField.Hint>
          </InputField.Wrapper>
        </InputField>

        <InputFieldBlock
          id="input-example"
          error={error}
          hint={hint}
          onChange={e => action(`Change`)(e.target.value)}
          css={{
            border: `2px dotted blue`,
          }}
        ></InputFieldBlock>
      </StoryUtils.Container>
    )
  })
