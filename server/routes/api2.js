const express = require('express');
const api2 = express.Router();
const Product = require('../models/product');



//localhost:3000/api2/product/read
api2.get('/read', (req, res)=>{
    Product.find(function(err, products){
if(err){
    console.log(err);

}else{
    res.json(products);
}
    })
    
})


//localhost:3000/api2/product/add
api2.post('/add', (req, res) => {
    let productData = req.body
    let product  = new Product(productData);
    product.save((error, productAdded) =>{
        if (error){
            console.log(error)
        } else{
            res.status(200).send(productAdded)
        }
   
    
      });
  });

module.exports = api2



//GET http://localhost:3000/api2/product/read
//POST http://localhost:3000/api2/product/add
//PUT http://localhost:3000/api2/product/update
//DELETE http://localhost:3000/api2/product/delete
