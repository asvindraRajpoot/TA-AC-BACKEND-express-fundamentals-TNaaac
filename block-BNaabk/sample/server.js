var express =require('express');

var app=express();


app.get('/',(req,res)=>{
    res.send('Hello Asvindra,Welcome to Express World');
})

app.listen(3000,()=>{
    console.log('Server listening at port 3k');
})