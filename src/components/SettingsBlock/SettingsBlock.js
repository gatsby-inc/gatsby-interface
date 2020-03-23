/** @jsx jsx */
import { jsx } from "@emotion/core"

import PropTypes from "prop-types"
import { MdHelpOutline } from "react-icons/md"

import { ContentBox } from "../ContentBox"
import { LinkButton } from "../LinkButton"
import { Heading } from "../Heading"
import fonts from "../../theme/fonts"
import breakpoints from "../../theme/breakpoints"
import space from "../../theme/space"
import fontSizes from "../../theme/fontSizes"
import colors from "../../theme/colors"

function SettingsBlock({ children, title, description, docUrl, ...rest }) {
  return (
    <ContentBox
      css={theme => [
        theme.cardStyles.frame,
        {
          width: `100%`,
        },
      ]}
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
    css={theme => ({
      fontSize: theme.fontSizes[4],
      padding: `${theme.space[7]} ${theme.space[9]} ${theme.space[8]}`,
    })}
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

SettingsBlock.Doclink = ({ ...rest }) => (
  <LinkButton
    variant={`GHOST`}
    tone={`NEUTRAL`}
    css={{
      marginLeft: space[2],
    }}
    {...rest}
  >
    <MdHelpOutline />
  </LinkButton>
)

SettingsBlock.Description = ({ children, ...rest }) => (
  <p
    css={{
      color: colors.grey[50],
      fontSize: fontSizes[1],
      fontFamily: fonts.system,
      lineHeight: 1.4,
      margin: 0,

      "&:first-of-type": {
        marginTop: space[4],
      },

      "&:not(:last-child)": {
        marginBottom: space[3],
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
