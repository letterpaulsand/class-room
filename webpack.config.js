// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/html/index/index.js',
//     output: {
//         path: path.resolve(__dirname, 'index'),
//         filename: 'index.[hash].js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, "css-loader"],
//             },
//         ],
//     },
//     plugins: [new MiniCssExtractPlugin({
//         filename: 'index.[hash].css'
//     }),
//     new HtmlWebpackPlugin({
//         template: './src/html/index.html'
//     })],
// };









const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/html/main/index.js',
    output: {
        path: path.resolve(__dirname, 'main'),
        filename: 'index.[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpg)/,
                type: 'asset/resource'
            }

        ],
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'index.[hash].css'
    }),
    new HtmlWebpackPlugin({
        template: './src/html/main/index.html'
    })],
};







// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/html/send/index.js',
//     output: {
//         path: path.resolve(__dirname, 'send'),
//         filename: 'index.[hash].js',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, "css-loader"],
//             },
//             {
//                 test: /\.(png|jpg)/,
//                 type: 'asset/resource'
//             }

//         ],
//     },
//     plugins: [new MiniCssExtractPlugin({
//         filename: 'index.[hash].css'
//     }),
//     new HtmlWebpackPlugin({
//         template: './src/html/send/index.html'
//     })],
// };

