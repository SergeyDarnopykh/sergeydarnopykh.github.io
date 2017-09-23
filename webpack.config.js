

module.exports = {
	context: __dirname + '/assets',
	
	entry: {
		common: './js/common.js'
	},
	
	output: {
		path: __dirname + '/dist',
		publicPath: process.env.NODE_ENV == 'production' ? 'http://localhost:8080/dist/' : '/dist/',
		filename: 'js/[name].js'
	},
	
	module: {
		loaders: [
			{
				test: /\.less$/,
				loaders: ['style-loader', 'css-loader', 'less-loader'],
			}
		]
	}
};