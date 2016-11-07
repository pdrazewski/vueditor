module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
			    test: /\.scss$/,
			    loader: 'style!css!sass?sourceMap!postcss'
			}
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
	  alias: {
	    'vue$': 'vue/dist/vue.js'
	  }
	},
	postcss: function() {
    	return [autoprefixer];
	}
}