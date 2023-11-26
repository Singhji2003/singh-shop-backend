const mongoose = require('mongoose');
const { Schema } = mongoose;

const Favourites = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    productname:{
        type:String
    },
    productprice:{
        type:Number
    },
    productdesc:{
     type:String,
    },
    productimg:{
        type:String
    }
});

module.exports = mongoose.model('Favourites', Favourites )