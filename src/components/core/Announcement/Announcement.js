/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import cardStyles from "../../../theme/styles/card"
import { spaces } from "../../../theme"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"
import background from "./assets/background.svg"

function Announcement({ children, ...rest }) {
  return (
    <div
      css={{
        alignItems: `center`,
        background: colors.teal[5],
        color: colors.teal[90],
        display: `flex`,
        fontSize: fontSizes[1],
        fontFamily: fonts.system.join(`,`),
        ...cardStyles.space.row,
        backgroundImage: `url(${background})`,
        backgroundPosition: `right center`,
        backgroundRepeat: `no-repeat`,

        [`&:not(:first-child)`]: {
          borderTop: `1px solid ${colors.teal[10]}`,
        },
      }}
    >
      {children}
    </div>
  )
}

Announcement.propTypes = {
  children: PropTypes.node,
}

export default Announcement
