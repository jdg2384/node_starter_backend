const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT 

app.use(cors())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', require('./src/routes/users.js'));
app.use('/signup', require('./src/routes/signup.js'));


//Error
const listener = () => console.log( `Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app