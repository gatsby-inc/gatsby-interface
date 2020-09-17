# Contributing

These are some patterns and best practices we use when contributing to `gatsby-interface`:

- Use `yarn scaffold:component` when adding new components to create code stubs: [/docs/scaffold-components.md]()
- Use `yarn scaffold:icon` when adding new icon components to create code stubs: [/docs/icons.md]()
- Use React hooks and functional components: https://reactjs.org/docs/hooks-intro.html.
- gatsby-interface uses TypeScript almost everywhere, and there are some guidelines: [/docs/typescript.md]()
- Use CSS props for styling: https://emotion.sh/docs/css-prop.
- Use Emotion's theming (https://emotion.sh/docs/theming) and gatsby-interface's [Theme Scales](https://gatsby-interface.netlify.app/?path=/story/theme-scales--colors) for styling constants.
- If your component becomes too big or complex, consider using compound components to make components more composable and flexible: https://kentcdodds.com/blog/compound-components-with-react-hooks.
- Make all PRs against the `main` branch.
- Use `TONE` and `VARIANT` prop (when appropriate) to define color style and variant of a component — see e. g. `<Button>`.
- Make the component as generic as possible so it can be used _anywhere_ by _anything_ (within reason).
- Write Storybook stories for any component created: https://storybook.js.org/docs/basics/writing-stories/.
  - Follow CSF (Component Story Format) format whenever possible: https://storybook.js.org/docs/react/api/csf
  - Before committing your changes to a component, check the "Accessibility" tab in Storybook for the related stories — there shouldn't be any errors.
- `gatsby-interface` relies on [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for component unit tests.
