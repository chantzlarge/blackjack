const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { ProvidePlugin } = require('webpack')

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production'
  const isDevelopment = !isProduction

  return {
    context: path.resolve(__dirname, '.'),
    devtool: isDevelopment && 'cheap-module-source-map',
    entry: path.resolve(__dirname, './web/index.tsx'),
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    output: {
      path: path.resolve(__dirname, './web/dist'),
      filename: '[name].[contenthash:8].js',
      publicPath: '/'
    },
    externals: {
      UIkit: 'uikit'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: path.resolve(__dirname, '.'),
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              configFile: path.resolve(__dirname, './babel.config.js'),
              envName: isProduction ? 'production' : 'development'
            }
          }
        },
        {
          test: /\.worker\.js$/,
          loader: 'worker-loader'
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.module.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:8].[ext]'
            }
          }
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.(eot|otf|ttf|woff|woff2)$/,
          loader: require.resolve('file-loader'),
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
      isProduction &&
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          isProduction ? 'production' : 'development'
        )
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './web/public/index.html'),
        // favicon: './web/public/favicon.ico',
        inject: true
      }),
      new ForkTsCheckerWebpackPlugin({
        async: false,
        typescript: {
          configFile: path.resolve(__dirname, './tsconfig.json')
        }
      }),
      new ProvidePlugin({
        Buffer: ['buffer', 'Buffer']
      }),
      new WorkboxPlugin.GenerateSW({
        swDest: 'service-worker.js',
        clientsClaim: true,
        skipWaiting: true
      })
    ].filter(Boolean),
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserWebpackPlugin({
          terserOptions: {
            compress: {
              comparisons: false
            },
            mangle: {
              safari10: true
            },
            output: {
              comments: false,
              ascii_only: true
            },
            warnings: false
          }
        }),
        new CssMinimizerPlugin()
      ],
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        maxSize: 512000,
        maxInitialRequests: 20,
        maxAsyncRequests: 20,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name (module, chunks, cacheGroupKey) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1]
              return `${cacheGroupKey}.${packageName.replace('@', '')}`
            }
          },
          common: {
            minChunks: 2,
            priority: -10
          }
        }
      },
      runtimeChunk: 'single'
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true
    }
  }
}
