const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DelayCopyWebpackPlugin = require('delay-copy-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        app: './src/ts/index.ts'
    },
    module: {
        rules: [{
                test: /\.json$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanWebpackPlugin(['script.js', 'theme/script.js']),
        new DelayCopyWebpackPlugin({
            from: 'script.js',
            to: 'theme',
            interval: 2000
        }),
    ],
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, ''),
    }
};
