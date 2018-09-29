var request = require('request');
var API_VERSION = 'v1';

var C21Request = function(config){
  return {
    // get: function(uri){
    //   var options = {
    //     url: config.url + '/api/' + API_VERSION + '/' + uri,
    //     headers: {
    //       Authorization: config.authorization
    //     },
    //     forever: true
    //   }

    //   return new Promise(function(fufill, reject){
    //     request(options, function(err, res, body){
    //       if (err) { reject(err); }
    //       fufill(JSON.parse(body));
    //     });
    //   })
    // },

    post: function(uri, data){
      var options = {
        url: config.url + '/api/' + API_VERSION + '/' + uri,
        headers: {
          Authorization: config.authorization
        },
        json: data
      }
      return new Promise(function(resolve, reject){
        request.post(options, function(err, res, body){
          if (err) { reject(err); }
          resolve(body);
        });
      })
    },

    // put: function(uri, data){
    //   var options = {
    //     url: config.url + '/api/' + API_VERSION + '/' + uri,
    //     headers: {
    //       Authorization: config.authorization
    //     },
    //     json: data
    //   }

    //   return new Promise(function(fufill, reject){
    //     request.put(options, function(err, res, body){
    //       if (err) { reject(err); }
    //       fufill(body);
    //     });
    //   })
    // },

    // delete: function(uri, data){
    //   var options = {
    //     url: config.url + '/api/' + API_VERSION + '/' + uri,
    //     headers: {
    //       Authorization: config.authorization
    //     }
    //   }

    //   return new Promise(function(fufill, reject){
    //     request.delete(options, function(err, res, body){
    //       if (err) { reject(err); }
    //       fufill();
    //     });
    //   })
    // }
  }
}

module.exports = C21Request