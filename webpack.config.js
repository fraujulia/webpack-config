const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "[name]-[fullhash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html"
  }),
  new MiniCssExtractPlugin({
    filename: "[name]-[fullhash].css",
  })
],
  devServer: {
    static: {
      directory: join(__dirname, 'src'),
    },
    compress: true,
    port: 3000,
  },
  devtool: "inline-source-map",
};
