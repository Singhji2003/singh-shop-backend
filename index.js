const express = require('express')
const connectToMongooDB = require('./db')
const app = express()
const port = 5000
connectToMongooDB();
const auth = require('./routes/auth');
const personalDetails = require('./routes/personalDetails');
const cartdata = require('./routes/cartdata');
app.use(express.json())
app.use('/', auth)
app.use('/details', personalDetails)
app.use('/cart', cartdata)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
