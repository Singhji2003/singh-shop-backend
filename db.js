const mongoose = require('mongoose')
const MongooUrl = 'mongodb+srv://arpansinghrajput123:Arpan12345@data.2s7hmin.mongodb.net/';
const connectToMongooDB = ()=>{
    if(mongoose.connect(MongooUrl)){
        console.log("SuccessFully Connected to MongooDB")
    }
    else{
        console.log('Some Error Occured')
    }
}
module.exports = connectToMongooDB;