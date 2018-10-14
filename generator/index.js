const Generator = require('@codotype/generator')

module.exports = class MyNewGenerator extends Generator {
  async write() {
    await this.composeWith('./base')
  }
}
