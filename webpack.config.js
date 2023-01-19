const path = require('path');

module.exports = {
    entry: "./app/dist/js/app.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    }


};
