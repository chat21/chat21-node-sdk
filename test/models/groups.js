var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(chat21){


  it('should create a group', function(done){
    this.timeout(20000);
    chat21.auth.signin('andrea.leo@frontiere21.it', 123456)
    .then(function(logindata) {
      chat21.groups.create("test11", [logindata.localId])
        .then(function(data){    
          console.log("join resolve ", data);
        expect(data).to.exist;
        chat21.auth.logout();
        done();    
    })}).catch(function(err, res){
      console.log(res);
      chat21.auth.logout();
      done(err);
    });
  });

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
        chat21.auth.logout();
        done();
      })
    })}).catch(function(err, res){
      console.log(res);
      chat21.auth.logout();
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
        chat21.auth.logout();
        done();
      })
    })}).catch(function(err, res){
      console.log(res);
      chat21.auth.logout();
      done(err);
    });
  });




  it('should join a group with token', function(done){
    this.timeout(20000);
     console.log("chat21.firebaseAuth", chat21.firebaseAuth);
    chat21.firebaseAuth.signinWithCustomToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1YmM0OTVlY2QyOTQxMGNhOTM5ZWQ3MGMiLCJpYXQiOjE1Mzk2MTAwOTIsImV4cCI6MTUzOTYxMzY5MiwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay16Mng5aEBjaGF0LXYyLWRldi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLXoyeDloQGNoYXQtdjItZGV2LmlhbS5nc2VydmljZWFjY291bnQuY29tIn0.X_r0I7Jo2CO2Difztv-dxOpf0ldD30PXPC54neZfa4wTVlJqsTUBRWjNjUvt-nNFBhgXc-x2YhivjBGuAewFM39RhkG55Pcz9H2geNQPK_mGkN0WRSaXb-F5obXMMkmUpLQlpk_YhUGU9LtkR6NK5WBCdv9bJcEg2JKmwQ0L_ImvWrOumHF7OXjdPkl76mJhrWyq6Ewdc-fQ9sHW0yWrVTMEumaYA55niYmD2ePFjA9hYl4yzrRh7-p68dzR3TiG6HeRsrblVKHq9KkU9pOWkzDocevmEENV0dOZ9AXj-jEcCCRdI_5Eh6jYf8T0Jeyt6Ui8YeXNkLvoLemdOWS8xQ').then(function(idToken) {
      console.log("idToken", idToken);
      chat21.auth.setCurrentToken(idToken);
    // chat21.auth.setCurrentToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1YmM0N2UyMGYwNmQzMWJhNjAxN2Q5ODgiLCJpYXQiOjE1Mzk2MDQwMDEsImV4cCI6MTUzOTYwNzYwMSwiYXVkIjoiaHR0cHM6Ly9pZGVudGl0eXRvb2xraXQuZ29vZ2xlYXBpcy5jb20vZ29vZ2xlLmlkZW50aXR5LmlkZW50aXR5dG9vbGtpdC52MS5JZGVudGl0eVRvb2xraXQiLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay16Mng5aEBjaGF0LXYyLWRldi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLXoyeDloQGNoYXQtdjItZGV2LmlhbS5nc2VydmljZWFjY291bnQuY29tIn0.GOe4f1Z8axzjQqbKyKQH-mLtn3Zx2RMg0XVT9Yg1SUXylBvX1UJjoUACkRFIvj_5KX-LkDb0ZDy8CpqAx9_vWVm40guuQqL8krFhilX2uSnX8Dx_TqTa6Ytiv2WrWYf1Hs7M6s_DTmbIkuVSuAAsOGm-pV_x1EH5r0IPUVLukYDHULYwXaX9dHfB2Ijw0NwXdCbhVAYMjeclDEmVDuxTyRgmutL0eKdTqk3seCLMJtOZANXvxJuRSCBJ95DWUbjATpEi1tLPT-hmP8kYUs5ob2ndSTH-n4gMVoji_AcGBE0GMkAxrpaq29xHdv8b-bQZ74m6mb9PcKkARNO8x9ozLA');
          // chat21.auth.setCurrentToken('eyJhbGciOiJSUzI1NiIsImtpZCI6IjhmNGQ4NmRhMDRiOGNiODhhNWVhNWVmNDAwMzI0ODJlNzY4NDExODUifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2hhdC12Mi1kZXYiLCJwcm92aWRlcl9pZCI6ImFub255bW91cyIsImF1ZCI6ImNoYXQtdjItZGV2IiwiYXV0aF90aW1lIjoxNTI3ODQyMjA5LCJ1c2VyX2lkIjoiU3VFRHZQbGZLNGJRNmNoWXVjQTJhZllWNUx1MiIsInN1YiI6IlN1RUR2UGxmSzRiUTZjaFl1Y0EyYWZZVjVMdTIiLCJpYXQiOjE1Mzk2MDMyMjQsImV4cCI6MTUzOTYwNjgyNCwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJhbm9ueW1vdXMifX0.nou4tcWLil_rtk2KjzkAYCCnydzDkf4woC1IHSDgHdJ4hMBLk-W1TVcClZd7OZ16eA8dFpH_zFe7LlKBEDrTKP3FvjPagJFigqMrV4UZA6ZMRnX4iPPX-eRvffw19b8Q4c090U_k-CklDZmuqG5st5Tu_yM6bUyfs4m8A90rkiJe3M3gLQOzuytXtaODG3wJUUh263ij-RDCoHZy32OXgNOHxta_WLVf_Y0TN31DJUkTU9z6Papcdy0DOtg-Hs8FrpKTTu5KkCYVCM7Zbkr5i-vF_hSyM352j_AapdythaiJXKvN0lkVpZSvuNn2xnMpIfWayySNivwF1qq0Tyvgqw');
          // console.log("chat21.auth.getCurrentToken()", chat21.auth.getCurrentToken());

          
            chat21.groups.leave("123456", "support-group-LOBsuFytAQ7sOMcq88h")
              .then(function(data){
            chat21.groups.join("123456", "support-group-LOBsuFytAQ7sOMcq88h")
              .then(function(data){
                console.log("join resolve ", data);
              expect(data).to.exist;
              chat21.auth.logout();
              done();
            })
          }).catch(function(err, res){
            console.log(res);
            chat21.auth.logout();
            done(err);
          });
        });
    });
  


}