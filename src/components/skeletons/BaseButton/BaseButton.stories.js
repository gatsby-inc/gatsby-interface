/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { hrefTo } from "@storybook/addon-links"
import { action } from "@storybook/addon-actions"
import BaseButton from "./BaseButton"
import Readme from "./README.md"

storiesOf(`skeletons/BaseButton`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: Readme,
    },
  })
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
