const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config  = require('./webpack.config');
const open = require('open');
const port = 8008;
new webpackDevServer(webpack(config), config.devServer)
.listen(port, '127.0.0.1', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Listening at 127.0.0.1:' + port);
    console.log('Opening your system browser...');
    open('http://127.0.0.1:' + port + '/webpack-dev-server/');
})
