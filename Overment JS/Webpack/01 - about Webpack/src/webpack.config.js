
const {resolve} = require('path');

module.exports = {
    entry: './src/app/js',
    output: {
        filename: 'bundle.js',
        path: resolve(_dirname, 'dist')
    }
};