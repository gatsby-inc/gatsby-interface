/**
 * This script publishes a prerelease tag to NPM based on the current branch name
 * It is based on this article from IBM:
 * https://developer.ibm.com/articles/d-private-npm-modules-travis-ci-presence-insights-trs/
 *
 * We are bypassing standard-version here as we only want to publish a new and short-lived version to NPM
 */
import sh from "shelljs"
import chalk from "chalk"
import moment from "moment"
import pkg from "../package.json"

const branch = process.env.CIRCLE_BRANCH

sh.echo(chalk.cyan(`Preparing prerelease for branch ${branch}`))

if (!branch) {
  sh.echo(
    chalk.red(
      `Could not detect Git branch, process.env.CIRCLE_BRANCH is ${branch}`
    )
  )
  sh.exit(1)
}

if (branch === `master` || branch === `dev`) {
  sh.echo(
    chalk.yellow(
      'Branch prereleases are disabled for "master" and "dev" branches'
    )
  )
  sh.exit(0)
}

const normalizedBranch = branch.replace(/(\/|_)/g, "-").normalize()

const version = `${pkg.version}-${normalizedBranch}-${moment()
  .utc()
  .format("YYYYMMDD‑HHmm")}`
const tag = normalizedBranch

sh.echo(
  chalk.cyan(`Tagging version ${chalk.bold(version)} as ${chalk.bold(tag)}`)
)

if (sh.exec(`npm version ${version}`).code !== 0) {
  // properly exit if version fails
  sh.exit(1)
}

const packageName = pkg.name

if (sh.exec(`npm dist‑tag add ${packageName}@${version} ${tag}`).code !== 0) {
  // properly exit if adding the dist‑tag fails
  sh.exit(1)
}

if (sh.exec(`npm publish ‑‑tag ${tag}`).code !== 0) {
  // properly exit if publish fails
  sh.exit(1)
}
