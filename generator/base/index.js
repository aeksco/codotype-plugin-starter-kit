const Generator = require('codotype-generator/generators/util/generator')

// // // //

module.exports = class GeneratorBase extends Generator {
  async write () {

    // TODO - this should define the destination path for the files created by this generator
    await this.ensureDir(this.options.build.dest.client.root)

    // QUESTION - any way to get rid of all these `__dirname` statements?
    await this.copyDir(
      __dirname + '/templates',
      this.options.build.dest.client.root
    )

  }
}

