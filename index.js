// var fs = require('fs');
// var http = require('http');
// var server = http.createServer(function(req,res){
// 	console.log(req.url);
// 	fs.readFile('text.txt',function(err,data){
// 		if(err){
// 			console.log("Something went wrong.",err);
// 			res.writeHead(200, {'Content-Type': 'text/plan'});
// 			res.end("something went wrong "+ err);
// 		}
// 		else{
// 			res.writeHead(200, {'Content-Type': 'text/Html'});
// 			res.end(data.toString());			
// 		}
// 	});
// });

// server.listen(5000, '127.0.0.1');
// console.log("Server is running on 5000.");
var circle = require('./circle');
var area = circle.area(24);
var circum = circle.circumference(2);
console.log("A circle with radius of 24 has an area of ", circum);
console.log(circle.PI);