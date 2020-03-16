import React from "react"

// Used to close dropdown on an outside click
function useOnClickOutside<TElement extends Element>(
  ref: React.RefObject<TElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }
    if (document) {
      document.addEventListener(`mousedown`, listener)
      document.addEventListener(`touchstart`, listener)

      return () => {
        document.removeEventListener(`mousedown`, listener)
        document.removeEventListener(`touchstart`, listener)
      }
    }
  }, [ref, handler])
}

export default useOnClickOutside
