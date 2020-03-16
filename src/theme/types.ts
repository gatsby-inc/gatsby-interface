/**
 * This file contains common theme-related types
 */

export type AtomTone = `BRAND` | `SUCCESS` | `DANGER` | `WARNING` | `NEUTRAL`
export type MapToString<T> = { [K in keyof T]: string }
