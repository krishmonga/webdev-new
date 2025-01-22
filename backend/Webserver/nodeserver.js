const http=require('http');

const hostname='127.0.0.1';
const port=3000;

const server=http.createServer((req,res)=>{
if (req.url==='/') {
    res.statusCode=200;
    res.setHeader('Content-type','text/Plain')
    res.end("hello , ice tea ")
}
else if (req.url==='/ice-tea') {
    res.statusCode=200;
    res.setHeader('Content-type','text/Plain')
    res.end("hello , ice tea , thanks for ordering ")
}else{
    res.statusCode=404;
    res.setHeader('Content-type','text/Plain')
    res.end("404 nothing is found ")
}
    
})

server.listen(port,hostname,()=>{
    console.log(`server is  listening at http://${hostname}:${port}`);
    
})