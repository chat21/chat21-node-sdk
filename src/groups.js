var Promise = require('promise');

var Group = function(config, single, plural){
  var request = require('./c21request.js')(config)

  return {
    
  
    
    
    
    create: function(name, members, attributes, group_id){
      var create = {}
      create["group_name"] = name;

      let group_members = {};
      members.forEach(member => {
        group_members[member] = 1;
      });
      create["group_members"] = group_members;

      create["group_id"] = group_id;
      
      if (attributes) {
        create["attributes"] = attributes;
       }

      console.log("chat21-node-sdk group.create", create);


      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
      }


     return new Promise(function(resolve, reject){
       request.post('/' + plural+ admintoken, create).then(function(data){
         console.log("chat21-node-sdk group.created", data);
         resolve(data)
       }).catch(function(err){
         reject(err)
       })
     })
   },
    
    setMembers: function(members, group_id){
       var join = {}       

       let group_members = {};
       members.forEach(member => {
         group_members[member] = 1;
       });

       join["members"] = group_members;

       var admintoken = "";
       if (config.admintoken) {
        admintoken = "?token=" + config.admintoken;
       }

       console.log("chat21-node-sdk join", join);

      return new Promise(function(resolve, reject) {
        request.put('/' + plural+'/'+group_id+'/members' + admintoken, join).then(function(data){
          console.log("chat21-node-sdk data", data);
          resolve(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },
    

    join: function(member_id, group_id){
       var join = {}
       join["member_id"] = member_id;

       var admintoken = "";
       if (config.admintoken) {
        admintoken = "?token=" + config.admintoken;
       }


      return new Promise(function(resolve, reject){
        request.post('/' + plural+'/'+group_id+'/members' + admintoken, join).then(function(data){
          console.log("chat21-node-sdk data", data);
          resolve(data)
        }).catch(function(err){
          reject(err)
        })
      })
    },

    leave: function(member_id, group_id){
     
      var admintoken = "";
      if (config.admintoken) {
       admintoken = "?token=" + config.admintoken;
      }

     return new Promise(function(resolve, reject){
       request.delete('/' + plural+'/'+group_id+'/members/' + member_id + admintoken).then(function(data){
         console.log("chat21-node-sdk data", data); 
         resolve(data)
       }).catch(function(err){
         reject(err)
       })
     })
   },
    


  }
}

module.exports = Group
