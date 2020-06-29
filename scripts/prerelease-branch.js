/**
 * This script publishes a prerelease tag to NPM based on the current branch name
 * It is based on this article from IBM:
 * https://developer.ibm.com/articles/d-private-npm-modules-travis-ci-presence-insights-trs/
 *
 * We are bypassing standard-version here as we only want to publish a new and short-lived version to NPM
 */
import sh from "shelljs"
import chalk from "chalk"
import format from "date-fns/format"
import addMinutes from "date-fns/addMinutes"
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

if (branch === `main` || branch === `dev`) {
  sh.echo(
    chalk.yellow(
      'Branch prereleases are disabled for "main" and "dev" branches'
    )
  )
  sh.exit(0)
}

const normalizedBranch = branch.replace(/(\/|_)/g, "-").normalize()

/**
 * Important: we're formatting current UTC time as yyyyMMdd'T'HHmm
 * with T as a separator between date and time
 * This is because a pre-release version's identifiers must comprise only ASCII alphanumerics and hyphen [0-9A-Za-z-].
 * Identifiers must not be empty and numeric identifiers MUST NOT include leading zeroes
 * (see https://npm.community/t/npm-version-cannot-set-version-with-numeric-commit-hash/2467/2).
 * Using "T" prevents NPM treating something like "20191218T0139" as an incorrect identifier
 */
const now = new Date()
const utcDate = addMinutes(now, now.getTimezoneOffset())
const formattedTime = format(utcDate, "yyyyMMdd'T'HHmm")

const version = `${pkg.version}-${normalizedBranch}-${formattedTime}`
const tag = normalizedBranch

sh.echo(
  chalk.cyan(`Tagging version ${chalk.yellow(version)} as ${chalk.yellow(tag)}`)
)

const runCommand = command => {
  sh.echo(chalk.cyan(`Running ${chalk.yellow(command)}`))

  if (sh.exec(command).code !== 0) {
    // properly exit if command fails
    sh.exit(1)
  }
}

const packageName = pkg.name

sh.cd(sh.pwd())

// Bump the version without a git tag since we're not going to push it to Git
runCommand(`npm version ${version} --no-git-tag-version`)
// Publishes tag to NPM
runCommand(`npm publish --tag ${tag}`)
// Attaches distribution tag to the new version
runCommand(`npm dist-tag add ${packageName}@${version} ${tag}`)
