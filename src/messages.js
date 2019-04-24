var Promise = require('promise');

var Message = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    send: function(sender_fullname, recipient_id, recipient_fullname, text, sender_id, attributes){
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
       
      return new Promise(function(resolve, reject){

        var admintoken = "";
        if (config.admintoken) {
         admintoken = "?token=" + config.admintoken;
         console.log("admintoken", admintoken);
        }

        request.post('/' + plural + admintoken, message).then(function(data){
          resolve(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },
    sendToGroup: function(sender_fullname, recipient_id, recipient_fullname, text, sender_id, attributes){
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
       
      console.log("message.sendToGroup", message);
     return new Promise(function(resolve, reject){

      var admintoken = "";
       if (config.admintoken) {
        admintoken = "?token=" + config.admintoken;
       }
       
       request.post('/' + plural + admintoken, message).then(function(data){
        console.log("message.sent", data);
         resolve(data)
       }).catch(function(err){
        console.log("message.sent error", data);
         reject(err)
       })
     })
   },


  }
}

module.exports = Message