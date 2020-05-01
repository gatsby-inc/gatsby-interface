// AnyTag is anything that a JSX tag can be.
export type AnyTag =
  | string
  | React.FunctionComponent<never>
  | (new (props: never) => React.Component)

// PropsOf tries to get the expected properties for a given HTML tag name or component.
export type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never

export type RequireProp<TProps, TPropName extends keyof TProps> = Omit<
  TProps,
  TPropName
> &
  Required<Pick<TProps, TPropName>>
