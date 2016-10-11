var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var SRC_PATH = path.resolve(BUILD_PATH, 'assets');

const publicPath = '/assets/';
const port = 8091;

module.exports = {
    port: port,
    debug: true,
    devtool: 'eval',
    entry: {
        app: path.resolve(APP_PATH, 'routes/index.jsx')
    },
    output: {
        path: SRC_PATH,
        filename: '[name].js',
        publicPath: `.${publicPath}`
    },
    devServer: {
        contentBase: APP_PATH,
        historyApiFallback: true,
        hot: true,
        port: port,
        publicPath: publicPath,
        noInfo: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH
            }
        ]
    }
}
