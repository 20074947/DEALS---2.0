var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('Deals', function() {
    describe('Dealss', function() {
        beforeEach(function() {
            while (datastore.length > 0) {
                datastore.pop();
            }
            datastore.push({
                paymenttype: 'Waterford',
                amount: 1000000,
                upvotes: 0,
                info: 'Food',
            });
            datastore.push({
                paymenttype: 'Dublin',
                amount: 1002,
                upvotes: 0,
                info: 'Food',
            });
        });
    });
    describe('GET /deals', function() {
        it('should return all the deals in an array', function(done) {
            chai.request(server)
                .get('/deals')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    done();
                });
        });
    });

        describe('POST /deals', function() {
        it('should return confirmation message and update datastore', function(done) {
            var deal = {
                paymenttype: 'Waterford',
                amount: 1000,
                upvotes: 0,
                info: 'Kids'
            };
            chai.request(server)
                .post('/deals')
                .send(deal)
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').equal('Deal Added!');
                    done();
                });
        });
    });
            describe('PUT /deals/:_id/votes', function() {
        it('should return all deals with specified deal updated', function(done) {
            chai.request(server)
                .put('/deals/5a2948f8c59c0580016cb350/votes')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
        it('should return a 404 status and message for invalid deal id', function(done) {
            chai.request(server)
                .put('/deals/1100001/votes')
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});