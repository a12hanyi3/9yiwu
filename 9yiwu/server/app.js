var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var login = require("./routes/login")

// ------------------sessions
var session = require("express-session");


// -------------------mogoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/buoumall");


var index = require('./routes/index');
var users = require('./routes/users');

var api = require('./routes/api');
// var register = require('./routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//--------------注册express-session
app.use(session({
	name:"buoumallNodesessID",
	secret:"buoumall",
	cookie:{maxAge:1000*3600*24},
	resave:true,
	saveUninitialized:true
}))

app.use('/', index);
app.use('/users', users);

// --------------注册路由
app.use('/api', api);
// app.use('/register',register);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
