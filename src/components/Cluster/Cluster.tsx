/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { getClusterStyle, GetClusterStyleProps } from "./Cluster.helpers"

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never

type AllowedAs = `div` | `span` | `section`

export type ClusterProps = Omit<PropsOf<AllowedAs>, "ref"> & {
  children: React.ReactNode
  as?: AllowedAs
} & GetClusterStyleProps

export const Cluster: React.FC<ClusterProps> = ({
  children,
  as = `div`,
  gap = 0,
  verticalGap = 0,
  align = `left`,
  ...rest
}: ClusterProps) => {
  const Component = as

  return (
    <Component css={getClusterStyle({ gap, verticalGap, align })} {...rest}>
      {/* intermediary wrapper needed to remove outer margins*/}
      <div>{children}</div>
    </Component>
  )
}
