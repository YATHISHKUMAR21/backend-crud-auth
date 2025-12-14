const mongoose = require('mongoose');
 const userschema = new mongoose.Schema({
     username: {
         type: String,
         required: true,
            unique: true
        },
        password: {
            type: String
        }
    });

const userModel = mongoose.model('User', userschema);
module.exports = userModel; 