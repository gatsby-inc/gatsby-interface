import { transition as baseTransition } from "gatsby-design-tokens"

type TransitionCurve = `default` | `fastOutLinearIn`
type TransitionSpeed = `snail` | `slow` | `default` | `fast` | `blink`

export type Transitions = {
  curve: Record<TransitionCurve, string>;
  speed: Record<TransitionSpeed, string>;
}

// we change slow value to `500ms` and add some additional options
const transition: Transitions = {
  ...baseTransition,
  curve: {
    ...baseTransition.curve,
    fastOutLinearIn: `cubic-bezier(0.4, 0, 1, 1)`,
  },
  speed: {
    ...baseTransition.speed,
    snail: `1000ms`,
    slow: `500ms`,
    blink: `50ms`,
  },
}

export default transition

/*

final shape of

  transition = {
    curve: {
      default: `cubic-bezier(0.4, 0, 0.2, 1)`,
      fastOutLinearIn: `cubic-bezier(0.4, 0, 1, 1)`,
    },
    speed: {
      snail: `1000ms`,
      slow: `500ms`,
      default: `250ms`,
      fast: `100ms`,
      blink: `50ms`,
    },
  }

*/
