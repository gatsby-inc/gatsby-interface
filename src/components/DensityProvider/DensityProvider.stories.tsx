/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"
import { StoryUtils } from "../../utils/storybook"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import { DensityProvider, useDensity, Density } from "."
import { Theme } from "../../theme"

export default {
  title: `DensityProvider`,
  component: DensityProvider,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
}

function ExampleComponent() {
  const density = useDensity()

  return (
    <div
      css={(theme: Theme) => [
        {
          color: theme.colors.white,
          background: theme.colors.blue[80],
        },
        density === `DENSE` && {
          padding: `${theme.space[3]} ${theme.space[5]}`,
        },
        density === `DEFAULT` && {
          padding: `${theme.space[5]} ${theme.space[7]}`,
        },
        density === `LOOSE` && {
          padding: `${theme.space[7]} ${theme.space[9]}`,
        },
      ]}
    >
      Density: {density}
    </div>
  )
}

export const Basic = () => (
  <DensityProvider>
    <ExampleComponent />
  </DensityProvider>
)

const DENSITIES: Density[] = [`DENSE`, `DEFAULT`, `LOOSE`]

export const Sandbox = () => (
  <DensityProvider
    density={radios(`density`, radioKnobOptions<Density>(DENSITIES), `DEFAULT`)}
  >
    <ExampleComponent />
  </DensityProvider>
)

Sandbox.story = {
  parameters: {
    chromatic: { disable: true },
  },
}

export const Densities = () =>
  DENSITIES.map(density => (
    <DensityProvider key={density} density={density}>
      <ExampleComponent />
    </DensityProvider>
  ))
