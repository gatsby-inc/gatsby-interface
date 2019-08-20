/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { MdInfoOutline } from "react-icons/md"
import colors from "../../theme/colors"
import { hidden } from "ansi-colors"

const StoryUtils = {}

StoryUtils.Stack = ({ children, width }) => (
  <div
    css={{
      display: `grid`,
      justifyItems: `start`,
      gridGap: `2rem`,
      width: width,
    }}
  >
    {children}
  </div>
)

StoryUtils.Container = ({ children, secondaryBg = false }) => (
  <div
    css={{
      alignItems: `center`,
      background: secondaryBg ? colors.secondaryBackground : ``,
      display: `flex`,
      minHeight: `100vh`,
      justifyContent: `center`,
      width: `100%`,
      padding: `20px`,
    }}
  >
    {children}
  </div>
)

StoryUtils.Content = ({
  hint = `content placeholder`,
  width = `100%`,
  height = `6rem`,
}) => (
  <div
    css={{
      alignItems: `center`,
      background: colors.grey[5],
      color: colors.grey[50],
      display: `flex`,
      height: height,
      justifyContent: `center`,
      width: width,
    }}
  >
    {hint}
  </div>
)

StoryUtils.Default = () => (
  <div
    css={{
      alignItems: `center`,
      background: `#eee`,
      color: `green`,
      display: `inline-flex`,
      fontSize: `.9rem`,
      fontWeight: `normal`,
      marginLeft: `1em`,
      padding: `.3em .6em`,
      verticalAlign: `text-bottom`,

      svg: {
        marginRight: `0.2em`,
      },
    }}
  >
    <MdInfoOutline /> default
  </div>
)

export default StoryUtils