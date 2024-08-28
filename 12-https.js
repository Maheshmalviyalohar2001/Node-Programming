const http = require('http');

const server = http.createServer((req,res)=>{
    // res.write('welcome to our home page')
    // res.end()
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('welcome to about pages')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>this error something went wrong</p>
        <a href="/">back to home</a>
        `)

})

server.listen(5000);