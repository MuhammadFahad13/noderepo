const http = require('http');
const lodashlib = require('lodash')

const server = http.createServer((req,res) => {

    if(req.url === '/'){
        res.end("welcome to node http server")

    }
    if(req.url === '/about'){
        res.end("welcome to node about page")

    }
        res.end(`<p>Incorrect page </p> <a href ="/"> back to Home </a>`)
  
})
server.listen(5000)

const itemss =[[1,[2],[3,[4]]]]
const newItems = lodashlib.flattenDeep(itemss)
console.log(newItems)