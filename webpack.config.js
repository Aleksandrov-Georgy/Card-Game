const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isProduction = process.env.NODE_ENV === 'development';

module.exports = {
  entry: ['./index.ts', './2.ts'],
  mode: isProduction ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "img-cart", to: "static" },
      ],
    }),
    new HtmlWebpackPlugin({
        template: "./index.html", 
    }),
    new HtmlWebpackPlugin({
      filename: '2.html',
      template: './2.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  optimization: {
    minimizer: [
      '...', new CssMinimizerPlugin(),
    ],
  },
  devtool: isProduction ? "hidden-source-map" : "source-map",
 
}

