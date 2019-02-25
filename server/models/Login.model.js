const mongoose = require('mongoose');

var userLoginSchema = new mongoose.Schema({
    username: {
        type:"String"
    },
    password: {
        type:"String"
    }
});

mongoose.model('User', userLoginSchema);