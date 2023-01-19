const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/dist/js/app.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/dist/app.html',
            filename: 'app.html'
        })
    ]
};
