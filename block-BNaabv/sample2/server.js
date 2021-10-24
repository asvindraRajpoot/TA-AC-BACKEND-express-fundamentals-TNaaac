var express=require('express');
var app=express();
var cookieParser=require('cookie-parser');
var logger=require('morgan');


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next)=>{
    res.cookie('username','asvindra');
    next();
})

app.use('/admin',(req,res,next)=>{
    next('Unauthorized user');
})

app.get('/',(req,res)=>{

    res.send(`<h2>Welcome to express</h2>`);
})

app.get('/about',(req,res)=>{
    res.send('My name is qwerty');
})

app.get('/users/:username',(req,res)=>{
    var username=req.params.username;
    res.send(`<h1>${username}</h2>`);
})

app.post('/form',(req,res)=>{
    res.json(req.body);

})
app.post('/json',(req,res)=>{
    res.json(req.body);
})

app.use((req,res,next)=>{
    res.send('Page not found');
  
})

app.use((err,req,res,next)=>{
    res.send(err);
   
})


app.listen(3000,()=>{
    console.log('server is listening at port 3k');
})
