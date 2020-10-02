import * as React from "react"
import { render } from "@testing-library/react"
import { FormattedMessage } from "../FormattedMessage"

describe("utils", () => {
  it("should format span and wrap it with a p", () => {
    const message = `The GraphQL query in the non-page component "/usr/src/app/www/cloud/gatsbyjs.com/src/templates/get-started/index.js" will not be run.`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div>
          <p>
            <span>
              The GraphQL query in the non-page component "/usr/src/app/www/cloud/gatsbyjs.com/src/templates/get-started/index.js" will not be run.
            </span>
          </p>
        </div>
      </div>
    `)
  })

  it("should format the :\\n to \\n\\n", () => {
    const message = `Query takes too long:\nFile path: /usr/src/app/www/cloud/gatsbyjs.com/src/templates/starters/details.js\nURL path: /starters/surudhb/gatsby-personal-site-template\nContext: {\n    "id": "cG9zdDoyMDU3NQ=="\n}'`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div>
          <p>
            Query takes too long:
          </p>
          <p>
            File path: /usr/src/app/www/cloud/gatsbyjs.com/src/templates/starters/details.js
      URL path: /starters/surudhb/gatsby-personal-site-template
      Context: {
          "id": "cG9zdDoyMDU3NQ=="
      }'
          </p>
        </div>
      </div>
    `)
  })

  it("should format a message with its last line ending by a . and create a paragraph from that", () => {
    const message = `gatsby-plugin-feed was initialized in gatsby-config.js without a feeds option.\nThis means that the plugin will use the internal RSS feed creation, which may not match your use case.\nThis behavior will be removed in the next major release of gatsby-plugin-feed.\nFor more info, check out: https://gatsby.dev/adding-rss-feed,`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div>
          <p>
            gatsby-plugin-feed was initialized in gatsby-config.js without a feeds option.
          </p>
          <p>
            This means that the plugin will use the internal RSS feed creation, which may not match your use case.
      This behavior will be removed in the next major release of gatsby-plugin-feed.
      For more info, check out: 
            <a
              href="https://gatsby.dev/adding-rss-feed"
            >
              https://gatsby.dev/adding-rss-feed
            </a>
            ,
          </p>
        </div>
      </div>
    `)
  })

  it("should format a message and parse the first line as a p element", () => {
    const message = `There are conflicting field types in your data.

    If you have explicitly defined a type for those fields, you can safely ignore this warning message.
    Otherwise, Gatsby will omit those fields from the GraphQL schema.
    
    If you know all field types in advance, the best strategy is to explicitly define them with the \`createTypes\` action, and skip inference with the \`@dontInfer\` directive.
    See https://www.gatsbyjs.org/docs/actions/#createTypes`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div>
          <p>
            There are conflicting field types in your data.
          </p>
          <pre>
            <code>
              If you have explicitly defined a type for those fields, you can safely ignore this warning message.
      Otherwise, Gatsby will omit those fields from the GraphQL schema.
            </code>
          </pre>
          <p>
            If you know all field types in advance, the best strategy is to explicitly define them with the 
            <code>
              createTypes
            </code>
             action, and skip inference with the 
            <code>
              @dontInfer
            </code>
             directive.
          See 
            <a
              href="https://www.gatsbyjs.org/docs/actions/#createTypes"
            >
              https://www.gatsbyjs.org/docs/actions/#createTypes
            </a>
          </p>
        </div>
      </div>
    `)
  })

  it(`should format with code inside`, () => {
    const message = `There was an error in your GraphQL query:\n\nVariable "$slug" is never used in operation "BlogPostBySlug".\n\nGraphQL request:2:24\n1 |\n2 |   query BlogPostBySlug($slug: String!) {\n  |                        ^\n3 |     site {`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div>
          <p>
            There was an error in your GraphQL query:
          </p>
          <p>
            Variable "$slug" is never used in operation "BlogPostBySlug".
          </p>
          <p>
            GraphQL request:2:24

            <code>
              1 |
      2 |   query BlogPostBySlug($slug: String!) {
        |                        ^
      3 |     site {
            </code>
          </p>
        </div>
      </div>
    `)
  })
})
