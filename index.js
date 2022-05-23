//requiring express
const express = require('express');
//use session
const session = require('express-session');
const { MongoTailableCursorError } = require('mongodb');

const mongoose = require('mongoose');
//requiring passport for login states
global.passport = require('passport');
require('dotenv').config()


global.path = require('path')

//declaring app
const app = express();
//connection to db
mongoose.connect(process.env.DB_URL);
const MongoStore = require('connect-mongo');
global.path = require('path');

app.use(passport.initialize());
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(require('body-parser').json());
//declaring session
app.use(session({
  resave: false,
  saveUninitialized: true,
  logged:false,
  user_id:'',
  username:'',
  email:'',
  user_image: '',
  rank:'',
  secret: 'thisismysecret', 
  store: MongoStore.create({
    mongoUrl: process.env.DB_URL,
  })
}));
app.use(passport.session());
//get method for login
app.get('/v1/auth', function(req, res) {
  res.render('pages/auth', { session: req.session });
});
app.get('/v1/home', function(req, res) {
  res.render('pages/home', { session: req.session });
});
function requireAutentication(req,res,next){
  if( req.isAuthenticated() == true || req.originalUrl.includes('/auth')){
      next();
  }else{
      res.render('pages/auth', { session: req.session });
  }
}
app.all('*',requireAutentication)

// Starting app after calling every api
require('./api/api_index')(app,mongoose);
app.listen(4000, () => {
  console.log('server started!');
});


