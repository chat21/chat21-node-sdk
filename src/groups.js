var Promise = require('promise');

var Message = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    join: function(member_id, group_id){
       var join = {}
       join["member_id"] = member_id;
      return new Promise(function(resolve, reject){
        request.post('/' + plural+'/'+group_id+'/members', join).then(function(data){
          console.log("data", data);
          resolve(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    leave: function(member_id, group_id){
     
     return new Promise(function(resolve, reject){
       request.delete('/' + plural+'/'+group_id+'/members/' + member_id).then(function(data){
         console.log("data", data);
         resolve(data)
       }).catch(function(err){
         reject(err)
       })
     })
   },
    


  }
}

module.exports = Message