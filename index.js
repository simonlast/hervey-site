var bee = require("beeline");
var http = require("http");
var fs = require("fs");
//var nowjs = require("now");


var cache = {};
cache['index'] = fs.readFileSync('./resources/index.html');

var router = bee.route({ // Create a new router
	"/": function(req, res) {
		console.log("served home");
       	res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(cache['index']);
	    res.end();
    },
	
    "`404`": function(req, res) {
        
    },
    "`503`": function(req, res, err) {
        
    }
});

httpServer = http.createServer(router).listen(8888);
