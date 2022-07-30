'use strict'

module.exports = {

	nodes: [],

	modules: [
		{
			from :'node_modules/swiper/',
			inject: [ 'swiper-bundle.min.js','swiper-bundle.min.js.map'] ,
			import:['swiper.min.css'],
		}
	],

}
