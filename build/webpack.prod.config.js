const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');

webpackBaseConfig.plugins = [];

module.exports=merge(webpackBaseConfig,{
    output: {
        publicPath: './',
        filename: 'js/[name].[hash:8].js'
    },
    plugins: [
        new ExtractTextPlugin({
            publicPath:'css/',
            filename: 'css/[name].[hash:8].css',
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../dist/index.html',
            template: './src/template/index.ejs',
            inject: false
        })
    ]
})
