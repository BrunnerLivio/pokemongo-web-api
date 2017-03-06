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

module.exports = {
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
};
