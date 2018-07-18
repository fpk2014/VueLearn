const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	mode: "development",
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname+'/index.html'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.vue$/,
				use:[
					'vue-loader'
				]
			},
            {
                test: /\.js$/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ["es2015"],
					}
				}]               
            }
		],
	}
}