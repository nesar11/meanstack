const express = require('express');
const api2 = express.Router();
const Product = require('../models/product');
// Defined store route


api2.route('/add').post(function (req, res) {
  var product = new Product(req.body);
  product.save()
    .then(item => {
    res.status(200).json({success: true, result: 'product added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

 
/* GET users listing. */
api2.get('/', function(req, res, next) {
  Product.find({}, function (err, products) {
      if(err){
        res.json({success: false, err:"unable to read products "});
      } else {
        res.json({success: true, result: products});
      }
  });
});







// router.get('/users', (req, res)=>{
//   User.find(function(err, users){
// if(err){
//   console.log(err);

// }else{
//   res.json(users);
// }
//   })
  
// })

  module.exports = api2