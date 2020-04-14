const path = require('path');

module.exports = {
    // Define entry point
    entry: './src/index.js',

    // Define output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist' // Folder from which webpack should search our files, with webpack-dev-server the website reloads automatically after we make changes (--open opens the page)
    }
}