const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const logbookRouter = require('./routes/logbook');

const app = express();

//setup database
mongoose.set("strictQuery", false);
const mongodb = "mongodb+srv://shriharshdev:MejjBtY6ypo1Z1BT@cluster0.podcbl5.mongodb.net/logbook?retryWrites=true&w=majority&appName=Cluster0"

main().catch((err) => console.log(err))
async function main(){
  await mongoose.connect(mongodb)
  console.log("Database is connected.")
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/logbook", logbookRouter)

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


