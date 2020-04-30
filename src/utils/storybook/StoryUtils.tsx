/** @jsx jsx */
import { jsx } from "@emotion/core"

import { MdInfoOutline } from "react-icons/md"
import colors from "../../theme/colors"
import { Badge } from "../../components/Badge"

type StoryUtilWrapperProps = Omit<JSX.IntrinsicElements["div"], "ref">

const StoryUtilsStack = ({ children, ...rest }: StoryUtilWrapperProps) => (
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

const StoryUtilsStackItem = ({ children, ...rest }: StoryUtilWrapperProps) => (
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

const StoryUtilsContainer = ({
  children,
  secondaryBg = false,
}: StoryUtilWrapperProps & { secondaryBg?: boolean }) => (
  <div
    css={theme => ({
      alignItems: `center`,
      background: secondaryBg ? colors.secondaryBackground : ``,
      display: `flex`,
      minHeight: `100vh`,
      justifyContent: `center`,
      width: `100%`,
      padding: theme.space[6],
    })}
  >
    {children}
  </div>
)

const StoryUtilsContent = ({
  hint = `content placeholder`,
  width = `100%`,
  height = `6rem`,
}: {
  hint?: React.ReactNode
  width?: string
  height?: string
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

const StoryUtilsDefault = () => (
  <Badge
    Icon={MdInfoOutline}
    size="S"
    tone="NEUTRAL"
    textVariant="DEFAULT"
    css={theme => ({ marginLeft: theme.space[4], verticalAlign: `middle` })}
  >
    Default
  </Badge>
)

export default {
  Stack: StoryUtilsStack,
  StackItem: StoryUtilsStackItem,
  Container: StoryUtilsContainer,
  Content: StoryUtilsContent,
  Default: StoryUtilsDefault,
}
