/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { ConcealedValue } from "./"

storiesOf(`ConcealedValue`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`8 character length value`, () => {
    return (
      <StoryUtils.Container>
        <ConcealedValue value="nD@m3.mV" />
      </StoryUtils.Container>
    )
  })
  .add(`64 character length value`, () => {
    return (
      <StoryUtils.Container>
        <ConcealedValue value="nmtyasyyayFYvCejFA2cykxn8QTcARZX9NNnhMzTYC$Cg@HMLAqV3UfxYkJgUkfB" />
      </StoryUtils.Container>
    )
  })
