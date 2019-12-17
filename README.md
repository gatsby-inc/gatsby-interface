# Gatsby Interface

Storybook [available here](https://reverent-keller-9597e8.netlify.com/)


![Storybook](https://user-images.githubusercontent.com/18426780/63871208-b9aea600-c978-11e9-9107-79679b699c6f.png)

```
yarn storybook
```

These are some patterns and best practices we use when contributing to `gatsby-interface`

- Use React hooks and functional components - https://reactjs.org/docs/hooks-intro.html
- Use CSS props for styling - https://emotion.sh/docs/css-prop
- Use `gatsby-design-tokens` for styling constants - https://www.gatsbyjs.org/guidelines/design-tokens/
- Use compound components to make components more composable and flexible - https://kentcdodds.com/blog/compound-components-with-react-hooks
- Make all PRs against the `dev` branch
- Use `TONE` and `VARIANT` prop (when appropriate) to determine color styles and version of a component - see Button as an example
- Make the component as generic as possible so it can be used anywhere by anything
- In `skeletons` folder, these contain only the functionality of a component (no styles) and can be used within other components
- Write Storybook stories for any component created - https://storybook.js.org/docs/basics/writing-stories/
- Typscript coming soon!
- Unit tests coming soon!

### Required assets

Gatsby Interface requires the `futura PT` webfont in several different weights. These files are git-ignored, to prevent the unauthorized release of licensed assets.

Gatsby Inc. employees can download these fonts from [Google Drive](https://drive.google.com/drive/u/1/folders/1DA_iNzLbd1_gvU_FWTzYK6MgLSl85L4v). Put all those folders in `src/assets/futura-pt` and you should be good to go!

### Chromatic testing

To run the visual testing tool, run `CHROMATIC_APP_CODE=<insert_app_code> yarn chromatic`

You can find the app code in the Chromatic dashboard - https://www.chromaticqa.com
