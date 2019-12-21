const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'My React Memo App',
      short_name: 'Memo',
      description: 'My React Memo App for PWA Workshop.',
      background_color: '#FFF',
      crossorigin: 'use-credentials',
      theme_color: '#EEE',
      icons: [
        {
          src: path.resolve('src/assets/Icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new GenerateSW({
      include: [/\.html$/, /\.js/] // cache these files.
    })
  ]
}