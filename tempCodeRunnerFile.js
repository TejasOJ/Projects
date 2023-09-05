const http=require("http")

const server=http.createServer((request,response)=>{
    console.log("request made")
})

server.listen(3000,"localhost",()=>{
    console.log("actively listening on port 3000")
})