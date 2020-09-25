import * as React from "react"
import { DecoratorFn } from "@storybook/react"
import { Global } from "@emotion/core"
import isChromatic from "storybook-chromatic/isChromatic"
import { isA11yTest } from "./envUtils"

export const disableAnimationsDecorator: DecoratorFn = story => (
  <React.Fragment>
    <Global
      styles={() => [
        (isChromatic() || isA11yTest()) && {
          // Make animations instant so that Chromatic can take proper snapshots
          "*, :before, :after": {
            animationDuration: `0s !important`,
            animationDelay: `0s !important`,
          },
        },
      ]}
    />
    {story()}
  </React.Fragment>
)
