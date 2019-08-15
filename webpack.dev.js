const path = require('path'); 
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        publicPath: '/dist',
        contentBase: path.join(__dirname, 'dist'),
        index: 'index.html',
        watchContentBase: true,
        open: "Google Chrome",
        host: 'localhost',
        port: 5000,
        progress: true,
        hot: true,
        overlay: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        writeToDisk: false
    }
});