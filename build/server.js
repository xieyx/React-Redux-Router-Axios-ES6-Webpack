const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const options = require('./webpack.dev')
const config = require('./webpack.common')
const open = require('open')

new WebpackDevServer(webpack(options), options.devServer)
  .listen(config.port, '127.0.0.1', (err) => {
    if (err) {
      console.log(err)
    }
    console.log(`Listening at 127.0.0.1:${config.port}`)
    console.log('Opening your system browser...')
    open(`http://127.0.0.1:${config.port}/webpack-dev-server/`)
  })
