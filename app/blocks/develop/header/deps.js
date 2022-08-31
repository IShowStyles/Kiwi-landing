'use strict'

module.exports = {

	modules: [
		{
			from: 'node_modules/swiper/',
			inject: 'swiper-bundle.min.js',
			import: ['swiper.min.css'],
		},
		{
			from: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/',
			inject: ['jquery.min.js'],
		},
		{
			from: 'node_modules/jquery-validation/dist/',
			inject: ['jquery.validate.min.js'],
		},
		{
			from: 'node_modules/@fancyapps/fancybox/dist/',
			inject: ['jquery.fancybox.min.js', 'jquery.fancybox.css'],
		},
		{
			from :'node_modules/swiper/',
			inject: [ 'swiper-bundle.min.js','swiper-bundle.min.js.map'] ,
			import:['swiper.min.css'],
		},
	],

}
