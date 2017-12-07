var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../bin/www');
var expect = chai.expect;

chai.use(chaiHttp);
var _ = require('lodash' );

describe('Deals', function() {

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
});