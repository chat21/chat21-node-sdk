var request = require('request');
var winston = require('./winston');

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
      // winston.debug("options", options);
      return new Promise(function(resolve, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err, res); }
          resolve(body);
        });
      })
    },

    // TODO togli /api da qui?  
    // #aggiungi /api qui per aiutare le persone tra dashboard e server? 

    post: function(uri, data){
      var url = config.url + '/api/' + config.appid + uri;

      var options = {
        url: url,

        headers: {
          "Content-Type": 'application/json'
        },
        json: data
      }

      if (config.authorization) {
        options.headers.Authorization = config.authorization;
      }

      // winston.debug("options", options);
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
          "Content-Type": 'application/json'
        },
        json: data
      }
      if (config.authorization) {
        options.headers.Authorization = config.authorization;
      }

       //winston.debug("options", options);
      return new Promise(function(resolve, reject){
        request.put(options, function(err, res, body){
          if (err) { 
            //winston.debug("error putting", err);
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
          "Content-Type": 'application/json'
        },
        json: data
      }

      if (config.authorization) {
        options.headers.Authorization = config.authorization;
      }

       //winston.debug("chat21-node-sdk options", options);
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