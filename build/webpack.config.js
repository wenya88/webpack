const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: '@/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/dist/',
    // filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use:[
            'css-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        }),
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': ExtractTextPlugin.extract({
              use: ['css-loader?minimize', 'sass-loader'],
              fallback: 'vue-style-loader'
            }),
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name]-[hash].[ext]',
        options: {
          useRelativePath: true ,
          publicPath:'../font/'
        }
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("main.css"),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@':path.resolve('./src')
    }
   
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: false
  }
}

