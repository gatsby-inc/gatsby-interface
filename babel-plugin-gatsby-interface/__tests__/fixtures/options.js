const path = require("path")

module.exports = {
  sourceType: "module",
  plugins: [path.resolve(__dirname, "../../index.js")],
  presets: ["@babel/preset-react"],
}
