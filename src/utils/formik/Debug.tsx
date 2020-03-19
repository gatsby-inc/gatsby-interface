// https://jaredpalmer.com/formik/docs/overview
// https://github.com/jaredpalmer/formik-alicante/blob/master/src/components/Debug.js
/** @jsx jsx */
import { jsx } from "@emotion/core"

import { FormikConsumer } from "formik"

const Debug = () => (
  <div
    css={{
      margin: `3rem 0`,
      borderRadius: `4px`,
      background: `#f6f8fa`,
      boxShadow: `0 0 1px #eee inset`,
    }}
  >
    <div
      css={{
        textTransform: `uppercase`,
        borderTopLeftRadius: `4px`,
        borderTopRightRadius: `4px`,
        fontWeight: 500,
        padding: `.5rem`,
        background: `#555`,
        color: `#fff`,
        letterSpacing: `1px`,
      }}
    >
      Formik State
    </div>
    <FormikConsumer>
      {({ ...rest }) => (
        <pre
          css={{
            padding: `.25rem .5rem`,
            overflowX: `scroll`,
          }}
        >
          {JSON.stringify(rest, null, 2)}
        </pre>
      )}
    </FormikConsumer>
  </div>
)

export default Debug
