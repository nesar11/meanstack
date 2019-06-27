const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');

const jwt = require('jsonwebtoken');


router.get('/users', (req, res)=>{
    User.find(function(err, users){
if(err){
    console.log(err);

}else{
    res.json(users);
}
    })
    
})



router.post('/register', (req, res) =>{
    let userData = req.body
    let user = new User(userData);
    user.save((error, registeredUser) =>{
        if(error){
            console.log(error)
        } else {
          let payload = {subject: registeredUser._id}
          let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    });

});




router.post('/login', (req, res) =>{
    let userData = req.body
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error)
        } else{
            if (!user){
                res.status(401).send('Invalid email')
            } else 
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password')

            } else {
              let payload = {subject: user._id }
              let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    });
});

/*  verified token */

function verifiedToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send('unauthorizaed request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null'){
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload){
    return res.status(401).send('unthosized request')
  } req.userId = payload.subject
  next()
}

router.get('/events', (req, res) => {

let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(events)
});

router.get('/special', (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo Special",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }
  ]
  res.json(specialEvents)
});




/* product */




router.get('/products', (req, res) =>{
    Product.find(function(err, products){
    if(err){
        console.log(err);

        } else{
            res.json(products);
        }
    })
        
})

router.post('/product', (req, res) =>{
    let userData = req.body
    let product = new Product(userData);
    product.save((error, productCreated) =>{
        if(error){
            console.log(error)
        } else {
        
            res.status(200).send(productCreated)
        }
    });

});

module.exports = router