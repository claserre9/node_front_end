/* Do not delete this file
* You can rename and modify
* */


const $ = require('jquery')

//This line allows including additional css files from node_modules
import 'bootstrap/dist/css/bootstrap.min.css'


$(document).ready(function () {
	$('#app').html('jQuery injected here !!!')
})