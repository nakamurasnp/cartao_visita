var http = require("http");
const localtunnel = require("localtunnel");

http.createServer(
    function(req, res){
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('Ola Mundo \n');
    }
).listen(8000, '127.0.0.1');

console.log("Servidor rodando em 127.0.0.1:8000");
(async() => {
    const tunnel = await localtunnel({port:8000});
    console.log(tunnel.url);
})();