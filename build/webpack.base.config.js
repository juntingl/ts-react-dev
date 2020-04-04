const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.ts',
  },
  /**
   * 构建后输出规则
  */
  output: {
     path: path.join(__dirname, 'dist'), // 输出路径
     filename: '[name].js', // 输出的文件名
  },
  /**
   * 解析文件规则
  */
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  /**
   * 使用相关 module 解析各种语言
  */
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('public/index.html'),
      chunksSortMode: 'none'
    })
  ]
}