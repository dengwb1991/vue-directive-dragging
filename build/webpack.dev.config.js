const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const portfinder = require('portfinder')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const base = require('./webpack.base.config.js')
const merge = require('webpack-merge')
const config = require('../config')

const configuration = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './examples/main.js'
  },
  devServer: {
    host: config.dev.host,
    port: config.dev.port,
    compress: true,
    open: true
  }
})

configuration.plugins.splice(
  1,
  0,
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(__dirname, '../examples/index.html'),
    inject: true
  })
)

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      configuration.devServer.port = port

      // Add FriendlyErrorsPlugin
      configuration.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${configuration.devServer.host}:${port}`],
        },
        onErrors: undefined
      }))

      resolve(configuration)
    }
  })
})