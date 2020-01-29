/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import Text from "./Text"

storiesOf(`Text`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`rendered 'as'`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Text as={`span`}>Text rendered as &lt;span&gt; tag</Text>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`variants`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Text>
          Text variant - PRIMARY <StoryUtils.Default />
        </Text>
        <Text variant={`EMPHASIZED`}>Text variant - EMPHASIZED</Text>
        <Text variant={`ERROR`}>Text variant - ERROR</Text>
        <Text variant={`LEDE`}>
          Text variant - LEDE: Doggo ipsum mlem snoot adorable doggo you are
          doing me the shock doge, mlem puggo boofers. Blep shoober heckin good
          boys smol, ruff thicc, dat tungg tho shooberino.
        </Text>
        <Text variant={`EMPHASIZED_LEDE`}>
          Text variant - EMPHASIZED_LEDE: Doggo ipsum mlem snoot adorable doggo
          you are doing me the shock doge, mlem puggo boofers. Blep shoober
          heckin good boys smol, ruff thicc, dat tungg tho shooberino.
        </Text>
        <Text variant={`EMPHASIZED_LEDE`} tone={`BRAND`}>
          Text variant - EMPHASIZED_LEDE with BRAND tone: Doggo ipsum mlem snoot
          adorable doggo you are doing me the shock doge, mlem puggo boofers.
          Blep shoober heckin good boys smol, ruff thicc, dat tungg tho
          shooberino.
        </Text>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`tones`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Text tone={`NEUTRAL`}>
          Text tone - NEUTRAL <StoryUtils.Default />
        </Text>
        <Text tone={`BRAND`}>Text tone - BRAND</Text>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`sizes`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Text size={`S`}>Text size - S. </Text>
        <Text size={`M`}>
          Text size - M <StoryUtils.Default />
        </Text>
        <Text size={`L`}>Text size - L</Text>
        <Text size={`XL`}>Text size - XL</Text>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`with children`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Text>
          <span>Wrapped with a &lt;span&gt; tag</span>
        </Text>
        <Text>
          <strong>Wrapped with a &lt;strong&gt; tag</strong>
        </Text>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
