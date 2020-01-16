/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Theme } from "../../theme"

export const borderUtilCss = (t: Theme) => ({
  border: `2px solid ${t.colors.red[50]}`,
})

export const Container: React.FC<{ description: string }> = ({
  children,
  description,
}) => {
  return (
    <div
      css={(t: Theme) => ({
        width: `30rem`,

        "& > *": {
          marginTop: t.space[9],
        },
      })}
    >
      <p
        css={{
          textAlign: `center`,
        }}
      >
        {description}
      </p>
      {children}
    </div>
  )
}

export const Item: React.FC<{}> = ({ children, ...rest }) => (
  <div
    css={(t: Theme) => ({
      background: t.colors.grey[20],
      padding: `${t.space[3]} ${t.space[4]}`,
    })}
    {...rest}
  >
    {children}
  </div>
)
