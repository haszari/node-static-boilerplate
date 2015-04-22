require.config({
	shim: {
		underscore: {
			exports: '_'
		}
	},
	paths: {
		underscore: '../bower_components/underscore/underscore-min',
		knockout: '../bower_components/knockout/dist/knockout',
		requirejs: '../bower_components/requirejs/require'
	},
	packages: [

	]
});

require(['underscore', 'knockout'], function(_, ko) {

	console.log('PLACEHOLDER_JAVASCRIPT')

});