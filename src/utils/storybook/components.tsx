/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Heading } from "../../components/Heading"
import { Theme } from "../../theme"

export type StoryPropVariantProps = React.ComponentPropsWithoutRef<"div"> & {
  propName: string
  propValue: any
  displayValueInQuotes?: boolean
}

export function StoryPropVariant({
  propName,
  propValue,
  displayValueInQuotes = true,
  children,
  ...rest
}: StoryPropVariantProps) {
  return (
    <div {...rest}>
      <Heading
        as="h2"
        css={(theme: Theme) => ({ marginBottom: theme.space[4] })}
      >
        <span
          css={(theme: Theme) => ({
            fontFamily: theme.fonts.monospace,
            fontWeight: theme.fontWeights.body,
            fontSize: theme.fontSizes[1],
            backgroundColor: theme.colors.grey[10],
            padding: theme.space[2],
          })}
        >
          {propName}=
          {displayValueInQuotes ? `"${propValue}"` : `{${propValue}}`}
        </span>
      </Heading>
      {children}
    </div>
  )
}
