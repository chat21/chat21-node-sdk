var Promise = require('promise');
var winston = require('./winston');

var Conversation = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    archive: function(recipient_id, user_id){
            
      var body = {};
      if (user_id) {
        body["user_id"] = user_id;
      }
      winston.debug("body", body);

      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
       winston.debug("chat21-node-sdk admintoken", admintoken);
      }

      return new Promise(function(resolve, reject){       

        request.delete('/' + plural +'/'+recipient_id+ admintoken, body).then(function(data){
          winston.debug("chat21-node-sdk conversation.archived", data);
          resolve(data)
        }).catch(function(err){
          winston.debug("chat21-node-sdk conversation.archived", err);
          reject(err)
        })
      })
    },


    typing: function(recipient_id, writer_id, text, timestamp){
            
      var body = {};

      if (writer_id) {
        body["writer_id"] = writer_id;
      }

      if (text) {
        body["text"] = text;
      }

      if (timestamp) {
        body["timestamp"] = timestamp;
      }

      winston.debug("body", body);

      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
       winston.debug("chat21-node-sdk admintoken", admintoken);
      }

      return new Promise(function(resolve, reject){       

        request.put('/typings/'+recipient_id+ admintoken, body).then(function(data){
          winston.debug("chat21-node-sdk conversation typing", data);
          resolve(data)
        }).catch(function(err){
          winston.debug("error chat21-node-sdk conversation typing", err);
          reject(err)
        })
      })
    },

    // deprecated 
    // not in use
    stopTyping: function(recipient_id, writer_id){
            
      var body = {};
      if (writer_id) {
        body["writer_id"] = writer_id;
      }
      winston.debug("body", body);

      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
       winston.debug("chat21-node-sdk admintoken", admintoken);
      }

      return new Promise(function(resolve, reject){       

        request.delete('/typings/'+recipient_id+ admintoken, body).then(function(data){
          winston.debug("chat21-node-sdk conversation stoptypings", data);
          resolve(data)
        }).catch(function(err){
          winston.debug("error chat21-node-sdk conversation stoptypings", err);
          reject(err)
        })
      })
    },

   

  }
}

module.exports = Conversation