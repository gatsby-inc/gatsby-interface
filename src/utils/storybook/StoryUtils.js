/** @jsx jsx */
import { jsx } from "@emotion/core"

import { MdInfoOutline } from "react-icons/md"
import colors from "../../theme/colors"
import { Chip } from "../../components/Chip"

const StoryUtils = {}

StoryUtils.Stack = ({ children, ...rest }) => (
  <div
    css={{
      display: `grid`,
      justifyItems: `start`,
      gridGap: `2rem`,
    }}
    {...rest}
  >
    {children}
  </div>
)

StoryUtils.StackItem = ({ children, ...rest }) => (
  <div
    css={{
      alignItems: `center`,
      display: `flex`,
    }}
    {...rest}
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
  <Chip
    icon={<MdInfoOutline />}
    css={theme => ({ marginLeft: theme.space[8], verticalAlign: `middle` })}
  >
    Default
  </Chip>
)

export default StoryUtils
