import { transition as baseTransition } from "gatsby-design-tokens"

const transition = baseTransition

// we change slow value to `500ms` and add some additional options

transition.curve.fastOutLinearIn = `cubic-bezier(0.4, 0, 1, 1)`
transition.speed.snail = `1000ms`
transition.speed.slow = `500ms`
transition.speed.blink = `50ms`

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
