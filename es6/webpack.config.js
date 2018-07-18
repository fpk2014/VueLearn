const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: {
		main: './src/js/main.js',
		profile: './src/js/profile.js',
		circle: './src/js/circle.js',
		circleplus: './src/js/circleplus.js'
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ["es2015"]
						}
					}
				]
			}
		]
	},
	output:{
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	mode: "development"
}