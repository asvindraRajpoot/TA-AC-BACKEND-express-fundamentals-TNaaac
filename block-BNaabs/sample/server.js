var express=require('express')
var form=require('form-data');
var app=express()

// - Add a GET request on '/' route and render 'index.html' file using `res.sendFile`.
// - Add a GET request on '/new' route and render new.html with a html form.
// - add a post request on '/new' route and display submitted form data
// - add a route with params to grab request made on `/users/1234` or `/users/asdf`

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
    

})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname+'/form.html');

})
app.post('/new',(req,res)=>{
  
    console.log(req.body);
    res.send(req.body);

})
app.get('/users/:username',(req,res)=>{
    var username=req.params.username;
    console.log(username);
    res.send(username)
})


app.listen(3000,()=>{
    console.log('Server is listening at port 3k');
})