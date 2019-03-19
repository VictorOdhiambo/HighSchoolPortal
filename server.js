
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const PORT = 4200;
const cors = require('cors');

const StudentData = require('./routes/StudentData');
const index = require('./routes/index');

mongoose.connect("mongodb://localhost:27017/highschooldb",
    { useNewUrlParser: true })
    .then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});

// const storage = multer.diskStorage({
//   destination: function(req, file, callback){
//     callback(null, './uploads')
//   },
//   filename: function(req, file, callback){
//     callback(null, file.filename)
//   }
// })

// const upload = multer({
//   storage: storage
// }).single('document')

app.use(cors());

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', StudentData);

app.listen(PORT, function(){
  console.log('Server is running on Port: ', PORT);
});