describe('POST /signup', function (req,res,next) {
   it('respond with json containing id, email', function (done) {
        request(server)
            .post('/signup')
            .set('Accept', 'application/json')
            .send({
                email: 'email@gmail.com',
                password: 'password'
            })
            .expect(200)
            .then(res => {
                expect(res.body.email).to.eql('email@gmail.com');
                expect(res.body.token).to.be.a('string');
            },done())
    });
});
