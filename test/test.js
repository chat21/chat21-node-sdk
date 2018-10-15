var should = require('chai').should();
var expect = require('chai').expect;
var dotenv = require('dotenv');
console.log("here");
// First try to load the enviroment variables
try { dotenv.load(); } catch(error) { console.error(error); }

var Chat21 = require('../index.js');
var chat21 = new Chat21({
  url: process.env.CHAT21_URL,
  appid: process.env.CHAT21_APPID,
  oauth: true,
  authurl:  process.env.CHAT21_AUTH_URL,
  firebase_apikey:  process.env.FIREBASE_APIKEY,
  firebase_database: process.env.FIREBASE_DATABASE
});

describe('Chat21', function(){
  describe('messages', function(){
    require('./models/messages.js')(chat21);
  });
  describe('groups', function(){
    require('./models/groups.js')(chat21);
  });
});