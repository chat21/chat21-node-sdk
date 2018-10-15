var firebase = require("firebase");



// class FirebaseAuth {
 var FirebaseAuth  = function(config){
    console.log("config", config);

    // Initialize Firebase
// TODO: Replace with your project's customized code snippet
var firebaseconfig = {
    apiKey: config.firebase_apikey,
    databaseURL: config.firebase_database,
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
console.log("firebaseconfig", firebaseconfig);

firebase.initializeApp(firebaseconfig);

    return {
            signinWithCustomToken: function(customAuthToken){
                return new Promise(function(resolve, reject){
                    return firebase.auth().signInWithCustomToken(customAuthToken).then(function (data){

                        // console.log("customAuthToken", customAuthToken);
                
                
                        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
                            // console.log("idToken", idToken);
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