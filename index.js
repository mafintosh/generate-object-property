var valid = /^[a-zA-Z_][a-zA-Z_0-9]*$/;

var gen = function(obj, prop) {
	if (valid.test(prop)) return obj+'.'+prop;
	return obj+'['+JSON.stringify(prop)+']'
};

gen.valid = valid;
module.exports = gen;