/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"
import { SidebarNav } from "./"
import { General, Integrations, Preview, Skull } from "../../assets"

// The active prop should be managed by path rather than component state. This use case is for storybook only
const Component = () => {
  const [activeNav, setNav] = useState(`general`)
  const [subNav, setSubNav] = useState(`site`)

  const options = [
    {
      label: `General`,
      svg: General,
      onClick: () => setNav(`general`),
      active: activeNav === `general`,
      to: `/`,
      subItems: [
        {
          label: `Site Details`,
          onClick: () => setSubNav(`site`),
          active: subNav === `site`,
          to: `#`,
        },
        {
          label: `Contributors`,
          onClick: () => setSubNav(`contributors`),
          active: subNav === `contributors`,
          to: `#`,
        },
        {
          label: `Environment Variables`,
          onClick: () => setSubNav(`envVars`),
          active: subNav === `envVars`,
          to: `#`,
        },
      ],
    },
    {
      label: `Integrations`,
      svg: Integrations,
      onClick: () => setNav(`integrations`),
      active: activeNav === `integrations`,
      to: `/`,
    },
    {
      label: `Preview`,
      svg: Preview,
      onClick: () => setNav(`preview`),
      active: activeNav === `preview`,
      to: `/`,
    },
    {
      label: `Danger Zone`,
      svg: Skull,
      onClick: () => setNav(`danger`),
      active: activeNav === `danger`,
      to: `/`,
    },
  ]

  return (
    <SidebarNav
      options={options}
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        paddingLeft: `2rem`,
      }}
    />
  )
}

storiesOf(`SidebarNav`, module).add(`usage example`, () => (
  <StoryUtils.Container>
    <Component />
  </StoryUtils.Container>
))
