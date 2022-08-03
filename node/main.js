// 자바스크립트 문법  .. 
var http  = require('http')
var fs = require('fs')
var url = require('url');

var app = http.createServer(function(request, response){
    var _url = request.url
    var title = "html"
    var body = ` title : ${title} `  // ``: 변수랑 글자랑 같이 
    var queryData = url.parse(request.url, true).query;
    console.log(queryData);
    body = `<html>
            <head>
                <title> app node.js  </title>
            </head>
            <body>
                <h1> ${queryData.id} </h1>
                <p>  Hyper Text Markup Language </p>
            </body>
            </html>`

    if(_url == '/'){
        _url = '/index.html'
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(body);
    //response.end(fs.readFileSync(__dirname + _url))
})
app.listen(3000);
