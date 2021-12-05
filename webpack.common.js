const fs = require('fs');
const path = require('path')
require('dotenv').config()

const {styleFilesArray, jsFilesArray }= require('./staticfiles_provider')

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		bundle_js : jsFilesArray,
		bundle_css : styleFilesArray
	},
	output: {
		path: path.resolve(__dirname, './public/build'),
		filename: '[name].js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
};