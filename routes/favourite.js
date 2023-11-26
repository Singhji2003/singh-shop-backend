const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router  = express.Router();
const Favourites = require('../modals/Favourites')


// Route: 1 For put the personal details
router.post('/put', fetchUser , async(req,res)=>{
    try{
    const {productname, productprice, productdesc, productimg}  = req.body

   const product = Favourites.create({productname, productprice, productdesc, productimg, user:req.user.id});
   res.send("Successfully Added the product")
}
catch{
    res.status(400).send("Internal server error")
}
})

// Route: 2 For get the personal details
router.get('/get', fetchUser , async(req,res)=>{
    try{
   const user = await Favourites.find({user:req.user.id})
    res.send(user)
}
catch{
    res.status(400).send("Internal server error")
}
})

// Route: 3 For Remove the product from cart 
router.delete('/remove/:id', fetchUser , async(req,res)=>{
    try{
   const product = await Favourites.findByIdAndDelete(req.params.id);
   res.send("Successfully Deleted the product")
}
catch{
    res.status(400).send("Internal server error")
}
})

module.exports = router;