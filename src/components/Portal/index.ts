import { useRef, useState, useLayoutEffect } from "react"
import { createPortal } from "react-dom"

export interface PortalProps {
  tag?: string
  target?: string
}

const useDOMNode = (tag?: string, isUnique?: boolean) => {
  const domElRef = useRef<HTMLElement | undefined>(undefined)

  useLayoutEffect(() => {
    if (tag) {
      if (isUnique) {
        domElRef.current = document.querySelector(tag) as HTMLElement

        if (!domElRef.current) {
          domElRef.current = document.createElement(tag)
          document.body.appendChild(domElRef.current)
        }
      } else {
        domElRef.current = document.createElement(tag)
      }

      return () => {
        if (isUnique) {
          const domNodeToRemove = document.querySelector(tag)
          domNodeToRemove && document.body.removeChild(domNodeToRemove)
        }
      }
    }
  }, [tag, isUnique])

  return domElRef
}

const Portal: React.FC<PortalProps> = ({
  children,
  tag = `gatsby-portal`,
  target,
}) => {
  const portalNodeRef = useDOMNode(tag)
  const portalRootRef = useDOMNode(target, true)
  const [hasInitialized, setHasInitialized] = useState(false)

  useLayoutEffect(() => {
    if (portalNodeRef.current) {
      const hostNode = portalRootRef.current || document.body

      hostNode.appendChild(portalNodeRef.current)

      setHasInitialized(true)

      return () => hostNode.removeChild(portalNodeRef.current!)
    }
  }, [tag, target])

  return hasInitialized && portalNodeRef.current
    ? createPortal(children, portalNodeRef.current)
    : null
}

export default Portal
