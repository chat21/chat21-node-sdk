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
        done();
      }).catch(function(err, res){
        console.log(res);
        done(err);
      });
    });
   
  });



}