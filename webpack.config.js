const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        }),
    ],
    devServer: {
        contentBase: './src/public',
        port: 7700,
    }
};