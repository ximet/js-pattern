'use strict';
const path = require('path');
const webpack = require('webpack');

const webpackConfig = {
    context: __dirname + '/js',
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};

module.exports = webpackConfig;
