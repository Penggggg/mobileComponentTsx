var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app : [path.join(__dirname, 'src/app.tsx')]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|gif|mp3)$/,
                loader: 'url-loader?limit=30000'
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'url-loader'
            }
        ],
        preLoaders: [
            {

                 test: /\.js$/, loader: "source-map-loader"
            }
        ]
    }
};
