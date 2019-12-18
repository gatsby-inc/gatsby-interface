/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import PropTypes from "prop-types"
import { MdCheck, MdClose, MdRefresh } from "react-icons/md"

import colors from "../../theme/colors"

import fonts from "../../theme/fonts"
import fontSizes from "../../theme/fontSizes"
import space from "../../theme/space"

const loading = keyframes` 
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Indicator = ({ status, label, expanded }) => {
  const defaultLeftMargin = `1.2rem`
  const icons = {
    SUCCESS: MdCheck,
    IN_PROGRESS: MdRefresh,
    FAILED: MdClose,
  }
  const styles = {
    SUCCESS: {
      background: colors.green[50],
      width: `1.5rem`,
      height: `1.5rem`,
      svg: {
        color: colors.white,
      },
    },
    IN_PROGRESS: {
      background: colors.yellow[60],
      width: `2rem`,
      height: `2rem`,
      ":after": {
        content: `""`,
        background: colors.yellow[60],
        width: `100%`,
        height: `100%`,
        position: `absolute`,
        borderRadius: `50%`,
        transform: `scale(1.5)`,
        zIndex: `-1`,
      },
      svg: {
        color: colors.grey[90],
        fontSize: `1.5rem`,
        animation: `${loading} 1s linear infinite`,
      },
    },
    NOT_STARTED: {
      background: `#D9D7E0`,
      width: `1rem`,
      height: `1rem`,
      marginLeft: expanded ? 0 : space[7],
      marginTop: expanded ? space[7] : 0,
      ":before": {
        display: `none`,
      },
      ":last-of-type": {
        marginRight: expanded ? 0 : space[5],
        marginBottom: expanded ? space[5] : 0,
      },
    },
    FAILED: {
      background: colors.red[50],
      "& > span": {
        background: colors.red[50],
        borderRadius: `50%`,
        transform: `scale(1.3)`,
      },
      svg: {
        color: colors.white,
        fontSize: `1.2rem`,
      },
    },
  }
  const Icon = icons[status]
  return (
    <span
      key={status}
      css={{
        alignItems: `center`,
        borderRadius: `50%`,
        display: `flex`,
        justifyContent: `center`,
        marginLeft: expanded ? 0 : defaultLeftMargin,
        marginTop: expanded ? defaultLeftMargin : 0,
        position: `relative`,
        width: `2rem`,
        height: `2rem`,
        ":before": {
          content: `""`,
          width: expanded ? `2px` : defaultLeftMargin,
          height: expanded ? defaultLeftMargin : `2px`,
          position: `absolute`,
          left: expanded ? `50%` : 0,
          top: expanded ? 0 : `50%`,
          transform: expanded
            ? `translate(-50%, -100%)`
            : `translate(-100%, -50%)`,
          background: colors.green[50],
          zIndex: `-1`,
        },
        ":first-of-type": {
          marginTop: expanded ? space[3] : 0,
          marginLeft: expanded ? 0 : space[3],
          ":before": {
            display: `none`,
          },
        },
        ":last-of-type": {
          marginRight: space[3],
        },
        ...styles[status],
      }}
    >
      <span
        css={{
          alignItems: `center`,
          display: `flex`,
          justifyContent: `center`,
          height: `100%`,
          width: `100%`,
        }}
      >
        {Icon && <Icon />}
      </span>
      {label && expanded && <Label expanded={expanded}>{label}</Label>}
    </span>
  )
}

Indicator.propTypes = {
  steps: PropTypes.array,
}

const Label = ({ children, expanded = false }) => (
  <span
    css={{
      fontFamily: fonts.system,
      fontSize: fontSizes[3],
      paddingLeft: space[5],
      position: expanded ? `absolute` : `static`,
      left: expanded ? space[8] : 0,
      whiteSpace: `nowrap`,
    }}
  >
    {children}
  </span>
)

const StepsIndicator = ({ steps, expanded = false }) => {
  let label
  if (steps.find(step => step.status === `IN_PROGRESS`)) {
    label = steps.find(step => step.status === `IN_PROGRESS`).label
  } else if (steps.find(step => step.status === `FAILED`)) {
    label = steps.find(step => step.status === `FAILED`).label
  } else {
    label = steps[steps.length - 1].label
  }

  return (
    <div
      css={{
        alignItems: `center`,
        display: `flex`,
        flexWrap: `wrap`,
      }}
    >
      <div
        css={{
          alignItems: `center`,
          background: colors.grey[10],
          borderRadius: `9999px`,
          display: `inline-flex`,
          flexDirection: expanded ? `column` : `row`,
          zIndex: `-1`,
        }}
      >
        {steps.map((step, index) => (
          <Indicator
            status={step.status}
            label={step.label}
            key={index}
            expanded={expanded}
          />
        ))}
      </div>
      {label && !expanded && <Label>{label}</Label>}
    </div>
  )
}

StepsIndicator.propTypes = {
  steps: PropTypes.array,
  expanded: PropTypes.bool,
}

export default StepsIndicator
