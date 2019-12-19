import { radii as baseRadii } from "gatsby-design-tokens"

const radii = baseRadii.map(val => (typeof val === `number` ? `${val}px` : val))

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
