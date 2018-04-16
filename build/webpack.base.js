const config = require('./webpack.common')

module.exports = {
  entry: {
    app: config.INDEX_FILE_PATH,
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: config.SRC_PATH,
    filename: '[name].js',
    publicPath: `./${config.publicPath}`,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: config.CSS_LOADER_INCLUDE,
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
          },
        }],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: config.APP_PATH,
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        include: config.APP_PATH,
      },
    ],
  },
}
