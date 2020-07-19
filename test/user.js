const helpers = require('./testHelpers');

describe('GET /users', (req, res, next) => {
  // beforeEach('create data', async () => {
  //     await helpers.seed_users();
  // });
  it('responds 200 get all users', (done) => {
    return request(server)
      .get(`/users`)
      .expect(200)
      .then((res) => {
        expect(res.body.id).to.eql(1);
        expect(res.body.email).to.eql('email@gmail');
      }, done());
  });
  it('responds 200 get one users', (done) => {
    return request(server)
      .get(`/users/1`)
      .expect(200)
      .then((res) => {
        expect(res.body.id).to.eql(1);
        expect(res.body.email).to.eql('email@gmail.com');
      }, done());
  });
  it('responds 200 patch one users', (done) => {
    request(server)
      .patch(`/users/1`)
      .send({
        email: 'patch@gmail.com',
      })
      .expect(200)
      .then((res) => {
        expect(res.body.id).to.eql('1');
        expect(res.body.email).to.eql('patch@gmail.com');
      }, done());
  });
  it('responds 200 patch one users', (done) => {
    request(server)
      .delete(`/users/1`)
      .expect(200)
      .then((res) => {
        expect(res.body.id).to.eql('1');
        expect(res.body.email).to.eql('patch@gmail.com');
      }, done());
  });
});
