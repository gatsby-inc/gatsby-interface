type Curve = `default` | `fastOutLinearIn`
type Speed = `snail` | `slow` | `default` | `fast` | `blink`

const transition: {
  curve: Record<Curve, string>
  speed: Record<Speed, string>
}

export = transition
