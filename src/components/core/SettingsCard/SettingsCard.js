/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core"
import React, { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { MdEdit, MdArrowForward } from "react-icons/md"

import { ContentBox } from "../../skeletons/ContentBox"
import { Button } from "../Button"
import { Heading } from "../Heading"
import {
  breakpoints,
  fontFamilies,
  palette,
  spaces,
} from "../../../utils/presets"
import fontSizes from "../../../theme/fontSizes"
import cardStyles from "../../../theme/styles/card"

const MODES = [`PRESENTER`, `EDITOR`]

function SettingsCard({ children, mode = `PRESENTER`, ...rest }) {
  const [modeState, setModeState] = useState(mode)
  useEffect(() => {
    if (mode !== modeState) {
      setModeState(mode)
    }
  }, [mode])

  return (
    <ContentBox
      state={{ boxState: modeState === `PRESENTER` ? `CLOSED` : `OPEN` }}
      css={{
        ...cardStyles.frame,
        display: `grid`,
        gridGap: spaces.m,
        gridTemplateColumns: `1fr auto`,
        gridTemplateRows: `auto auto`,
        padding: `${spaces.m} ${spaces.l} ${spaces.l}`,

        [`@media(min-width: ${breakpoints.desktop}px)`]: {
          padding: `${spaces.l} ${spaces[`xl`]} ${spaces[`xl`]}`,
        },
      }}
      {...rest}
    >
      {children}
    </ContentBox>
  )
}

SettingsCard.propTypes = {
  children: PropTypes.any,
  mode: PropTypes.oneOf(MODES),
}

SettingsCard.Title = ({ children, className, ...props }) => {
  const { boxTone } = ContentBox.useContentBoxContext()

  return (
    <Heading
      as={`h3`}
      tone={boxTone}
      css={{
        alignItems: `center`,
        display: `flex`,
        fontSize: fontSizes[4],
        lineHeight: 1,
        minHeight: `2.25rem`,
      }}
    >
      {children}
    </Heading>
  )
}

SettingsCard.Description = ({ children }) => (
  <p
    css={{
      color: palette.grey[500],
      fontSize: fontSizes.xs,
      fontFamily: fontFamilies.bodyFontFamily,
      lineHeight: 1.4,
      margin: 0,

      "&:not(:last-child)": {
        marginBottom: spaces.m,
      },
    }}
  >
    {children}
  </p>
)

SettingsCard.EditButton = ({ children, label = `Edit`, ...rest }) => (
  <ContentBox.Button as={Button} variant={`GHOST`} {...rest}>
    {children ? (
      children
    ) : (
      <Fragment>
        {label}
        <MdEdit />
      </Fragment>
    )}
  </ContentBox.Button>
)

SettingsCard.ActionButton = ({ children, onClick }) => (
  <SecondaryButton onClick={onClick}>{children}</SecondaryButton>
)

SettingsCard.Actions = ({ children }) => (
  <div
    css={{
      display: `flex`,
      justifyContent: `space-between`,
      marginTop: spaces.m,
    }}
  >
    {children}
  </div>
)

SettingsCard.CancelButton = ({ children }) => (
  <ContentBox.Button
    as={Button}
    variant={`SECONDARY`}
    tone={`NEUTRAL`}
    css={{}}
  >
    {children ? children : `Cancel`}
  </ContentBox.Button>
)

SettingsCard.SubmitButton = ({ children }) => (
  <Button>
    {children ? (
      children
    ) : (
      <Fragment>
        Save <MdArrowForward />
      </Fragment>
    )}
  </Button>
)

SettingsCard.Content = ({ children, ...props }) => (
  <ContentBox.Content
    css={{
      gridColumn: `1 / 3`,
    }}
    {...props}
  >
    {children}
  </ContentBox.Content>
)

export default SettingsCard