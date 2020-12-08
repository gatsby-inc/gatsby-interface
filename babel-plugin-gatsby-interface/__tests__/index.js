const runner = require("@babel/helper-plugin-test-runner").default

jest.mock("fs-extra", () => {
  const path = require("path")
  const fs = jest.requireActual("fs-extra")

  return {
    existsSync: filePath => {
      return fs.existsSync(
        filePath.replace("gatsby-interface", path.resolve("./"))
      )
    },
  }
})

runner(__dirname)
