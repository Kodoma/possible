const Express = require('express')
const Port = 8081
const App = Express()

App.use('/', Express.static(__dirname + '/build'))

App.listen(Port, '0.0.0.0', () => {
  console.log(`Possible UI test server running on port ${Port}`)
})
