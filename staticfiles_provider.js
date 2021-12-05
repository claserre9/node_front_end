const fs = require('fs')

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


console.log(styleFilesArray, jsFilesArray)

module.exports = {jsFilesArray, styleFilesArray}