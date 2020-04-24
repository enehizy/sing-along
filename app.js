var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const geniusApi =require('genius-api');
const getLyricsFromPath =require('genius-lyrics-api').getLyricsFromPath;
const  {GENIUS_CLIENT_ACCESS_TOKEN}=require('./config');
const genius = new geniusApi(GENIUS_CLIENT_ACCESS_TOKEN);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/query' ,(req,res)=>{
  if(!req.query){
   return res.status(200).json({'message':'Query parameter was not included in your search'});
  }
  genius.search(`${req.query.q}`).then(function(response) {
   
    
      res.status(200).json({"hits":response.hits});
    
   
  
  }).catch((err)=>{
    res.json({"error":err});
  });
  
 
})
app.use('/path/:pathtolyrics',(req,res)=>{
getLyricsFromPath(`/${req.params.pathtolyrics}`).then(lyrics => res.status(200).json({'lyrics':lyrics}))
.catch((err)=>{
  res.json({'error':err})
});
})
app.use('/songinfo/:songid',(req,res)=>{
  
  
  genius.song(req.params.songid).then(function(response) {
    res.status(200).json({"song":response.song});
  }).catch((err)=>{
    res.json({'error':err})
  })
   
  
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
