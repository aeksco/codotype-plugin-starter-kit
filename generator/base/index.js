const { Generator } = require('codotype-generator')

module.exports = class GeneratorBase extends Generator {
  async write () {
    await this.copyDir(
      this.templatePath(),
      this.destinationPath()
    )
  }
}

