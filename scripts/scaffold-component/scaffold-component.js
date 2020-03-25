import * as fs from "fs"
import program from "commander"
import * as path from "path"
import chalk from "chalk"
import * as ejs from "ejs"

const templates = [
  {
    fileName: `COMPONENT_NAME.tsx`,
    templatePath: `./component-template.ejs`,
  },
  {
    fileName: `index.ts`,
    templatePath: `./index-template.ejs`,
  },
  {
    fileName: `COMPONENT_NAME.stories.tsx`,
    templatePath: `./story-template.ejs`,
  },
]

const libIndexFiles = [
  path.join(process.cwd(), `./src/index.ts`),
  // TODO remove the next line once all exported code is in TypeScript (https://github.com/gatsby-inc/gatsby-interface/issues/47)
  path.join(process.cwd(), `./index-ts-only.ts`),
]

let componentCmdValue = ``

program
  .version(`0.0.1`)
  .arguments(`<name>`)
  .action(name => (componentCmdValue = name))
  .parse(process.argv)

scaffold(componentCmdValue)

function scaffold(componentName) {
  if (!componentName) {
    console.error(
      `${chalk.red(`Error:`)} No component name specified, use ${chalk.cyan(
        `yarn scaffold:component SomeComponent`
      )}`
    )
    return
  }

  const basePath = path.join(process.cwd(), `./src`)

  scaffoldComponent(componentName.trim(), basePath, {})
}

function scaffoldComponent(componentName, basePath, context) {
  const componentDirPath = path.join(basePath, `components/${componentName}`)

  console.log(chalk.blue(`Scaffolding ${chalk.bold(componentName)} component`))

  try {
    fs.mkdirSync(componentDirPath)
  } catch (e) {
    console.error(e)
  }

  templates.forEach(template => {
    const fileName = template.fileName.replace(`COMPONENT_NAME`, componentName)
    console.log(
      chalk.green(
        `  generating`,
        chalk.bold(
          `${path.relative(process.cwd(), componentDirPath)}/${fileName}`
        )
      )
    )

    const content = hydrateTemplate(
      {
        COMPONENT_NAME: componentName,
        ...context,
      },
      template.templatePath
    )

    try {
      const fullPath = path.join(componentDirPath, fileName)
      fs.writeFileSync(fullPath, content)
    } catch (e) {
      console.error(e)
    }
  })

  libIndexFiles.forEach(indexFilePath => {
    console.log(
      chalk.blue(
        `  appending export statement to`,
        chalk.bold(path.relative(process.cwd(), indexFilePath))
      )
    )

    fs.appendFileSync(
      indexFilePath,
      `export * from "./${path.relative(
        path.dirname(indexFilePath),
        componentDirPath
      )}"\n`
    )
  })
}

function hydrateTemplate(context, templatePath) {
  const templateSource = fs.readFileSync(path.join(__dirname, templatePath), {
    encoding: `utf8`,
  })

  const template = ejs.compile(templateSource)
  return template(context)
}
