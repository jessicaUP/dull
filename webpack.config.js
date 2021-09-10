const path = require("path")
const { node } = require("webpack")
const nodeExternals = require('webpack-node-externals');
const mode = process.env.NODE_ENV === "production" ? "production" : "development"
module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devtool: "source-map",
  target: 'node',
  // resolve: {
  //   fallback: { 
  //     'path': "path-browserify",
  //     'buffer': "buffer/",
  //     'assert': "assert/",
  //     'stream': "stream-browserify",
  //     'util': "util/"
  //   }
  // },
  externals: [nodeExternals()],
  stats: {
    errorDetails: true
  }
}