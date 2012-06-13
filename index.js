var bee = require("beeline");
var http = require("http");
var fs = require("fs");
//var nowjs = require("now");

var cache = {};
cache['index.html'] = fs.readFileSync('./resources/index.html');
cache['/dj'] = fs.readFileSync('./resources/dj/dj_home.html');
cache['/dj/about'] = fs.readFileSync('./resources/dj/dj_about.html');
cache['/dj/info'] = fs.readFileSync('./resources/dj/dj_info.html');
cache['/dj/pricing_contact'] = fs.readFileSync('./resources/dj/dj_pricing_contact.html');
cache['/dj/dj_style.css'] = fs.readFileSync('./resources/dj/dj_style.css');
cache['/personal'] = fs.readFileSync('./resources/personal/personal_home.html');
cache['/personal/projects'] = fs.readFileSync('./resources/personal/personal_projects.html');
cache['/personal/gallery'] = fs.readFileSync('./resources/personal/personal_gallery.html');
cache['/personal/blog'] = fs.readFileSync('./resources/personal/personal_blog.html');
cache['/personal/professional'] = fs.readFileSync('./resources/personal/personal_professional.html')
cache['/personal/style.css'] = fs.readFileSync('./resources/personal/personal_style.css')


var router = bee.route({ // Create a new router
	"/": function(req, res) {
		console.log("served home");
       	res.writeHead(200, {"Content-Type": "text/html"});
	    res.write(cache['index.html']);
	    res.end();
    },

	"/`path...`": function(req, res, tokens, values) {

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
