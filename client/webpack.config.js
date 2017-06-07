var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devtool: 'eval',//http://www.cnblogs.com/hhhyaaon/p/5657469.html
    entry: {
        hot: 'webpack-dev-server/client?http://localhost:3000',
        app: './src/index',
        vendor: []
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
        extensions: ['', '.js', '.ts', '.tsx']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loaders: ['awesome-typescript-loader'],
            include: path.join(__dirname, 'src')
        }]
    }
};
