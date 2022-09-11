const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJS = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "dist/css/[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserJS(), new CssMinimizerPlugin({})],
  },
  output: {
    publicPath: ".",
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: { minimize: true, attributes: false },
        },
      },
    ],
  },
});
