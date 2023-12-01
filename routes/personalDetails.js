const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router  = express.Router();
const PersonalDetails = require('../modals/PersonalDetails')


// Route: 1 For put the personal details
router.post('/putDetails', fetchUser , async(req,res)=>{
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
   res.status(400).json({msg:"successfully updated", success:'true'})
   }

   const userdata = PersonalDetails.create({fullname, number, altnumber, address, user:req.user.id});
   res.status(400).json({msg:"Successfully Added the details", success:'true'})

}
catch{
    res.status(400).json({msg: "Internal server error", success:'false'})
}
})

// Route: 2 For get the personal details
router.get('/getDetails', fetchUser , async(req,res)=>{
    try{
   const user = await PersonalDetails.findOne({user:req.user.id})
    res.send(user)
}
catch{
    res.status(400).json({msg: "Internal server error", success:'false'})
}
})

module.exports = router;