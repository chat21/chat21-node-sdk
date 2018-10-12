var request = require('request');
var API_VERSION = 'v1';

var C21Request = function(config){
  return {
    
    login: function(data){
      var url = config.authurl
      var options = {
        url: url,
        headers: {
          "Content-Type": 'application/json'
        },
        json: data
      }
      console.log("options", options);
      return new Promise(function(resolve, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err, res); }
          resolve(body);
        });
      })
    },

    post: function(uri, data){
      var url = config.url + '/api/' + config.appid + uri;
      var options = {
        url: url,
        headers: {
          Authorization: config.authorization
        },
        json: data
      }
      console.log("options", options);
      return new Promise(function(resolve, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err, res); }
          resolve(body);
        });
      })
    },


    delete: function(uri){
      var url = config.url + '/api/' + config.appid + uri;
      var options = {
        url: url,
        headers: {
          Authorization: config.authorization
        }
      }
      console.log("options", options);
      return new Promise(function(resolve, reject){
        request.delete(options, function(err, res, body){
          if (err) { reject(err, res); }
          resolve(body);
        });
      })
    },
  }
}

module.exports = C21Request