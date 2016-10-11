const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config  = require('./webpack.config');
const open = require('open');

new webpackDevServer(webpack(config), config.devServer)
.listen(config.port, '172.30.204.92', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Listening at 172.30.204.92:' + config.port);
    console.log('Opening your system browser...');
    open('http://172.30.204.92:' + config.port + '/webpack-dev-server/');
})
