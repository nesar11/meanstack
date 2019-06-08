const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3001;
const mongoose = require('mongoose');





const cors = require('cors');

const config = require('./config/DB');
mongoose.Promise = global.Promise;

mongoose.connect(config.DB).then(
    () => {console.log('databse is connected')},
    err => {console.log('can not connect to the database' + err)}
);


var app = express();

const api = require('./routes/api')

app.use(bodyParser.json());
app.use(cors());
app.use('/api', api)

app.use('/api/resgister', api)

app.get ('/', function(req, res){
    res.send('Hellow from server')
});
 app.listen(PORT, function(){
     console.log('server running on Localhost' + PORT)
 });
