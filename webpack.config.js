/* eslint-disable */
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

const paths = {
    index: path.resolve(__dirname, 'src', 'index.tsx'),
    template: path.resolve(__dirname, 'src', 'index.html'),
    usersFixture: path.resolve(__dirname, 'cypress', 'fixtures', 'users.json'),
    userDetailsFixture: path.resolve(
        __dirname,
        'cypress',
        'fixtures',
        'userDetails.json',
    ),
};

/** @type {webpack.Configuration} */
module.exports = {
    entry: {
        index: paths.index,
    },
    devServer: {
        before: app => {
            app.get('/users/:name', (req, res) => {
                return res.json(require(paths.userDetailsFixture));
            });
            app.get('/search/users', (req, res) => {
                return res.json(require(paths.usersFixture));
            });
        },
    },
    resolve: {
        extensions: ['.js', '.css', '.ts', '.tsx'],
    },
    module: {
        rules: [{ test: /\.(js|ts|tsx)/, use: 'babel-loader' }],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlPlugin({ template: paths.template }),
    ],
};
