// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/html/index/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist/index'),
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
        path: path.resolve(__dirname, 'dist/main'),
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
//         path: path.resolve(__dirname, 'dist/send'),
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
//                 type: 'asset/resource',
//                 generator: {
//                     filename: 'fish.png'
//                   }
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






// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/html/look/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist/look'),
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
//         template: './src/html/look/index.html'
//     })],
// };







// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/html/setting/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist/setting'),
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
//         template: './src/html/setting/index.html'
//     })],
// };

