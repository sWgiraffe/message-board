module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		inline: true,
	},
	module: {
		rules: [
			{
				test: /(\.js|\.jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"env", "react"
						]
					}
				},
				exclude: /node_modules/
			}
		]
	}
}
