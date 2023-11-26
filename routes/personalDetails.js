const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router  = express.Router();
const PersonalDetails = require('../modals/PersonalDetails')


// Route: 1 For put the personal details
router.post('/put', fetchUser , async(req,res)=>{
    try{
    const {fullname, number, altnumber, address}  = req.body

 
   const newDetails = {};
   const user = await PersonalDetails.findOne({user:req.user.id})
   if(user){
    if(fullname){
        newDetails.fullname = fullname;
    }
    if(number){
        newDetails.number = number;
    }
    if(altnumber){
        newDetails.altnumber = altnumber;
    }
    if(address){
        newDetails.address = address;
    }
    const data = await PersonalDetails.findByIdAndUpdate(user._id , {$set:newDetails}, {new:true})
   return res.send('successfully updated')
   }

   const userdata = PersonalDetails.create({fullname, number, altnumber, address, user:req.user.id});
   res.send("Successfully Added the details")

}
catch{
    res.status(400).send("Internal server error")
}
})

// Route: 2 For get the personal details
router.get('/get', fetchUser , async(req,res)=>{
    try{
   const user = await PersonalDetails.findOne({user:req.user.id})
    res.send(user)
}
catch{
    res.status(400).send("Internal server error")
}
})

module.exports = router;