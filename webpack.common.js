
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {styleFilesArray, jsFilesArray }= require('./staticfiles_provider')
const TerserPlugin = require("terser-webpack-plugin");
require('dotenv').config()

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		build : jsFilesArray,
		// bundle_css : styleFilesArray
	},
	output: {
		path: path.resolve(__dirname, './public/build'),
		filename: '[name].js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader",],
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new TerserPlugin()
	],

};