var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var SRC_PATH = path.resolve(BUILD_PATH, 'assets');

const publicPath = '/assets/';
const port = 8008;

module.exports = {
    mode: 'development',
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
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                },
                include: APP_PATH
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            port: port,
            debug: true
        })
    ]
};
