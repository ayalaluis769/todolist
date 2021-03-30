var express = require('express')
var app = express()
var bodyParser = require('body-parser');

var mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://luis:Bl3ss1ng@cluster0.gfnnk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


var todo = require('./router/todolist')
var user = require('./router/userlist')


mongoose.connect(uri)
mongoose.Promise = global.Promise
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('API Works')
})

db.on('error',console.error.bind(console,'MongoDB Connection Error'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/todo' ,todo)
app.use('/user' ,user)


var port = 1234;
app.listen(port,()=>{
    console.log('Server is up and running on port: '+port)
})