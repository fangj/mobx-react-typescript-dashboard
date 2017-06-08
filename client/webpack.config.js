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
        "antd": "antd",
        "axios": "axios",
        "geopattern": "GeoPattern",
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'mobx': 'mobx',
        'mobx-react': 'mobxReact',
        'mockjs': 'Mock',
        'mobx-react-devtools': 'mobxDevtools',
        "classnames": "classNames"
    },
    output: {
        path: path.join(__dirname, "..", "server", "public", "build"),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                loader: 'awesome-typescript-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
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
                            loader: 'less-loader'
                        },
                        {
                            loader: 'typed-css-modules-loader',
                            options: {
                                camelCase: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css', allChunks: true})
    ]
};
