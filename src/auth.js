var Promise = require('promise');

var Auth = function(config){
  var request = require('./c21request.js')(config)

  return {
   
    signin: function(email, password){
       var authrequest = {}
       authrequest["email"] = email;
       authrequest["password"] = password;
       authrequest["returnSecureToken"] = true;
      return new Promise(function(resolve, reject){
        request.login(authrequest).then(function(data){
           console.log("chat21-node-sdk login", data);
          config.authorization = 'Bearer ' + data.idToken;
          config.token = data.idToken;
          config.user_id = data.localId;
          resolve(data);
        }).catch(function(err){
          reject(err)
        })
      })
    },
    logout: function() {
      config.authorization = null;
      config.token = null;
      config.user_id = null;
    },
    getCurrentToken: function() {
      return config.token;
    },
    setCurrentToken: function(token) {
      config.token = token;
      config.authorization = 'Bearer ' + token;
    },
    getAdminToken: function() {
      return config.admintoken;
    },
    setAdminToken: function(admintoken) {
      config.admintoken = admintoken;
    },

  }
}

module.exports = Auth