function Chat21(config){
    config.authorization = 'Basic ' + new Buffer(config.email + ':' + config.password).toString('base64');
  
    if (config.oauth) {
      config.authorization = 'Bearer ' + config.token;
    }
    return {
      messages: require('./messages.js')(config, 'message', 'messages'),
    //   ticketFields: require('./accessor.js')(config, 'ticket_field', 'ticket_fields'),
  
    //   organizations: require('./accessor.js')(config, 'organization', 'organizations'),
      
    //   users: require('./accessor.js')(config, 'user', 'users'),
    //   userFields: require('./accessor.js')(config, 'user_field', 'user_fields'),
  
    //   macros: require('./accessor.js')(config, 'macro', 'macros'),
    //   search: require('./accessor.js')(config, 'search', 'search')
    };
  }
  
  module.exports = Chat21