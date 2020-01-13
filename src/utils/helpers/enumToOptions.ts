export default function enumToOptions<T extends string>(
  memo: { [k: string]: string },
  value: T
) {
  return { ...memo, [value]: value }
}
