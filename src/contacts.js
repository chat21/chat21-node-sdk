var Promise = require('promise');
var winston = require('./winston');

var Contact = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
  
    
    create: function(firstname, lastname, email, current_user){
      var create = {}
      create["firstname"] = firstname;
      create["lastname"] = lastname;
      create["email"] = email;
      create["current_user"] = current_user;
      
      winston.debug("chat21-node-sdk contact.create", create);


      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
      }


     return new Promise(function(resolve, reject){
       request.post('/' + plural+ admintoken, create).then(function(data){
         winston.debug("chat21-node-sdk contact.created", data);
         resolve(data)
       }).catch(function(err){
         reject(err)
       })
     })
   },
      
   update: function(firstname, lastname, current_user){
    var update = {}

    
    update["firstname"] = firstname;
    update["lastname"] = lastname;
    update["current_user"] = current_user;

    winston.debug("chat21-node-sdk contact.update", update);


      var admintoken = "";
      if (config.admintoken) {
      admintoken = "?token=" + config.admintoken;
      }

      
    return new Promise(function(resolve, reject){
      request.put('/' + plural+'/me'+ admintoken, update).then(function(data){
        winston.debug("chat21-node-sdk contact.updated", data);
        resolve(data)
      }).catch(function(err){
        reject(err)
      })
    })
  }

  }
}

module.exports = Contact
