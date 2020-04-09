import React from "react"
import { select } from "@storybook/addon-knobs"

type PossiblePropValues<TProps> = {
  [PropName in keyof TProps]: TProps[PropName][]
}

type PropVariation<TProps> = {
  [PropName in keyof TProps]: TProps[PropName]
}

type SandboxWithPropVariationsStory<TProps> = (
  propVariation: PropVariation<TProps>
) => React.ReactNode

export function sandboxWithPropVariations<TProps>(
  story: SandboxWithPropVariationsStory<TProps>,
  possiblePropValues: PossiblePropValues<TProps>
) {
  const possibleProps = Object.keys(possiblePropValues)
  const selectedProp = select(
    "- Show all variations for prop",
    possibleProps,
    possibleProps[0]
  ) as keyof PossiblePropValues<TProps>
  const propVariations = possiblePropValues[selectedProp]

  return (
    <React.Fragment>
      {(propVariations || []).map((propValue, idx) => {
        return (
          <React.Fragment key={idx}>
            {story({ [selectedProp]: propValue } as PropVariation<TProps>)}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
