var gto = require("./gyp-to-obj"),
	JSON5 = require("JSON5");

var path = "D:/Projects/node-core-audio/binding.gyp";

console.log( gto.read(path) );