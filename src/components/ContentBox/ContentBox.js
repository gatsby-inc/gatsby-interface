import React, { useState, useCallback, useMemo, useEffect } from "react"
import PropTypes from "prop-types"

const BOX_STATES = [`OPEN`, `CLOSED`]
const BOX_BEHAVIOURS = [`TOGGLE`, `UNFOLD`]
const CONTENT_VARIANTS = [`PRIMARY`, `SECONDARY`]

const ContentBoxContext = React.createContext()

function ContentBox({
  state: propState,
  children,
  as,
  behaviour = `TOGGLE`,
  tone = `BRAND`,
  ...rest
}) {
  const Component = as || `div`
  const [state, setState] = useState({ boxState: `CLOSED`, ...propState })

  useEffect(() => {
    if (propState && propState !== state) {
      setState(propState)
    }
  }, [propState])

  const changeContent = useCallback(
    () =>
      setState(oldState => {
        return {
          ...oldState,
          boxState: oldState.boxState === `OPEN` ? `CLOSED` : `OPEN`,
        }
      }),
    []
  )

  const value = useMemo(() => {
    return { state, boxBehaviour: behaviour, changeContent, boxTone: tone }
  }, [state])

  return (
    <ContentBoxContext.Provider value={value}>
      <Component {...rest}>{children}</Component>
    </ContentBoxContext.Provider>
  )
}

ContentBox.propTypes = {
  children: PropTypes.any.isRequired,
  behaviour: PropTypes.oneOf(BOX_BEHAVIOURS),
  state: PropTypes.object, // PropTypes.oneOf(BOX_STATES),
}

ContentBox.Content = ({ children, as, variant = `PRIMARY`, ...rest }) => {
  const Component = as || `div`
  const { state, boxBehaviour } = ContentBox.useContentBoxContext()
  const componentToReturn = <Component {...rest}>{children}</Component>

  if (state.boxState === `OPEN` && boxBehaviour === `TOGGLE`) {
    if (variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (state.boxState === `OPEN` && boxBehaviour === `UNFOLD`) {
    if (variant === `PRIMARY` || variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (state.boxState === `CLOSED`) {
    if (variant === `PRIMARY`) {
      return componentToReturn
    }
  }

  return null
}

ContentBox.Content.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(CONTENT_VARIANTS),
}

ContentBox.Button = ({ children, hiddenIf, as = `button`, ...props }) => {
  const Component = as || `button`
  const { state, changeContent, boxTone } = ContentBox.useContentBoxContext()

  if (hiddenIf === state.boxState) {
    return null
  }

  return (
    <Component onClick={changeContent} tone={boxTone} {...props}>
      {children}
    </Component>
  )
}

ContentBox.Button.propTypes = {
  children: PropTypes.any.isRequired,
  hiddenIf: PropTypes.oneOf(BOX_STATES),
}

ContentBox.useContentBoxContext = () => {
  const context = React.useContext(ContentBoxContext)
  if (!context) {
    throw new Error(
      `ContentBox compound components cannot be rendered outside the ContentBox component`
    )
  }
  return context
}

export default ContentBox
