/** @jsx jsx */
import { keyframes } from "@emotion/core"

const fadeAnimationKeyframe = keyframes`
0% {
    opacity: 0.5
}

100% {
    opacity: 1
}
`

export const fadeAnimationCss = `${fadeAnimationKeyframe} .5s infinite alternate`
