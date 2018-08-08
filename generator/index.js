const Generator = require('codotype-generator/generators/util/generator')
const Base = require('./vuejs_app_base')

module.exports = class MyNewGenerator extends Generator {
  async write () {
    await this.composeWith(Base)
  }
}