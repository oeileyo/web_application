var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const rp = require('request-promise')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

app.get('/exchange/:val', (req, res) => {
  var options = {
    method: 'get',
    uri: 'https://www.cbr-xml-daily.ru/daily_json.js',
    json: true
  };
  console.log(req.params.val);

  // rp(options)
  //     .then((parsedBody) => {
  //       const value = parsedBody.Valute[req.params.val]
  //       res.send(value)
  //     })
  //     .catch(function(err) {
  //       res.send('eerrrrr')
  //     })


});

module.exports = app;
