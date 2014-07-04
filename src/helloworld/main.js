define(function(require, exports, module) {
	var $ = require('$'),
		// $ = require('jquery'),
		a = require('./a'),
		b = require('./b/b');
	$('#helloworld').html('Hello World!');
	$('#a').html('say: ' + a.say());
	$('#b').html('name: ' + b.name + ' say: ' + b.say());
});