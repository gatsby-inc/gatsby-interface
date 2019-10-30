import React, { useRef, useEffect, useState } from "react"
import { createPortal } from "react-dom"

export interface PortalProps {
  tag?: string
}

interface GatsbyElement extends HTMLElement {}

const Portal: React.FC<PortalProps> = ({ children, tag = `gatsby-portal` }) => {
  const portalNodeRef = useRef<GatsbyElement | undefined>(undefined)
  const [hasInitialized, setHasInitialized] = useState(false)

  useEffect(() => {
    portalNodeRef.current = document.createElement(tag)
    document.body.appendChild(portalNodeRef.current)

    setHasInitialized(true)

    return () =>
      portalNodeRef.current && document.body.removeChild(portalNodeRef.current)
  }, [])

  return hasInitialized && portalNodeRef.current
    ? createPortal(children, portalNodeRef.current)
    : null
}

export default Portal
