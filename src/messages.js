var Promise = require('promise');
var winston = require('./winston');

var Message = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    send: function(sender_fullname, recipient_id, recipient_fullname, text, sender_id, attributes, type, metadata, group){
       var message = {}
       if (sender_id) {
        message["sender_id"] = sender_id;
       }      
       message["sender_fullname"] = sender_fullname;
       message["recipient_id"] = recipient_id;
       message["recipient_fullname"] = recipient_fullname;
       message["text"] = text;

       if (attributes) {
        message["attributes"] = attributes;
       }

       if (type) {
        message["type"] = type;
       }

       if (metadata) {
        message["metadata"] = metadata;
       }

       if (group) {
        message["group"] = group;
       }

       
      return new Promise(function(resolve, reject){

        var admintoken = "";
        if (config.admintoken) {
         admintoken = "?token=" + encodeURIComponent(config.admintoken);
         winston.debug("chat21-node-sdk admintoken", admintoken);
        }

        request.post('/' + plural + admintoken, message).then(function(data){
          resolve(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },
    sendToGroup: function(sender_fullname, recipient_id, recipient_fullname, text, sender_id, attributes, type, metadata, timestamp, group){
      var message = {}
      if (sender_id) {
        message["sender_id"] = sender_id;
       }   
      message["sender_fullname"] = sender_fullname;
      message["recipient_id"] = recipient_id;
      message["channel_type"] = "group";
      message["recipient_fullname"] = recipient_fullname;
      message["text"] = text;

      if (attributes) {
        message["attributes"] = attributes;
       }

       if (type) {
        message["type"] = type;
       }

       
       if (metadata) {
        message["metadata"] = metadata;
       }
       if (timestamp) {
        message["timestamp"] = timestamp;
       }
       

       if (group) {
        message["group"] = group;
       }
       
       
       
      winston.debug("chat21-node-sdk message.sendToGroup", message);
     return new Promise(function(resolve, reject){

      var admintoken = "";
       if (config.admintoken) {
        admintoken = "?token=" + encodeURIComponent(config.admintoken);
       }
       
       request.post('/' + plural + admintoken, message).then(function(data){
        winston.debug("chat21-node-sdk message.sent", data);
         resolve(data)
       }).catch(function(err){
        winston.error("chat21-node-sdk message.sent error", err);
         reject(err)
       })
     })
   },

   delete: function(recipient_id){
            
    var admintoken = "";
    if (config.admintoken) {
      admintoken = "?token=" + encodeURIComponent(config.admintoken);
      winston.debug("chat21-node-sdk admintoken", admintoken);
    }

    return new Promise(function(resolve, reject){       

      request.delete('/'+recipient_id+ "/"+ plural+"/timelines" + admintoken).then(function(data){
        winston.debug("chat21-node-sdk messages.deleted", data);
        resolve(data)
      }).catch(function(err){
        winston.debug("chat21-node-sdk messages.deleted", err);
        reject(err)
      })
    })
  },


  }
}

module.exports = Message