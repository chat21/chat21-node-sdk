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
          // console.log("login", data);
          config.authorization = 'Bearer ' + data.idToken;
          config.token = data.idToken;
          config.user_id = data.localId;
          resolve(data);
        }).catch(function(err){
          reject(err)
        })
      })
    },
    getCurrentToken: function() {
      return config.token;
    },
    setCurrentToken: function(token) {
      config.token = token;
      config.authorization = 'Bearer ' + token;
    }

  }
}

module.exports = Auth