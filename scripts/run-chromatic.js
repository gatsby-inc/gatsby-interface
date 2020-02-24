/**
 * This script runs Chromatic to make sure that visual regressions have been approved/accounted for
 *
 * Since we're maintaining a clean "master" branch, we are going to auto accept changes on merge to master
 */
import sh from "shelljs"
import chalk from "chalk"

const runCommand = command => {
  sh.echo(chalk.cyan(`Running ${chalk.yellow(command)}`))

  if (sh.exec(command).code !== 0) {
    // properly exit if command fails
    sh.exit(1)
  }
}

const branch = process.env.CIRCLE_BRANCH

if (branch !== `master`) {
  runCommand(`yarn chromatic`)
} else {
  // We know any changes that make it to master *must* have been approved
  runCommand(`yarn chromatic --auto-accept-changes`)
}
