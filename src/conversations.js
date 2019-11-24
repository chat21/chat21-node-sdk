var Promise = require('promise');

var Conversation = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    archive: function(recipient_id){
             
      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
       console.log("chat21-node-sdk admintoken", admintoken);
      }

      return new Promise(function(resolve, reject){       

        request.delete('/' + plural +'/'+recipient_id+ admintoken).then(function(data){
          console.log("chat21-node-sdk conversation.archived", data);
          resolve(data)
        }).catch(function(err){
          console.log("chat21-node-sdk conversation.archived", err);
          reject(err)
        })
      })
    },

   

  }
}

module.exports = Conversation