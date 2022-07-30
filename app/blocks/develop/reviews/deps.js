'use strict'

module.exports = {

	nodes: [],

	modules: [
		{
			from :'node_modules/swiper/',
			inject: 'swiper-bundle.min.js' ,
			import:['swiper.min.css'],
		},
	],

}
