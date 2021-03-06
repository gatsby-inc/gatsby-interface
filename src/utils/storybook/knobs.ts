import {
  RadiosTypeKnobValue,
  RadiosTypeOptionsProp,
} from "@storybook/addon-knobs/dist/components/types"

/**
 * "radios" from "@storybook/addon-knobs" support passing an array of option values instead of an object
 * However, their type definitions define those as Record<number | string, T>,
 * which does not include T[] type
 *
 * For this reason we need to cast T[] to Record<number, T> in order to support options arrays
 */
export function radioKnobOptions<T extends RadiosTypeKnobValue>(
  options: RadiosTypeOptionsProp<T> | T[]
): RadiosTypeOptionsProp<T> {
  return Array.isArray(options) ? (options as Record<number, T>) : options
}
