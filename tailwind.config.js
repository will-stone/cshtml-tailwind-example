/* eslint-disable unicorn/prefer-module */

const ionPreset = require("./preset")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,cshtml}"],
  presets: [ionPreset],
}
