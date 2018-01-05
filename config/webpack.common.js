const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function webpackConfig() {
  const config = {

    entry: {
      lib: './server/lib.ts',
      main: './server/index.ts'
    },

    resolve: {
      extensions: ['.ts', '.js']

    },

    module: {
      rules: [
        // See: https://github.com/s-panferov/awesome-typescript-loader
        { test: /\.ts$/, use: 'awesome-typescript-loader', exclude: [/\.(spec|e2e)\.ts$/] },
        // See: https://github.com/webpack/raw-loader
        { test: /\.html$/, use: 'raw-loader', exclude: [path.resolve(__dirname, 'server/index.html')] }
      ]
    },

    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {

        }
      }),
      new HtmlWebpackPlugin({
        template: 'server/index.html',
        minify: {
          minifyCSS: true,
          collapseWhitespace: true,
          removeComments: true
        },
        chunksSortMode: 'dependency'
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['lib', 'main'].reverse()
      }),

      new webpack.ContextReplacementPlugin(
        /(.+)?angular(\\|\/)core(.+)?/,
        path.join(__dirname, './src')
      )
    ],

    devServer: {
      port: 8888,
      host: '0.0.0.0',
      historyApiFallback: true,
      noInfo: true
    }

  }

  return config
}

module.exports = webpackConfig()
