const path = require('path');

module.exports = {
	// context: path.join(__dirname, 'src'),
	entry: [
		'./src/main.js'
	],
	output: {
		path: __dirname,
		publicPath: "/",
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			}
		]
	},
	// resolve: {
	// 	modules: [
	// 		path.join(__dirname, 'node_modules')
	// 	]
	// }
	devServer: {
		contentBase: './',
		historyApiFallback: true
	}
}