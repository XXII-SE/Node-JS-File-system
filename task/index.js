const http = require ('http');
const fs = require('fs')

const server = http.createServer(function (req,res){
    fs.writeFile('some text','posts.txt');

    res.writeHead(200);
    res.end('We captured the info')

});
server.listen(4000,function(){
    console.log('server is up and running')
})