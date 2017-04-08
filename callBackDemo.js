// callback demo
var fs = require('fs');
function printOut(what, callback){
	return callback(what);
}
//forcing sync.
fs.readFile('text.txt', function(err,data){
	if(err){
		console.log(err);
	}
	else{

		console.log("print out the sample text.\n",data.toString().toUpperCase());
		var result2 = printOut("pramod",function(x){
			return x.toUpperCase().substring(1,4);
		});
		console.log(result2);
	}

});

//async
function makeLower(str){
	return str.toLowerCase();
}

var result = printOut("PRAMOD", makeLower);


console.log(result);