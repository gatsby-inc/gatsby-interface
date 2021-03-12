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
              The GraphQL query in the non-page component 
              <code>
                /usr/src/app/www/cloud/gatsbyjs.com/src/templates/get-started/index.js
              </code>
               will not be run.
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

  it(`should format multiple code blocks`, () => {
    const message = `There was an error in your GraphQL query:\n\nVariable "$missingVar" is not defined by operation "SomeQuery".\n\nGraphQL request:16:32\n15 |           frontmatter {\n16 |             date(formatString: $missingVar)\n   |                                ^\n17 |             title\n\nGraphQL request:2:3\n1 |\n2 |   query {\n  |   ^\n3 |     site {`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div>
          <p>
            There was an error in your GraphQL query:
          </p>
          <p>
            Variable "$missingVar" is not defined by operation "SomeQuery".
          </p>
          <p>
            GraphQL request:16:32
      
            <code>
              15 |           frontmatter {
      16 |             date(formatString: $missingVar)
         |                                ^
      17 |             title
            </code>
            
      GraphQL request:2:3
      
            <code>
              1 |
      2 |   query {
        |   ^
      3 |     site {
            </code>
          </p>
        </div>
      </div>
    `)
  })

  it(`should format messages with a stacktrace`, () => {
    const message = `Missing onError handler for invocation 'building-schema', error was 'Syntax Error: Unexpected Name "agilityNEW"

GraphQL request:1:1
1 | agilityNEW-RightOrLeftCaseStudyTestimonial-Dev
  | ^'. Stacktrace was 'GraphQLError: Syntax Error: Unexpected Name "agilityNEW"
    at syntaxError (/usr/src/app/www/node_modules/graphql/error/syntaxError.js:15:10)
    at Parser.unexpected (/usr/src/app/www/node_modules/graphql/language/parser.js:1463:41)
    at Parser.parseDefinition (/usr/src/app/www/node_modules/graphql/language/parser.js:157:16)
    at Parser.many (/usr/src/app/www/node_modules/graphql/language/parser.js:1518:26)
    at Parser.parseDocument (/usr/src/app/www/node_modules/graphql/language/parser.js:111:25)
    at parse (/usr/src/app/www/node_modules/graphql/language/parser.js:36:17)
    at TypeMapper.createType (/usr/src/app/www/node_modules/graphql-compose/lib/TypeMapper.js:113:43)
    at Function.createTemp (/usr/src/app/www/node_modules/graphql-compose/lib/ObjectTypeComposer.js:80:28)
    at Function.create (/usr/src/app/www/node_modules/graphql-compose/lib/ObjectTypeComposer.js:56:21)
    at forEach (/usr/src/app/www/node_modules/gatsby/src/schema/infer/index.js:44:41)
    at Array.forEach (<anonymous>)
    at addInferredTypes (/usr/src/app/www/node_modules/gatsby/src/schema/infer/index.js:27:13)
    at updateSchemaComposer (/usr/src/app/www/node_modules/gatsby/src/schema/schema.js:142:9)
    at buildSchema (/usr/src/app/www/node_modules/gatsby/src/schema/schema.js:62:3)
    at build (/usr/src/app/www/node_modules/gatsby/src/schema/index.js:105:18)
    at buildSchema (/usr/src/app/www/node_modules/gatsby/src/services/build-schema.ts:19:3)'`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
          <div>
            <div>
              <p>
                Missing onError handler for invocation 'building-schema', error was 'Syntax Error: Unexpected Name "agilityNEW"
              </p>
              <p>
                GraphQL request:1:1

                <code>
                  1 | agilityNEW-RightOrLeftCaseStudyTestimonial-Dev
            | ^'. Stacktrace was 'GraphQLError: Syntax Error: Unexpected Name "agilityNEW"
              at syntaxError (/usr/src/app/www/node_modules/graphql/error/syntaxError.js:15:10)
              at Parser.unexpected (/usr/src/app/www/node_modules/graphql/language/parser.js:1463:41)
              at Parser.parseDefinition (/usr/src/app/www/node_modules/graphql/language/parser.js:157:16)
              at Parser.many (/usr/src/app/www/node_modules/graphql/language/parser.js:1518:26)
              at Parser.parseDocument (/usr/src/app/www/node_modules/graphql/language/parser.js:111:25)
              at parse (/usr/src/app/www/node_modules/graphql/language/parser.js:36:17)
              at TypeMapper.createType (/usr/src/app/www/node_modules/graphql-compose/lib/TypeMapper.js:113:43)
              at Function.createTemp (/usr/src/app/www/node_modules/graphql-compose/lib/ObjectTypeComposer.js:80:28)
              at Function.create (/usr/src/app/www/node_modules/graphql-compose/lib/ObjectTypeComposer.js:56:21)
              at forEach (/usr/src/app/www/node_modules/gatsby/src/schema/infer/index.js:44:41)
              at Array.forEach (&lt;anonymous&gt;)
              at addInferredTypes (/usr/src/app/www/node_modules/gatsby/src/schema/infer/index.js:27:13)
              at updateSchemaComposer (/usr/src/app/www/node_modules/gatsby/src/schema/schema.js:142:9)
              at buildSchema (/usr/src/app/www/node_modules/gatsby/src/schema/schema.js:62:3)
              at build (/usr/src/app/www/node_modules/gatsby/src/schema/index.js:105:18)
              at buildSchema (/usr/src/app/www/node_modules/gatsby/src/services/build-schema.ts:19:3)'
                </code>
              </p>
            </div>
          </div>
        `)
  })

  it(`should preserve underscores (do not change them to <em>) in single quoted strings`, () => {
    const message = `failed
    
Can't resolve '../lerna_node_version.json' in '/usr/src/app/www/lerna_version_node/src/pages'

If you're trying to use a package make sure that '../lerna_node_version.json' is installed. If you're trying to use a local file make sure that the path is correct.`

    expect(render(<FormattedMessage rawMessage={message} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div>
          <p>
            failed
          </p>
          <p>
            Can't resolve 
            <code>
              ../lerna_node_version.json
            </code>
             in 
            <code>
              /usr/src/app/www/lerna_version_node/src/pages
            </code>
          </p>
          <p>
            If you're trying to use a package make sure that 
            <code>
              ../lerna_node_version.json
            </code>
             is installed. If you're trying to use a local file make sure that the path is correct.
          </p>
        </div>
      </div>
      `)
  })
})
