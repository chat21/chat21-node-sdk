var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(chat21){


  it('should create a message', function(done){
    this.timeout(20000);
    chat21.auth.signin('andrea.leo@frontiere21.it', 123456).then(function(logindata) {
      chat21.messages.send('Sender Node SDK', '5aaa99024c3b110014b478f0', 'Andrea Leo', 'hello from Node SDK')
        .then(function(data){
          console.log("send resolve ", data);
        expect(data).to.exist;
        // expect(data.sender_fullname).to.eqls("Sender Node SDK");
        // console.log("chat21.auth.getCurrentToken() ", chat21.auth.getCurrentToken());
        expect(chat21.auth.getCurrentToken()).to.exist;
        chat21.auth.logout();
        done();
      }).catch(function(err, res){
        console.log(res);
        chat21.auth.logout();
        done(err);
      });
    });
   
  });


  it('should create a message with admin', function(done){
    this.timeout(20000);
    chat21.auth.setAdminToken("chat21-secret-orgAa,");
      chat21.messages.send('Sender Node SDK', '5aaa99024c3b110014b478f0', 'Andrea Leo', 'hello from Node SDK')
        .then(function(data){
          console.log("send resolve ", data);
        expect(data).to.exist;
        // expect(data.sender_id).to.eqls("5aaa99024c3b110014b478f0");
        
        
        done();
      }).catch(function(err, res){
        console.log(res);
        chat21.auth.logout();
        done(err);
      });
   
  });



}