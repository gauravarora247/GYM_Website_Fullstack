const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    age : {
        type : String,
        required: true
    },
    gender : {
        type : String,
       // required: true
    },
    locality : {
        type : String,
        //required: true
    },
    number : {
        type : String,
        //required: true
    },
    email : {
        type : String,
       // required: true
    },
})

const Gymdb = mongoose.model('Gymdb', schema);

module.exports = Gymdb;
