
'use strict'

module.exports = {

	modules: [
		{
			from: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/',
			inject: [ 'jquery.min.js' ],
		},
		{
			from: 'node_modules/jquery-validation/dist/',
			inject: [ 'jquery.validate.min.js' ],
		},
		{
			from: 'node_modules/@fancyapps/fancybox/dist/',
			// import: ,
			inject:  ['jquery.fancybox.min.js','jquery.fancybox.css'],
		}
	],

}
