var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // devtool: 'eval',//http://www.cnblogs.com/hhhyaaon/p/5657469.html
    entry: {
        hot: 'webpack-dev-server/client?http://localhost:3000',
        app: './src/index',
        // vendor: []
    },
    externals: {
        "axios": "axios",
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'mobx': 'mobx',
        'mobx-react': 'mobxReact',
        'mockjs': 'Mock',
        'mobx-react-devtools': 'mobxDevtools',
    },
    output: {
        path: path.join(__dirname, "..", "server", "public", "build"),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            camelCase: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'typed-css-modules-loader',
                        options: {
                            camelCase: true
                        }
                    }
                ]
            }
        ]
    },
    // module: {
    //     loaders: [
    //         {
    //             test: /\.tsx?$/,
    //             loaders: ['awesome-typescript-loader'],
    //             include: path.join(__dirname, 'src')
    //         },
    //         // css
    //         {
    //             test: /\.css$/,
    //             loader: ExtractTextPlugin.extract({
    //                 fallback:'style-loader',
    //                 use:'css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]'
    //             })
    //         },
    //         //less
    //         {
    //             test: /\.less$/,
    //             loader: ExtractTextPlugin.extract({
    //                 fallback:'style-loader',
    //                 use:'css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]!less-loader'
    //             })
    //         }
    //     ]
    // },
    // plugins:[
    //     new ExtractTextPlugin({filename:'style.css', allChunks: true})
    // ]
};
