var firebase = require("firebase");
var winston = require('winston');

// class FirebaseAuth {
 var FirebaseAuth  = function(config){
    winston.debug("chat21-node-sdk config", config);

    // Initialize Firebase
// TODO: Replace with your project's customized code snippet
var firebaseconfig = {
    apiKey: config.firebase_apikey,
    databaseURL: config.firebase_database,
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
winston.debug("chat21-node-sdk firebaseconfig", firebaseconfig);

firebase.initializeApp(firebaseconfig);

    return {
            signinWithCustomToken: function(customAuthToken){
                return new Promise(function(resolve, reject){
                    return firebase.auth().signInWithCustomToken(customAuthToken).then(function (data){

                        // winston.debug("customAuthToken", customAuthToken);
                
                
                        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                            // winston.debug("idToken", idToken);
                            resolve(idToken);
                        // Send token to your backend via HTTPS
                        // ...
                        }).catch(function(error) {
                            reject(error);
                        });

                    }).catch(function(error) {
                       
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode === 'auth/invalid-custom-token') {
                            reject(error);
                        } else {
                            reject(error);
                        }

                     
                    });
                });
            }
        };
    
}

module.exports = FirebaseAuth;
// var firebaseAuth = new FirebaseAuth();
// module.exports = firebaseAuth;