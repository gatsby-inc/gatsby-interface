/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { MdEdit, MdArrowForward, MdFlashOn } from "react-icons/md"
import { ContentBox } from "../../skeletons/ContentBox"
import { Link } from "../../Link"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Badge } from "../Badge"
import { spaces } from "../../../utils/presets"
import fontSizes from "../../../theme/fontSizes"
import colors from "../../../theme/colors"
import cardStyles from "../../../theme/styles/card"

function IntegrationRow({
  isConnected = false,
  title,
  logoUrl,
  button = {},
  link = {},
  details,
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
        <IntegrationRow.EditButton label={linkLabel} {...linkRest} />
      )}

      {details && <IntegrationRow.Content details={details} />}

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

IntegrationRow.Logo = ({ children, ...rest }) => (
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

IntegrationRow.EditButton = ({ children, label = `Connect`, ...rest }) => {
  const {
    state: { boxState },
    boxTone,
  } = ContentBox.useContentBoxContext()

  const isConnected = boxState === `OPEN`

  return (
    <Button
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
    </Button>
  )
}

function renderData(data = []) {
  if (data.length > 0) {
    return data.map((item, idx) => (
      <div
        key={`data-${item.name}`}
        css={{
          display: `flex`,
          flexDirection: `column`,
          fontSize: fontSizes[1],
        }}
      >
        <Heading as="span" variant="LIGHT">
          {item.name}
        </Heading>
        <span
          css={{
            marginTop: spaces[`2xs`],
            color: colors.grey[90],
          }}
        >
          {item.url ? <Link href={item.url}>{item.value}</Link> : item.value}
        </span>
      </div>
    ))
  }

  return null
}

IntegrationRow.Content = ({
  children,
  details,
  variant = `SECONDARY`,
  ...rest
}) =>
  details || children ? (
    <ContentBox.Content
      variant={variant}
      css={{
        gridColumn: `1 / 4`,
        display: `grid`,
        gridTemplateColumns: `1.5fr 1fr`,
      }}
      {...rest}
    >
      {!details ? children : renderData(details)}
    </ContentBox.Content>
  ) : null

export default IntegrationRow
