import { radii as baseRadii } from "gatsby-design-tokens"

const radii = baseRadii.map(val => (typeof val === `number` ? `${val}px` : val))

export default radii

/*

[
  0: 0, 
  1: 2, 
  2: 4, 
  3: 8, 
  4: 16, 
  5: 9999, 
  6: `100%`
]

*/
