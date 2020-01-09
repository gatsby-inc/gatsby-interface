export type MapToString<T> = { [K in keyof T]: string }
type MapToNumber<T> = { [K in keyof T]: string | number }
