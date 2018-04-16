const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.common')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: config.APP_PATH,
    historyApiFallback: true,
    hot: true,
    port: config.port,
    publicPath: `/${config.publicPath}`,
    noInfo: false,
    before: require('../mock'),
  },
  devtool: '@inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      port: config.port,
      debug: true,
    }),
  ],
})
