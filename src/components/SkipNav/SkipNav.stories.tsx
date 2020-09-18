/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { SkipNavTarget, SkipNavTrigger } from "."
import { Button } from "../Button"
import { Link } from "../Link"
import { Spacer } from "../Spacer"
import { Text } from "../Text"
import { DecoratorFn } from "@storybook/react"
import isChromatic from "storybook-chromatic/isChromatic"

export default {
  title: `SkipNav`,
  component: SkipNavTarget,
  subcomponents: {
    SkipNavTrigger,
  },
  decorators: [
    story => (
      <div style={{ width: `100vw`, height: `100vh`, padding: `5vh 5vw` }}>
        {story()}
      </div>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => (
  <React.Fragment>
    <SkipNavTrigger>Skip to content</SkipNavTrigger>
    <nav>
      <ul>
        <li>
          <Link href="https://google.com">Navigation link #1</Link>
        </li>
        <li>
          <Link href="https://yandex.ru">Navigation link #2</Link>
        </li>
      </ul>
    </nav>
    <Spacer size={10} />
    <aside>
      <Text>Some aside content</Text>

      <Button variant="SECONDARY">Auxillary button</Button>
    </aside>
    <Spacer size={10} />
    <main>
      <SkipNavTarget />
      <Text>Main content</Text>
      <div>
        <Button>Some action</Button>
      </div>
    </main>
  </React.Fragment>
)

Basic.story = {
  decorators: [
    story => {
      React.useLayoutEffect(() => {
        if (!isChromatic()) {
          return
        }
        setTimeout(() => {
          const skipTrigger = document.querySelector<HTMLAnchorElement>(
            `a[href="#gatsby-skip-here"]`
          )
          if (skipTrigger) {
            skipTrigger.focus()
          }
        }, 0)
      })

      return <React.Fragment>{story()}</React.Fragment>
    },
  ] as DecoratorFn[],
}
