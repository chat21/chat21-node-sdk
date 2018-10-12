var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(chat21){

  it('should join a group', function(done){
    this.timeout(20000);
    chat21.auth.signin('andrea.leo@frontiere21.it', 123456)
    .then(function(logindata) {
      chat21.groups.leave(logindata.localId, "support-group-LOBsuFytAQ7sOMcq88h")
        .then(function(data){
      chat21.groups.join(logindata.localId, "support-group-LOBsuFytAQ7sOMcq88h")
        .then(function(data){
          console.log("join resolve ", data);
        expect(data).to.exist;
        done();
      })
    })}).catch(function(err, res){
      console.log(res);
      done(err);
    });
  });



  it('should leave a group', function(done){
    this.timeout(20000);
    chat21.auth.signin('andrea.leo@frontiere21.it', 123456)
    .then(function(logindata) {
      chat21.groups.join(logindata.localId, "support-group-LOBsuFytAQ7sOMcq88h")
      .then(function(data){
      chat21.groups.leave(logindata.localId, "support-group-LOBsuFytAQ7sOMcq88h")
        .then(function(data){
          console.log("leave resolve ", data);
        expect(data).to.exist;
        done();
      })
    })}).catch(function(err, res){
      console.log(res);
      done(err);
    });
  });



}