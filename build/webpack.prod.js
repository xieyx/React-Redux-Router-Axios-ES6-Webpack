const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const config = require('./webpack.common')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: config.BUILD_PATH,
    filename: `${config.publicPath}[name].[hash:8].js`,
    // 用于打包require.ensure(代码分割)方法中引入的模块
    chunkFilename: `${config.publicPath}[name].[chunkhash].js`,
    publicPath: './',
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['style-loader', 'css-loader'],
        }),
        include: config.APP_PATH,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([config.BUILD_DIR]),
    // 抽离css
    new ExtractTextPlugin({
      filename: `${config.publicPath}[name].[contenthash:8].css`,
    }),

    // 压缩js
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true, // 打包后去除console.log
          collapse_vars: true, // 内嵌定义了但是只用到一次的变量
          reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
          pure_funcs: ['console.log'],
        },
      },
      sourceMap: true,
      parallel: true, // 使用多进程并行运行来提高构建速度
    }),

    // 作用域提升,提升代码在浏览器执行速度
    new webpack.optimize.ModuleConcatenationPlugin(),

    // 根据模块相对路径生成四位数hash值作为模块id
    new webpack.HashedModuleIdsPlugin(),

    new HtmlWebpackPlugin({
      template: config.TEMPLATE_FILE_PATH, // 模板
      favicon: config.TEMPLATE_ICO_PATH,
      filename: 'index.html',
      inject: true,
      hash: true,
      minify: {
        // 删除Html注释
        removeComments: true,
        // 去除空格
        collapseWhitespace: true,
        // 去除属性引号
        removeAttributeQuotes: true,
      },
    }),
  ],
})
