define(function(require, exports, module) {
	var c = require('./c');
	exports.name = 'a';

	exports.say = function() {
		return 'a' + c.name;
	};
});