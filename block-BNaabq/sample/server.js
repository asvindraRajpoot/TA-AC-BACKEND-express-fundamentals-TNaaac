var express=require('express');
var app=express();
var logger=require('morgan');
var cookieParser=require('cookie-parser');

app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next)=>{
   
       
        res.cookie('username','Asvindra Rajpoot');
   
        console.log('req',req.cookies);

 
    next();
})




app.listen(3000,()=>{
    console.log('Server is listening at 3000 port');
})