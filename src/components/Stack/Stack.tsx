/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { getStackStyle, GetStackStyleProps } from "./Stack.helpers"

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never

type AllowedAs = `div` | `span` | `section`

export type StackProps = Omit<PropsOf<AllowedAs>, "ref"> & {
  children: React.ReactNode
  as?: AllowedAs
} & GetStackStyleProps

export const Stack: React.FC<StackProps> = ({
  children,
  as = `div`,
  gap = 0,
  align = `justify`,
  ...rest
}: StackProps) => {
  const Component = as

  return (
    <Component css={getStackStyle({ gap, align })} {...rest}>
      {children}
    </Component>
  )
}
