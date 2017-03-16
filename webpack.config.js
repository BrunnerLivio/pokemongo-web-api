var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = [{
	entry: './src/client/app/app.ts',
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, './src/client/build'),
		filename: 'app.js'
	},
	module: {
		loaders: [{
				test: /\.ts$/,
				loader: 'ts-loader'
			},
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loaders: ['url-loader?limit=80000']
			}, {
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader']
			}
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
}, {
	entry: './src/index.ts',
	target: 'node',
	devtool: 'source-map',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.js'
	},
	module: {
		loaders: [{
			test: /\.ts$/,
			loader: 'ts-loader'
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		proxy: {
			'*': 'http://localhost:8080'
		}
	},
	externals: nodeModules
}];
