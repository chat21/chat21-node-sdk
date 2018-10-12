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
          console.log("login", data);
          config.authorization = 'Bearer ' + data.idToken;
          config.user_id = data.localId;
          resolve(data);
        }).catch(function(err){
          reject(err)
        })
      })
    }

  }
}

module.exports = Auth