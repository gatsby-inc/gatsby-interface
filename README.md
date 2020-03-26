<img src="https://user-images.githubusercontent.com/21834/74070062-35b91980-4a00-11ea-93a8-b77bde7b4c37.png" width="48" height="48" alt="rebeccapurple dot" />
<br>
<br>

# Gatsby Interface

<a href="https://www.npmjs.org/package/gatsby-interface">
  <img src="https://img.shields.io/npm/v/gatsby-interface.svg" alt="Current npm package version." />
</a>
<a href="https://npmcharts.com/compare/gatsby-interface?minimal=true">
  <img src="https://img.shields.io/npm/dm/gatsby-interface.svg" alt="Downloads per month on npm." />
</a>
<a href="https://npmcharts.com/compare/gatsby-interface?minimal=true">
  <img src="https://img.shields.io/npm/dt/gatsby-interface.svg" alt="Total downloads on npm." />
</a>

Storybook available at [gatsby-interface.netlify.com](https://gatsby-interface.netlify.com/):

![screenshot](https://user-images.githubusercontent.com/21834/77585971-ac916f80-6ee5-11ea-92b4-8cf24284f366.png)

## Installation

Using [npm](https://www.npmjs.com/):

```shell
npm install gatsby-interface --save
```

Using [Yarn](https://yarnpkg.com/):

```shell
yarn add gatsby-interface
```

### Fonts

Certain Gatsby Interface components require the `Futura PT` webfont. These files are git-ignored to prevent the unauthorized release of licensed assets, and are not included in this repository.

Gatsby Inc. employees can download these fonts from our [Google Drive](https://drive.google.com/drive/u/1/folders/1DA_iNzLbd1_gvU_FWTzYK6MgLSl85L4v). Put all those folders in `src/assets/futura-pt` and you should be good to go!

## Development

1. Clone the repository: `git clone https://github.com/gatsby-inc/gatsby-interface.git`.
2. Install dependencies: `yarn`.
3. Run Storybook: `yarn storybook`.

## Contributing

These are some patterns and best practices we use when contributing to `gatsby-interface`:

- Use React hooks and functional components: https://reactjs.org/docs/hooks-intro.html.
- Use CSS props for styling: https://emotion.sh/docs/css-prop.
- Use `gatsby-design-tokens` for styling constants: https://www.gatsbyjs.org/guidelines/design-tokens/.
- Use compound components to make components more composable and flexible: https://kentcdodds.com/blog/compound-components-with-react-hooks.
- Make all PRs against the `dev` branch.
- Use `TONE` and `VARIANT` prop (when appropriate) to definie color style and variant of a component — see e. g. `<Button>`.
- Make the component as generic as possible so it can be used _anywhere_ by _anything_.
- Components in the `skeletons` folder provide only the functionality, but no styles, and can be used within other components.
- Write Storybook stories for any component created: https://storybook.js.org/docs/basics/writing-stories/.
- Typscript coming soon!
- Unit tests coming soon!

### Chromatic testing

To run the visual testing tool, run `CHROMATIC_APP_CODE=<insert_app_code> yarn chromatic`

You can find the app code in the Chromatic dashboard - https://www.chromaticqa.com
