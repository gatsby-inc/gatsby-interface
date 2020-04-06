/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Theme } from "../../theme"

export type LipShadowPosition = `top` | `bottom`

export type StickyObserverContextValue = {
  isStuck: boolean
  lipShadowPosition: LipShadowPosition
  setIsIntersecting: (isIntersecting: boolean) => void
}

const StickyObserverContext = React.createContext<StickyObserverContextValue>({
  isStuck: false,
  lipShadowPosition: `bottom`,
  setIsIntersecting: () => undefined,
})

export type StickyObserverProps = StickyObservedContainerProps & {
  lipShadowPosition: LipShadowPosition
}

// This component is a shorthand; use
//  - StickyObserverProvider,
//  - StickyObservedContainer
//  - StickyObserverSentinel
//  - StickyLipShadow
// if you need more control over DOM structure,
export function StickyObserver({
  lipShadowPosition,
  children,
  ...rest
}: StickyObserverProps) {
  return (
    <StickyObserverProvider lipShadowPosition={lipShadowPosition}>
      <StickyObservedContainer {...rest}>{children}</StickyObservedContainer>
    </StickyObserverProvider>
  )
}

export type StickyObserverProviderProps = {
  lipShadowPosition: LipShadowPosition
  children: React.ReactNode
}

export function StickyObserverProvider({
  lipShadowPosition,
  children,
}: StickyObserverProviderProps) {
  const [isIntersecting, setIsIntersecting] = React.useState<boolean>(false)

  const contextValue: StickyObserverContextValue = {
    isStuck: isIntersecting,
    setIsIntersecting,
    lipShadowPosition,
  }

  return (
    <StickyObserverContext.Provider value={contextValue}>
      {children}
    </StickyObserverContext.Provider>
  )
}

export function useStickyObserver(): StickyObserverContextValue {
  return React.useContext(StickyObserverContext)
}

export type StickyObservedContainerProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref"
>

export function StickyObservedContainer({
  children,
  ...rest
}: StickyObservedContainerProps) {
  const { lipShadowPosition } = useStickyObserver()

  return (
    <React.Fragment>
      {lipShadowPosition === `bottom` && <StickyObserverSentinel />}
      <StickyObserverSentinel />
      <div
        css={[
          {
            position: "sticky",
            zIndex: 1,
            left: 0,
            width: "100%",
          },
          lipShadowPosition === `top` && { bottom: 0 },
          lipShadowPosition === `bottom` && { top: 0 },
        ]}
        {...rest}
      >
        {lipShadowPosition === `top` && <StickyLipShadow />}
        {children}
        {lipShadowPosition === `bottom` && <StickyLipShadow />}
      </div>
      {lipShadowPosition === `top` && <StickyObserverSentinel />}
    </React.Fragment>
  )
}

export type StickyObserverSentinelProps = {}

// A "sentinel" is a hack DIV element that is rendered next to the sticky element:
//  - before the sticky element if it sticks to the top
//  - after the sticky element if it sticks to the bottom
// IntersectionObserver does not work properly for elements with position: sticky,
// and this is why this "sentinel" is needed if we want to use Intersection API to identify
// whether a sticky element has "stuck".
//
// When the sticky element gets "stuck", it pushes the sentinel away from the screen, triggering an intersection entry
// When the sticky element gets "unstuck", the sentinel appears on the screen, triggering an intersection entry
export function StickyObserverSentinel(_props: StickyObserverSentinelProps) {
  const { setIsIntersecting, lipShadowPosition } = useStickyObserver()
  const sentinelRef = React.useRef<HTMLDivElement | null>(null)
  const observerRef = React.useRef<IntersectionObserver | null>(null)

  React.useEffect(() => {
    if (!sentinelRef.current) {
      return
    }

    observerRef.current = new IntersectionObserver(
      entries => {
        if (entries[0].intersectionRatio === 0) {
          setIsIntersecting(true)
        } else if (entries[0].intersectionRatio === 1) {
          setIsIntersecting(false)
        }
      },
      {
        threshold: [0, 1],
      }
    )

    observerRef.current.observe(sentinelRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [lipShadowPosition, sentinelRef.current])

  return <div ref={sentinelRef} css={{ height: `1px` }} aria-hidden />
}

export type StickyLipShadowProps = {}

// Lip shadows MUST be rendered as children of the sticky element for proper positioning
export function StickyLipShadow(_props: StickyLipShadowProps) {
  const { isStuck, lipShadowPosition } = useStickyObserver()

  return (
    <div
      data-sticky-lip-visible={isStuck}
      css={(theme: Theme) => [
        {
          height: 0,
          position: `relative`,
          ":before": {
            content: '""',
            display: `block`,
            position: `absolute`,
            left: 0,
            right: 0,
            height: 1,
            transition: `box-lip ${theme.transitions.default}`,
            boxShadow: `none`,
          },
        },
        lipShadowPosition === `top` && {
          ":before": {
            top: 0,
          },
          '&[data-sticky-lip-visible="true"]:before': {
            boxShadow: getLipBoxShadow(theme, `top`),
          },
        },
        lipShadowPosition === `bottom` && {
          ":before": {
            bottom: 0,
          },
          '&[data-sticky-lip-visible="true"]:before': {
            boxShadow: getLipBoxShadow(theme, `bottom`),
          },
        },
      ]}
    />
  )
}

function getLipBoxShadow(theme: Theme, shadowDirection: LipShadowPosition) {
  return `
        0px ${shadowDirection === "top" ? -2 : 2}px 2px ${
    theme.colors.blackFade[20]
  },
        0px ${shadowDirection === "top" ? -4 : 4}px 4px ${
    theme.colors.blackFade[40]
  }
    `
}
