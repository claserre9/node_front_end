const fs = require('fs');
const path = require('path')
require('dotenv').config()

let jsFilesArray = []
let targetJSFiles = `./public/javascripts`
fs.readdirSync(targetJSFiles).forEach(file => {
	jsFilesArray.push(`${targetJSFiles}\/${file}`)
});

let styleFilesArray = []
let targetStyleFiles = `./public/stylesheets`
fs.readdirSync(targetStyleFiles).forEach(file => {
	styleFilesArray.push(`${targetStyleFiles}\/${file}`)
});

console.log(process.env.NODE_ENV.trim() === "production")

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