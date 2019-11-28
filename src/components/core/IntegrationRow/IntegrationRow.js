/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { MdEdit, MdArrowForward, MdFlashOn, MdLaunch } from "react-icons/md"

import { ContentBox } from "../../ContentBox"
import { Link } from "../../Link"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Badge } from "../Badge"
import { spaces, fontFamilies } from "../../../utils/presets"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"
import cardStyles from "../../../theme/styles/card"
import { AnchorButton } from "../AnchorButton"

function IntegrationRow({
  isConnected = false,
  title,
  logoUrl,
  button = {},
  link = {},
  details,
  detailsVariant = `PRIMARY`,
  children,
  ...rest
}) {
  const { label: linkLabel, ...linkRest } = link
  const { label: buttonLabel, onClick: buttonOnClick, ...buttonRest } = button

  return (
    <ContentBox
      state={{ boxState: isConnected ? `OPEN` : `CLOSED` }}
      css={{
        alignItems: `center`,
        background: colors.white,
        borderTop: `1px solid ${colors.standardLine}`,
        display: `grid`,
        gridGap: spaces.m,
        gridTemplateColumns: `auto auto 1fr`,
        width: `100%`,
        ...cardStyles.space[isConnected ? `activeRow` : `row`],

        "&:last-of-type": {
          marginBottom: 0,
        },
      }}
      {...rest}
    >
      {logoUrl && (
        <IntegrationRow.Logo>
          <img src={logoUrl} alt={title} />
        </IntegrationRow.Logo>
      )}
      {buttonOnClick && (
        <IntegrationRow.EditButton
          label={buttonLabel}
          onClick={buttonOnClick}
          {...buttonRest}
        />
      )}
      {linkLabel && (
        <IntegrationRow.EditButton
          Component={AnchorButton}
          label={linkLabel}
          {...linkRest}
        />
      )}

      {details && (
        <IntegrationRow.Content
          details={details}
          detailsVariant={detailsVariant}
        />
      )}

      {isConnected && (
        <IntegrationRow.Badge>
          Connected <MdFlashOn />
        </IntegrationRow.Badge>
      )}
      {children}
    </ContentBox>
  )
}

IntegrationRow.propTypes = {
  children: PropTypes.any,
  isConnected: PropTypes.bool,
}

IntegrationRow.Logo = ({ children }) => (
  <span
    css={{
      display: `flex`,
      gridColumn: `1 / 2`,
      gridRow: `1 / 2`,

      [`img, svg`]: {
        height: `24px`,
        width: `auto`,
        margin: 0,
      },
    }}
  >
    {children}
  </span>
)

IntegrationRow.Badge = props => (
  <Badge
    css={{
      gridColumn: `2 / 3`,
      gridRow: `1 / 2`,
    }}
    {...props}
  />
)

IntegrationRow.EditButton = ({
  Component = Button,
  children,
  label = `Connect`,
  ...rest
}) => {
  const {
    state: { boxState },
    boxTone,
  } = ContentBox.useContentBoxContext()

  const isConnected = boxState === `OPEN`

  return (
    <Component
      variant={`GHOST`}
      tone={boxTone !== `NEUTRAL` ? boxTone : undefined}
      css={{
        gridColumn: `3 / 4`,
        gridRow: `1 / 2`,
        justifySelf: `end`,
      }}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          {!isConnected ? label : `Edit`}
          {!isConnected ? <MdArrowForward /> : <MdEdit />}
        </Fragment>
      )}
    </Component>
  )
}

function renderData(data = [], primaryStyling) {
  if (data.length > 0) {
    return data.map(item => (
      <div
        key={`data-${item.name}`}
        css={{
          display: primaryStyling ? `flex` : `grid`,
          flexDirection: primaryStyling ? `column` : `row`,
          fontSize: fontSizes[1],
          gridTemplateColumns: primaryStyling ? `0` : `0.35fr 1fr`,
          marginTop: primaryStyling ? `inherit` : spaces.s,
          "&:first-of-type": {
            marginTop: primaryStyling ? `inherit` : `0`,
          },
        }}
      >
        <Heading
          as="span"
          variant="LIGHT"
          css={{
            fontFamily: primaryStyling
              ? fonts.header.join(`,`)
              : fontFamilies.system.join(`,`),
            textTransform: primaryStyling ? `uppercase` : `capitalize`,
          }}
        >
          {item.name}
        </Heading>
        <span
          css={{
            marginTop: primaryStyling ? spaces[`2xs`] : `0`,
            color: colors.grey[90],
          }}
        >
          {item.url ? (
            <Link href={item.url} target="_blank">
              {item.value}
              <MdLaunch />
            </Link>
          ) : (
            item.value
          )}
        </span>
      </div>
    ))
  }

  return null
}

IntegrationRow.Content = ({
  children,
  details,
  detailsVariant = `PRIMARY`,
  variant = `SECONDARY`,
  ...rest
}) => {
  const primaryStyling = detailsVariant === `PRIMARY`
  return details || children ? (
    <ContentBox.Content
      variant={variant}
      css={{
        gridColumn: `1 / 4`,
        display: `grid`,
        gridTemplateColumns: primaryStyling ? `1.5fr 1fr` : `1.5fr`,
      }}
      {...rest}
    >
      {!details ? children : renderData(details, primaryStyling)}
    </ContentBox.Content>
  ) : null
}

export default IntegrationRow
