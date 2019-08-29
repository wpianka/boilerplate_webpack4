const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, options) => {
    const isProd = (options.mode === 'production') ? true : false;

    return {
        entry: {
            vue: './src/js/vue/vue.js',
            app: './src/js/index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/[name].js'
        },

        devtool: isProd ? false : 'source-map',

        module: {
            rules: [
                {
                    test:/\.vue$/,
                    exclude: /node_modules/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: { minimize: false }
                        }
                    ]
                },
                {
                    test: /\.(scss|sass|css)$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { 
                                sourceMap: isProd ? false : true,
                                url: false,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {}
                        },
                        {
                            loader: 'sass-loader',
                            options: { 
                                sourceMap: isProd ? false : true,
                             }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    exclude: /fonts?/,
                    use:[
                        {
                           loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'images'
                            }
                        },
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: isProd ? false : true
                            },
                        }
                    ]
                },
                {
                    test: /\.(eot|svg|woff|woff2|ttf)$/,
                    exclude: /(img|images?)/,
                    use: 
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }
                }
            ]
        },

        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 9000
          },
          
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename:"./index.html"
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
                chunkFilename: "[id].css"
            }),
            new VueLoaderPlugin()
        ]
    }
}

