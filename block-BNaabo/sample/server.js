var express=require('express');
var app=express();



app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})
console.log(__dirname);
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/json',(req,res)=>{
    console.log(req.body);
})
app.post('/contact',(req,res)=>{
    console.log(req.body);
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html',(err)=>{
        if(err)throw err;

    });

})


app.listen(3000,()=>{
    console.log('Server is listening at port 3k');
})