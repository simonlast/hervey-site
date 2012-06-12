var bee = require("beeline");
var http = require("http");
var fs = require("fs");
//var nowjs = require("now");


var cache = {};
cache['index.html'] = fs.readFileSync('./resources/index.html');
cache['style.css'] = fs.readFileSync('./resources/style.css');

var router = bee.route({ // Create a new router
	"/": function(req, res) {
		console.log("served home");
       	res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(cache['index.html']);
	    res.end();
    },

	"/resources/`path...`": function(req, res, tokens, values) {

       	res.writeHead(200, {"Content-Type": "text/html"});
		if(cache[tokens['path']]){
			res.write(cache[tokens['path']]);
			console.log("served " +  tokens['path']);		
		}
	    res.end();
    },
	
    "`404`": function(req, res) {
        
    },
    "`503`": function(req, res, err) {
        
    }
});

httpServer = http.createServer(router).listen(8888);
