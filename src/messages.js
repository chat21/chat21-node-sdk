var Promise = require('promise');

var Message = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    send: function(sender_fullname, recipient_id, recipient_fullname, text){
       var message = {}
       message["sender_fullname"] = sender_fullname;
       message["recipient_id"] = recipient_id;
       message["recipient_fullname"] = recipient_fullname;
       message["text"] = text;
      return new Promise(function(resolve, reject){
        request.post('/' + plural, message).then(function(data){
          resolve(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },
    


  }
}

module.exports = Message