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
                test: /\.css$/,
                loader: 'typings-for-css-modules-loader?modules&namedExport&camelCase'
            },
            {
                test: /\.less$/,
                loader: 'typings-for-css-modules-loader?modules&namedExport&camelCase&less'
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
