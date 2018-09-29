var should = require('chai').should();
var expect = require('chai').expect;

module.exports = function(chat21){
//   var TICKET_ID = require('./config.js').TICKET_ID;

//   it('should get all tickets', function(done){
//     this.timeout(20000);
//     chat21.tickets.list().then(function(tickets){
//       expect(tickets).to.exist;
//       done();
//     }).catch(function(err){
//       done(err);
//     });
//   });

//   it('should show a ticket by id', function(done){
//     this.timeout(20000);
//     chat21.tickets.show(TICKET_ID).then(function(ticket){
//       expect(ticket).to.exist;
//       done();
//     }).catch(function(err){
//       done(err);
//     });
//   });

  it('should create a message', function(done){
    this.timeout(20000);
    chat21.messages.create({
      subject: 'A new ticket',
      comment: {
        body: 'A ticket created with chat21-node-api'
      }
    }).then(function(data){
        console.log(data);
      expect(data).to.exist;
      expect(data.ticket.subject).to.equal('A new ticket');
      done();
    }).catch(function(err){
      done(err);
    });
  });

//   it('should update a ticket', function(done){
//     this.timeout(20000);
//     var testString = Math.random().toString(36).substring(7)
//     chat21.tickets.update(TICKET_ID, {
//       subject: testString
//     }).then(function(data){
//       expect(data).to.exist;
//       expect(data.ticket.subject).to.equal(testString);
//       done();
//     }).catch(function(err){
//       done(err);
//     });
//   });

//   it('should delete a ticket', function(done){
//     this.timeout(20000);
//     chat21.tickets.create({
//       subject: 'This will be deleted',
//       comment: {
//         body: 'A ticket that will be deleted'
//       }
//     }).then(function(data){
//       chat21.tickets.delete(data.ticket.id).then(function(result){
//         expect(result).to.be.true;
//         done();
//       });
//     }).catch(function(err){
//       done(err);
//     });
//   });




}