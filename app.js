var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
    if(req.url=="/index"||req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        var readStream=fs.createReadStream('index.html');
        readStream.pipe(res)
    } else {
        var q=url.parse(req.url,true);
        var filename="."+q.pathname;
        fs.readFile(filename,function(err,data){
            if(err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                var errorPage=fs.readFileSync('404.html');
                res.write(errorPage);
                return res.end();

            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        })
    }
}).listen(8080);