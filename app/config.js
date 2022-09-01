'use strict'


// Export

module.exports = {

	app: {
		name: 'Kiwi ECO',
	},

	use: {
		templates: '.html',
		scripts: '.js',
		styles: '.scss',
	},

	build: {
		imagemin: ['png', 'jpg', 'svg', 'gif'],
		sourcemaps: ['js', 'css'],
		autoprefixer: ['last 3 versions', 'ie 10', 'ie 11'],
		mainBundle: 'app',
		mainLevel: 'develop',
		globalStyles:
			'app/blocks/develop/app/assets/vars.scss',
		pugMap: false,
		addVersions: true,
	},


	dist: {
		styles: 'styles',
		fonts: 'styles/fonts',
		img: 'styles/img',
		symbol: 'styles/img',
		scripts: 'scripts',
		static: 'static',
		favicons: 'favicons',
	},

	favicons: {
		android: false,
		appleIcon: false,
		appleStartup: false,
		coast: false,
		favicons: true,
		firefox: false,
		windows: false,
		yandex: false,
	},

	HTMLBeautify: {
		indent_size: 4, // размер отступа
		indent_char: ' ', // знак отступа
		indent_with_tabs: true, // отступ табами
		indent_inner_html: true, // нужны ли отступы внутри тега html
		end_with_newline: false, // нужна ли пустая строка в конце файла
		extra_liners: [], // список тегов с пустой строкой перед собой
		preserve_newlines: true, // можно ли использовать пустые строки
		max_preserve_newlines: 2, // максимальное кол-во пустых строк подряд
		inline: [], // список строчных тегов (по умолчанию по стандарту w3c)
		unformatted: [], // список тегов, которые не нужно форматировать (по умолчанию inline)
		content_unformatted: ['pre', 'textarea'], // список тегов, у которых не нужно форматировать содержимое
	},

	fastMake: {
		b: ['.js', '.scss', '.html', 'img']
	},

	optimization: {

		jpg: {
			progressive: true,
			arithmetic: false,
		},

		png: {
			optimizationLevel: 5, // можно указать 0-7
			bitDepthReduction: true,
			colorTypeReduction: true,
			paletteReduction: true,
		},

		gif: {
			optimizationLevel: 1, // можно указать 1-3
			interlaced: true
		},

		// Для svg нужно указать массив c настройками!
		svg: [
			{cleanupIDs: false},
			{removeViewBox: false},
			{mergePaths: false},
		],

		// Тут можно указать названия (без расширения), которые не нужно оптимизировать
		ignore: []

	},
}

