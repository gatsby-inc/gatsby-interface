# Scaffolding components

If you want to add a new component to `gatsby-interface`, you can run `yarn scaffold:component` to create stubs for it:

```bash
yarn scaffold:component MyNewComponent
```

This script does the following:

- Creates a `MyNewComponent` directory for the component at [`./src/components`](/src/components)
- Generates a file for the component itself, `MyNewComponent.tsx`, with stubs for props type, styles and even some variants if you pass `--withVariant` flag to the script
- Generates a story file, `MyNewComponent.stories.tsx`, which follows the suggestions from [Component Checklist proposal](https://github.com/gatsby-inc/gatsby-interface/issues/205).
- Generates an index file in the component directory, `index.ts`, which reexports everything from the component file
- Adds export statements to the index file: [`/src/index.ts`](/src/index.ts)

Everything that is generated should be working out of the box and can be a good foundation for a fully fleshed-out component.

### Options

- `--withVariant` (`-wv`) — instructs the script to scaffold code for supporting a `variant` prop, which can be useful for components that are expected to have some style presents (the prime example is [`Button`](https://gatsby-interface.netlify.app/?path=/story/button-anchorbutton-linkbutton--variants) component and its derivatives)
