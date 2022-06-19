exports.config = {
  tests: './Miro/test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://dummy.restapiexample.com/api'
    },
    // .. add JSONResponse helper here
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test'
}