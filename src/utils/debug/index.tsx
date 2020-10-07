import React from "react"

export function useDebugChangedProps(
  label: string,
  props: { [k: string]: unknown }
) {
  const prev = React.useRef(props)
  React.useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        console.log("Changed: " + k)
        // @ts-expect-error
        ps[k] = [prev.current[k], v]
      }
      return ps
    }, {})
    if (Object.keys(changedProps).length > 0) {
      console.log(`Changed props in ${label}:`, changedProps)
    }
    prev.current = props
  })
}
