import React from "react"
import { text } from "@storybook/addon-knobs"

import { getStoryOptions } from "../../../utils/storybook"
import README from "../README.md"
import {
  RadioButtonFieldSkeleton,
  RadioButtonFieldSkeletonLabel,
  RadioButtonFieldSkeletonOption,
  RadioButtonFieldSkeletonOptionLabel,
  RadioButtonFieldSkeletonError,
  RadioButtonFieldSkeletonHint,
} from "../components/RadioButtonFieldSkeleton"

export default {
  title: `Form/Skeletons`,
  parameters: {
    layout: `padded`,
    options: {
      showRoots: true,
    },
    readme: {
      sidebar: README,
    },
  },
}

export const Basic = () => {
  const hint = text(`Hint`, ``)
  const error = text(`Error`, ``)

  return (
    <div>
      <RadioButtonFieldSkeleton
        id="radio-group-example"
        hasError={!!error}
        hasHint={!!hint}
      >
        <RadioButtonFieldSkeletonLabel>
          Radio button
        </RadioButtonFieldSkeletonLabel>
        {getStoryOptions("short").map(({ label, value }) => (
          <React.Fragment key={value}>
            <RadioButtonFieldSkeletonOption value={value} name="radio-button" />
            <RadioButtonFieldSkeletonOptionLabel optionValue={value}>
              {label}
            </RadioButtonFieldSkeletonOptionLabel>
          </React.Fragment>
        ))}
        <RadioButtonFieldSkeletonError>{error}</RadioButtonFieldSkeletonError>
        <RadioButtonFieldSkeletonHint>{hint}</RadioButtonFieldSkeletonHint>
      </RadioButtonFieldSkeleton>
    </div>
  )
}
