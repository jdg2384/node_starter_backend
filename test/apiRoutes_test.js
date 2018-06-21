const request = require('supertest');
//const queries = require('../server/queries/queries.js'); //reference to you app.js file
const server = require('../server.js')

describe('GET /api', function () {
    it('respond with json containing a list of all users', function (done) {
        request(server)
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /signup', function () {
    it('respond with json containing id, email', function (done) {
        request(server)
            .post('/signup')
            .set('Accept', 'application/json')
            .send({
                email: 'schroder.brent@gmail.com',
                password: 'supdogmex'
            })
            .expect(200, {
                id: 1,
                email: 'schroder.brent@gmail.com'
            }, done)
    });
});
