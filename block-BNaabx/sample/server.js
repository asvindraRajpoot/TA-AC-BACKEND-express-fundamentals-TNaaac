var express =require('express');
var app = express();

// Q. Create a middleware which is similar to morgan(logger) which logs

// - requested method
// - requested url
// - current time


app.use((req,res,next)=>{
    const today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(req.method,req.url,time);
    next();

})


// Q. Create a middleware which is similar to express.json()
app.use((req,res,next)=>{
    req.body=JSON.parse(req.body);
    next();
})

// - parses json data and puts it into `req.body`

// Q. Create a middleware which functions similar to express.static()

app.use((path,req,res,next)=>{

    req.url=req.url+path;
    next();
})






app.listen(3000,()=>{
    console.log('server is listening at port 3000');
})