/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { Heading } from "./"

storiesOf(`Heading`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`redered 'as'`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Heading as={`h1`}>Heading rendered as &lt;h1&gt; tag</Heading>
        <Heading>
          Heading rendered as &lt;h2&gt; tag <StoryUtils.Default />
        </Heading>
        <Heading as={`h3`}>Heading rendered as &lt;h3&gt; tag</Heading>
        <Heading as={`h4`}>Heading rendered as &lt;h4&gt; tag</Heading>
        <Heading as={`h5`}>Heading rendered as &lt;h5&gt; tag</Heading>
        <Heading as={`span`}>Heading rendered as &lt;span&gt; tag</Heading>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`variants`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Heading>
          Heading variant - PRIMARY <StoryUtils.Default />
        </Heading>
        <Heading variant={`EMPHASIZED`}>Heading variant - EMPHASIZED</Heading>
        <Heading variant={`LIGHT`}>Heading variant - LIGHT</Heading>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`tones`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Heading tone={`NEUTRAL`}>
          Heading tone - NEUTRAL <StoryUtils.Default />
        </Heading>
        <Heading tone={`BRAND`}>Heading tone - BRAND</Heading>
        <Heading tone={`DANGER`}>Heading tone - DANGER</Heading>
        <Heading tone={`SUCCESS`}>Heading tone - SUCCESS</Heading>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
