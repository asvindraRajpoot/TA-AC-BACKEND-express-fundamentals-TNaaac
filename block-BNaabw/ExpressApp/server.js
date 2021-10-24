
//requiring
var express = require('express');
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');


//adding middleware for capturing the data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));



//adding third party middlewares
app.use(logger('dev'));
app.use((req, res, next) => {
    res.cookie('username', 'user1');
    next();

})

//middleware for cliet/server
app.use('/admin', (req, res, next) => {
    next('Unauthorized user');

})

//adding  routes for both pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/projects.html');
})



//error handlers
app.use((req, res, next) => {
    res.send('Page not found');
})

app.use((err, req, res, next) => {
    res.send(err);
})



//listener
app.listen(4000, () => {
    console.log('Server is listening at port 4k');
})