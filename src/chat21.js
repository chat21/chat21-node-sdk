function Chat21(config){
    config.authorization = 'Basic ' + new Buffer(config.email + ':' + config.password).toString('base64');
  
    if (config.oauth) {
      config.authorization = 'Bearer ' + config.token;
    }
    return {
      messages: require('./messages.js')(config, 'message', 'messages'),
      conversations: require('./conversations.js')(config, 'conversation', 'conversations'),
      groups: require('./groups.js')(config, 'group', 'groups'),
      auth: require('./auth.js')(config),
      firebaseAuth: require('./firebaseAuth.js')(config)
    };
  }
  
  module.exports = Chat21