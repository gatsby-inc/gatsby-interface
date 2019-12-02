/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import { Fragment, useState, createRef, forwardRef } from "react"

import { MdInfo } from "react-icons/md"

import { useEventListener } from "../../utils/hooks"
import colors from "../../theme/colors"
import fontSizes from "../../theme/fontSizes"
import { spaces, radius } from "../../utils/presets"
import { showCustomCssDeprecationMessage } from "../../utils/maintenance/deprecationMessages"

function ToggleTip({ children, tip, customCss, className }) {
  showCustomCssDeprecationMessage(customCss)
  const [visible, setVisible] = useState(false)

  const tipRef = createRef()

  function hideTip() {
    setVisible(false)
  }

  function checkClick(e) {
    if (visible && e.target !== tipRef.current) {
      hideTip()
    }
  }

  function checkKeydown(e) {
    if ((e.keyCode || e.which) === 27) {
      hideTip()
    }
  }

  if (typeof window !== `undefined`) {
    useEventListener(`click`, checkClick)
    useEventListener(`keydown`, checkKeydown)
  }

  function showTip() {
    setVisible(false)
    const reopen = setTimeout(() => {
      setVisible(true)
      clearTimeout(reopen)
    }, 100)
  }

  return (
    <span
      css={[
        {
          position: `relative`,
        },
        customCss,
      ]}
      className={className}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          <ToggleTip.Button onClick={showTip} visible={visible} />
          <ToggleTip.Tip tip={tip} visible={visible} ref={tipRef} />
        </Fragment>
      )}
    </span>
  )
}

ToggleTip.Button = ({ children, visible, customCss, ...rest }) => {
  showCustomCssDeprecationMessage(customCss)
  return (
    <button
      aria-expanded={visible}
      aria-haspopup="true"
      aria-label={`more info`}
      css={[
        {
          background: `transparent`,
          cursor: `pointer`,
          border: `0`,
          display: `inline-flex`,
          height: `1.4em`,
          padding: 0,
          verticalAlign: `text-bottom`,
          width: `1.4em`,
          borderRadius: `50%`,

          ":focus": {
            boxShadow: `0 0 0 3px ${colors.purple[30]}`,
            outline: `none`,
          },

          svg: {
            height: `100%`,
            color: colors.grey[50],
            width: `100%`,
          },
        },
        customCss,
      ]}
      {...rest}
    >
      {children ? children : <MdInfo />}
    </button>
  )
}

const tipEntry = keyframes({
  "100%": {
    opacity: 1,
  },
})

ToggleTip.Tip = forwardRef(
  ({ tip, visible, width = `12rem`, customCss }, ref) => {
    showCustomCssDeprecationMessage(customCss)
    return (
      <span
        ref={ref}
        role="status"
        dangerouslySetInnerHTML={{ __html: visible && tip ? tip : null }}
        css={
          visible
            ? [
                {
                  animation: `${tipEntry} .5s ease forwards`,
                  background: colors.grey[80],
                  borderRadius: radius.default,
                  bottom: `calc(100% + .75rem)`,
                  color: colors.white,
                  fontSize: fontSizes[1],
                  right: `-1rem`,
                  lineHeight: 1.4,
                  opacity: 0.25,
                  padding: `${spaces.xs} ${spaces.s}`,
                  position: `absolute`,
                  transformOrigin: `right bottom`,
                  width: width,
                  zIndex: 10,

                  ":after": {
                    content: `""`,
                    background: colors.grey[80],
                    bottom: 0,
                    height: `.5rem`,
                    right: `1.25rem`,
                    position: `absolute`,
                    transform: `translate(0,50%) rotate(45deg)`,
                    transformOrigin: `center center`,
                    width: `.5rem`,
                    zIndes: -1,
                  },

                  "p:last-of-type": {
                    margin: 0,
                  },
                },
                customCss,
              ]
            : null
        }
      />
    )
  }
)

ToggleTip.propTypes = {}

export default ToggleTip
