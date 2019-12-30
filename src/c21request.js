var request = require('request');

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
      // console.log("options", options);
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
      // console.log("options", options);
      return new Promise(function(resolve, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err, res); }
          resolve(body);
        });
      })
    },


    put: function(uri, data){
      var url = config.url + '/api/' + config.appid + uri;
      var options = {
        url: url,
        headers: {
          Authorization: config.authorization
        },
        json: data
      }
       //console.log("options", options);
      return new Promise(function(resolve, reject){
        request.put(options, function(err, res, body){
          if (err) { 
            //console.log("error putting", err);
            reject(err, res); 
          }
          resolve(body);
        });
      })
    },


    delete: function(uri, data){
      var url = config.url + '/api/' + config.appid + uri;
      var options = {
        url: url,
        headers: {
          Authorization: config.authorization
        },
        json: data
      }
       //console.log("chat21-node-sdk options", options);
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