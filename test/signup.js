describe('POST /signup', (req, res, next) => {
  it('respond with json containing id, email, and token', (done) => {
    return request(server)
      .post('/signup')
      .send({
        email: 'email@gmail.com',
        password: 'password',
      })
      .expect(200)
      .then((res) => {
        expect(res.body.id).to.be.a('number');
        expect(res.body.email).to.eql('email@gmail.com');
        expect(res.body.token).to.be.a('string');
      }, done());
  });
  it('respond with 404', (done) => {
    return request(server)
      .post('/signup')
      .send({
        email: 'email@gmail.com',
      })
      .expect(404, done());
  });
});
