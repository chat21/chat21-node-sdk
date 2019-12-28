var Promise = require('promise');

var Conversation = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    archive: function(recipient_id, user_id){
            
      var body = {};
      if (user_id) {
        body["user_id"] = user_id;
      }
      console.log("body", body);

      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
       console.log("chat21-node-sdk admintoken", admintoken);
      }

      return new Promise(function(resolve, reject){       

        request.delete('/' + plural +'/'+recipient_id+ admintoken, body).then(function(data){
          console.log("chat21-node-sdk conversation.archived", data);
          resolve(data)
        }).catch(function(err){
          console.log("chat21-node-sdk conversation.archived", err);
          reject(err)
        })
      })
    },


    typing: function(recipient_id, writer_id){
            
      var body = {};
      if (writer_id) {
        body["writer_id"] = writer_id;
      }
      console.log("body", body);

      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
       console.log("chat21-node-sdk admintoken", admintoken);
      }

      return new Promise(function(resolve, reject){       

        request.put('/typings/'+recipient_id+ admintoken, body).then(function(data){
          console.log("chat21-node-sdk conversation typing", data);
          resolve(data)
        }).catch(function(err){
          console.log("error chat21-node-sdk conversation typing", err);
          reject(err)
        })
      })
    },

    stopTyping: function(recipient_id, writer_id){
            
      var body = {};
      if (writer_id) {
        body["writer_id"] = writer_id;
      }
      console.log("body", body);

      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
       console.log("chat21-node-sdk admintoken", admintoken);
      }

      return new Promise(function(resolve, reject){       

        request.delete('/typings/'+recipient_id+ admintoken, body).then(function(data){
          console.log("chat21-node-sdk conversation stoptypings", data);
          resolve(data)
        }).catch(function(err){
          console.log("error chat21-node-sdk conversation stoptypings", err);
          reject(err)
        })
      })
    },

   

  }
}

module.exports = Conversation