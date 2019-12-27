export type BreakpointToken = `mobile` | `phablet` | `tablet` | `desktop` | `hd`

export type Breakpoints = Record<BreakpointToken, number>

const breakpoints: Breakpoints = {
  mobile: 360,
  phablet: 550,
  tablet: 750,
  desktop: 1000,
  hd: 1300,
}

export type BreakpointsList = [number, number, number, number, number]

export const breakpointsList = Object.values(
  breakpoints
).sort() as BreakpointsList

export default breakpoints
