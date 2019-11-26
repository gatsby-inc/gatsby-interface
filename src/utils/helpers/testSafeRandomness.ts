/**
  Some components are impure - a good example is DecorativeDots,
  which purposefully produces a different value for every 
  instance.

  This works fine in dev/prod, but causes problems with our
  tests - snapshot tests expect consistent UI given a set of 
  props!

  These functions can be used instead, which provide consistent
  values while in the 'test' environment.
*/

import sample from "lodash.sample"

export const testSafeMathRandom = (defaultValue = 0.5) => {
  if (process.env.NODE_ENV === "test") {
    return defaultValue
  }

  return Math.random()
}

export const testSafeSample = (arr: Array<any>, defaultIndex = 0) => {
  if (process.env.NODE_ENV === "test") {
    return arr[defaultIndex]
  }

  return sample(arr)
}
