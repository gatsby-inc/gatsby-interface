# Portal

A component that allows to render components outside its parent hierarchy.

## Usage

```jsx
const App = () => (
    <Portal>
        <div>Move me somewhere!</di>
    </Portal>
)
```

By default, this will render the children of the portal in a `gatsby-portal` node at the end of the actual body content. To rely on another name, you can rely on the `tag` prop: `<Portal tag="something-else"><div>Hello world</div></Portal>`.

## Notes

It seems that Reach UI had some difficulties to be displayed on the DevTools because of the two different `document` used by a React app and React Devtools. Since I was able to display my Portals and there content in my Devtools, I didn't manage this behaviour.

However, I think it could be good to keep it there in case somebody gets in trouble so that we have a workaround solution on this: https://github.com/reach/reach-ui/pull/137
