const generator = require('./generator')

// Invoke generator directly with the ToDo List example
new generator({
  appconfig: require('codotype-generator/examples/todo-list.json'),
  buildId: 'app_5acfeea85535afdb753d55f7' // TODO - this should be auto-generated
}).write()


// NOTE - in-progress generator metadata structure
// QUESTION - should this be encapsulated in package.json? ...probably not
module.exports = {
  name: 'Codotype Generator Starter',
  keywords: [],
  generator: generator,
  destination_dir: 'my_new_generator',
  // TODO - rename `additional_options`
  // QUESTION - should these just reuse the standard blazeplate attribute data structure?
  // ^^ This is a great idea and it enables this to get integrated quickly :)
  additional_options: []
}