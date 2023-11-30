const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const router  = express.Router();
const CartDetails = require('../modals/CartDetails')


// Route: 1 For put the products in cart 
router.post('/put', fetchUser , async(req,res)=>{
    try{
    const {title, price, original_price, star_rating, num_rating, photo}  = req.body

   const product = CartDetails.create({title, price, original_price, star_rating, num_rating, photo, user:req.user.id});
   res.send("Successfully Added the product")
}
catch{
    res.status(400).send("Internal server error")
}
})

// Route: 2 For get the products from cart 
router.get('/get', fetchUser , async(req,res)=>{
    try{
   const user = await CartDetails.find({user:req.user.id})
    res.send(user)
}
catch{
    res.status(400).send("Internal server error")
}
})

// Route: 3 For Remove the product from cart 
router.delete('/remove/:id', fetchUser , async(req,res)=>{
    try{
   const product = await CartDetails.findByIdAndDelete(req.params.id);
   res.send("Successfully Deleted the product")
}
catch{
    res.status(400).send("Internal server error")
}
})

module.exports = router;