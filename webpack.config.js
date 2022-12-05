// HTML LUGIN
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require('dotenv-webpack');
require('dotenv/config')


module.exports = {
    entry: './js/app.js',
    mode: process.env.NODE_ENV,
    devServer: {
        open: true
    },
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    'postcss-loader',
                ],
            },

            {
                test: /\.(png|jp(e*)g|svg)$/,
                type: 'asset/resource',
            }
        ],
    },
    optimization: {
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            `...`,
            new CssMinimizerPlugin(),
        ],
        minimize: true //for development mode
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        new Dotenv({
            path: `./.env`
        }),
    ],

};