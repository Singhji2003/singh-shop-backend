const mongoose = require('mongoose');
const { Schema } = mongoose;

const personalDetails = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    fullname:{
        type:String
    },
    number:{
        type:Number,
        unique:true
    },
    altnumber:{
     type:String,
    },
    address:{
        type:String
    }
});

module.exports = mongoose.model('personalDetails', personalDetails )