const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: __dirname + "/index.html" 
		})
	],
	module: {
		rules:[
			{
				test: /\.css$/,
				use:[
				'style-loader',
				'css-loader'
				]
			},
			{
				test: /\.{png|svg|jpg|gif}$/,
				use:[
					'file-loader'
				]
			}
		]
	},
	mode: 'development'
}