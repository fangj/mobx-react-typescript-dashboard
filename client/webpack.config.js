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
        'alertify':'alertify',
        'antd': 'antd',
        'axios': 'axios',
        'classnames': 'classNames',
        'd3': 'd3',
        'geopattern': 'GeoPattern',
        'jquery': 'jQuery',
        'lodash': '_',
        'parse': 'Parse',
        'pubsub-js': 'PubSub',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'toastr':'toastr',
        'mobx': 'mobx',
        'mobx-react': 'mobxReact',
        'mockjs': 'Mock',
        'mobx-react-devtools': 'mobxDevtools',
    },
    output: {
        path: path.join(__dirname, '..', 'server', 'public', 'build'),
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
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            //.css的className 保持原样
                            loader: 'typings-for-css-modules-loader?modules&importLoaders=1&localIdentName=[local]&namedExport&camelCase'
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            //.less的className 进行修饰
                            loader: 'typings-for-css-modules-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&namedExport&camelCase&less!less-loader'
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
        //typings-for-css-modules-loader needs
        new webpack.WatchIgnorePlugin([
            /(less|css)\.d\.ts$/
        ])
    ]
};
