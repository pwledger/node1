// 자바 스크립트 관련 
// 문법 정리 및 서버 node.js 를 사용한 서버 계통 
var http = require('http') // 파이썬 에서 import 같은거 : 외부 모듈 가져오는 것
var fs = require('fs')
var app = http.createServer(function(request , response){
    //if(request.url == "/"){
    //    url = '/index.html'
    //}
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    response.end("hello")
})

app.listen(3000)