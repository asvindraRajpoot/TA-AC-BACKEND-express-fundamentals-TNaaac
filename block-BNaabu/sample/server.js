var express=require('express');
var logger=require('morgan');
var app=express();



app.use(logger('dev'));

app.use('/admin',(req,res,next)=>{
    next('Unauthorized user');
})


app.get('/',(req,res)=>{
    res.send('Welcome Home');
})
app.get('/about',(req,res)=>{
    res.send('It is all about');
})

app.use((req,res,next)=>{
    res.send('Page not found');
})

app.use((err,req,res,next)=>{
    res.send(err);
    next();
})


app.listen(2000,()=>{
    console.log('Server is listening at port 2000');
})