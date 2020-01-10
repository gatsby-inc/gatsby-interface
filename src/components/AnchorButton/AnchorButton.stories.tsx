/** @jsx jsx */

import { storiesOf } from "@storybook/react"

import README_MAIN from "./README_MAIN.md"
import README_ICONS from "../Button/README_ICONS.md"
import customStyling from "../Button/README_customStyling.md"
import { AnchorButton } from "./"
import {
  showcaseVariants,
  showcaseSizes,
  showcaseTones,
  showcaseCustomStyles,
  showcaseIcons,
} from "../Button/utils/storybook-styles"

storiesOf(`buttons/AnchorButton`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README_MAIN,
      includePropTables: [AnchorButton],
    },
  })
  .add(...showcaseVariants(AnchorButton, {}))
  .add(...showcaseSizes(AnchorButton, {}))
  .add(...showcaseTones(AnchorButton, {}))
  .add(...showcaseCustomStyles(AnchorButton, {}, customStyling))
  .add(...showcaseIcons(AnchorButton, {}, README_ICONS))
