const path = require('path');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve:{
        alias:{
            'vue$':'vue/dist/vue.js'
        }
    },
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