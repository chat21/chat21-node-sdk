var winston = require('./winston');

function Chat21(config){
    if (config.email && config.password) {
      config.authorization = 'Basic ' + new Buffer(config.email + ':' + config.password).toString('base64');
      winston.info("Chat21-node-sdk config.authorization: "+ config.authorization);
    }
    
  
    if (config.oauth) {
      config.authorization = 'Bearer ' + config.token;
      winston.info("Chat21-node-sdk config.authorization: "+ config.authorization);
    }

    return {
      messages: require('./messages.js')(config, 'message', 'messages'),
      conversations: require('./conversations.js')(config, 'conversation', 'conversations'),
      groups: require('./groups.js')(config, 'group', 'groups'),
      contacts: require('./contacts.js')(config, 'contact', 'contacts'),
      auth: require('./auth.js')(config),
      firebaseAuth: require('./firebaseAuth.js')(config)
    };
  }
  
  module.exports = Chat21