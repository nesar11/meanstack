const express = require('express');
const api2 = express.Router();
const Product = require('../models/product');




api2.get('/products', (req, res)=>{
    Product.find(function(err, products){
if(err){
    console.log(err);

}else{
    res.json(products);
}
    })
    
})



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

module.exports = api2