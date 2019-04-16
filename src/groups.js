var Promise = require('promise');

var Message = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    

    create: function(name, members){
      var create = {}
      create["group_name"] = name;

      let group_members = {};
      members.forEach(member => {
        group_members[member] = 1;
      });
      create["group_members"] = group_members;
      
      console.log("create", create);
     return new Promise(function(resolve, reject){
       request.post('/' + plural+'/'+group_id, create).then(function(data){
         console.log("data", data);
         resolve(data)
       }).catch(function(err){
         reject(err)
       })
     })
   },

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