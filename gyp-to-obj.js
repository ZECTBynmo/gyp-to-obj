//////////////////////////////////////////////////////////////////////////
// gyp-to-obj - Read gyp files and serialize them into JavaScript objects
//////////////////////////////////////////////////////////////////////////
//
// Main script!
/* ----------------------------------------------------------------------
													Object Structures
-------------------------------------------------------------------------
	
*/
//////////////////////////////////////////////////////////////////////////
// Requires
var JSON5 = require("JSON5"),
	fs = require("fs");

//////////////////////////////////////////////////////////////////////////
// Namespace (lol)
var SHOW_DEBUG_PRINTS = true;
var log = function( a ) { if(SHOW_DEBUG_PRINTS) console.log(a); };	// A log function we can turn off


var GypToObj = exports;


//////////////////////////////////////////////////////////////////////////
// Read in a gyp file and return it's object representation  
GypToObj.read = function( path ) {
	contents = {};

	try { 
		var contents = JSON5.parse(fs.readFileSync(path, "utf8"));
	} catch( err ) {
		console.log( "ERROR" );
		console.log( err );
	}

	return contents
}