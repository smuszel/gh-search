const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const paths = {
    index: path.resolve(__dirname, 'src', 'index.tsx'),
    template: path.resolve(__dirname, 'src', 'index.html'),
};

/** @type {webpack.Configuration} */
module.exports = {
    entry: {
        index: paths.index,
    },
    resolve: {
        extensions: ['.js', '.css', '.ts', '.tsx'],
    },
    module: {
        rules: [{ test: /\.(js|ts|tsx)/, use: ['babel-loader'] }],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlPlugin({ template: paths.template }),
    ],
};
