// https://a11yproject.com/posts/how-to-hide-content/
const visuallyHidden = {
  position: `absolute !important`,
  height: `1px`,
  width: `1px`,
  overflow: `hidden`,
  clip: `rect(1px, 1px, 1px, 1px)`,
  whiteSpace: `nowrap` /* added line */,
}

export default visuallyHidden
