/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { MdHelpOutline } from "react-icons/md"
import { ContentBox } from "../../skeletons/ContentBox"
import { Button } from "../Button"
import { Heading } from "../Heading"
import {
  breakpoints,
  fontFamilies,
  spaces,
} from "../../../utils/presets"
import cardStyles from "../../../theme/styles/card"
import fontSizes from "../../../theme/fontSizes"
import colors from "../../../theme/colors"

function SettingsBlock({ children, title, description, docUrl, ...rest }) {
  return (
    <ContentBox
      css={{
        ...cardStyles.frame,
        width: `100%`,
      }}
      {...rest}
    >
      {title && (
        <SettingsBlock.Header>
          {title && (
            <SettingsBlock.Title>
              {title} {docUrl && <SettingsBlock.Doclink to={docUrl} />}
            </SettingsBlock.Title>
          )}
          {description && (
            <SettingsBlock.Description>{description}</SettingsBlock.Description>
          )}
        </SettingsBlock.Header>
      )}

      {children}
    </ContentBox>
  )
}

SettingsBlock.propTypes = {
  children: PropTypes.any,
}

SettingsBlock.Header = ({ children, ...rest }) => (
  <header
    css={{
      fontSize: fontSizes[4],
      ...cardStyles.space.header,
    }}
    {...rest}
  >
    {children}
  </header>
)

SettingsBlock.Title = ({ children, ...rest }) => (
  <Heading
    as={`h3`}
    css={{
      alignItems: `center`,
      display: `flex`,
      fontSize: fontSizes[4],
      lineHeight: 1,
      minHeight: `2.25rem`,

      [`&:last-child`]: {
        marginBottom: `-.5rem`,
      },
    }}
    {...rest}
  >
    {children}
  </Heading>
)

SettingsBlock.Doclink = ({ children, ...rest }) => (
  <Button
    variant={`GHOST`}
    tone={`NEUTRAL`}
    css={{
      marginLeft: spaces[`2xs`],
    }}
    {...rest}
  >
    <MdHelpOutline />
  </Button>
)

SettingsBlock.Description = ({ children, ...rest }) => (
  <p
    css={{
      color: colors.grey[50],
      fontSize: fontSizes[1],
      fontFamily: fontFamilies.bodyFontFamily,
      lineHeight: 1.4,
      margin: 0,

      "&:first-of-type": {
        marginTop: spaces.s,
      },

      "&:not(:last-child)": {
        marginBottom: spaces.xs,
      },

      [`@media(min-width: ${breakpoints.desktop}px)`]: {
        gridColumn: `1 / 2`,
      },
    }}
    {...rest}
  >
    {children}
  </p>
)

SettingsBlock.Content = ({ children, ...rest }) => (
  <div
    css={{
      display: `flex`,
      flexDirection: `column`,
    }}
    {...rest}
  >
    {children}
  </div>
)

export default SettingsBlock
