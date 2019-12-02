/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"

import ContentBox from "./ContentBox"
import Readme from "./README.md"

storiesOf(`ContentBox`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: Readme,
    },
  })

  .add(`'toggle' (default) behaviour with a static button`, () => (
    <ContentBox>
      <ContentBox.Content variant="PRIMARY">
        This is a PRIMARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Button>Toggle</ContentBox.Button>
    </ContentBox>
  ))
  .add(`'toggle' behaviour with buttons swap `, () => (
    <ContentBox>
      <ContentBox.Content variant="PRIMARY">
        This is a PRIMARY content of this ContentBox
        <ContentBox.Button>Show SECONDARY content</ContentBox.Button>
      </ContentBox.Content>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
        <ContentBox.Button>Show PRIMARY content</ContentBox.Button>
      </ContentBox.Content>
    </ContentBox>
  ))
  .add(`'unfold' behaviour with  a static button`, () => (
    <ContentBox behaviour="UNFOLD">
      <ContentBox.Content>
        This is a PRIMARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Button>Toggle</ContentBox.Button>
    </ContentBox>
  ))
  .add(`'unfold' behaviour with buttons swap`, () => (
    <ContentBox behaviour="UNFOLD">
      <ContentBox.Content>
        This is a PRIMARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Button hiddenIf="OPEN">Unfold</ContentBox.Button>
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
        <ContentBox.Button>Fold</ContentBox.Button>
      </ContentBox.Content>
    </ContentBox>
  ))
  .add(`'unfold' behaviour with no PRIMARY content`, () => (
    <ContentBox behaviour="UNFOLD">
      <ContentBox.Content variant="SECONDARY">
        This is a SECONDARY content of this ContentBox
      </ContentBox.Content>
      <ContentBox.Button>Toggle</ContentBox.Button>
    </ContentBox>
  ))

/*
  .add(`tags/components`, () => {
    hrefTo(`Href`, `log`).then(action(`URL of this story`))

    return (
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          "& > *": { margin: `20px` },
        }}
      >
        <BaseButton>Button</BaseButton>
        <BaseButton href="https://gatsbyjs.com">&lt;a&gt; tag</BaseButton>
        <BaseButton to="/">Gatsby &lt;Link&gt; component</BaseButton>
      </div>
    )
  })
*/
