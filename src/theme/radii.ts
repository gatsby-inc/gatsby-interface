import { radii as baseRadii } from "gatsby-design-tokens"

export type RadiusToken = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Radii = [string, string, string, string, string, string, string]

/**
 * Radii from 'gatsby-design-tokens' are represented
 * as numbers for pixel values and strings like '100%' for percent values
 *
 * While this works pretty good with Emotion for single values (e.g, "borderRadius: radii[3]"),
 * it involves knowing implementation details when interpolating them:
 *   borderRadius: `${radii[2]}px 0 0 ${radii[2]}px`
 *
 * Because of this, we're going to append 'px` to each numeric radius
 */
const radii = baseRadii.map(val =>
  typeof val === `number` ? `${val}px` : val
) as Radii

export default radii

/*

  radii = [
    0: `0px`, 
    1: `2px`, 
    2: `4px`, 
    3: `8px`, 
    4: `16px`, 
    5: `9999px`, 
    6: `100%`
  ]

*/
