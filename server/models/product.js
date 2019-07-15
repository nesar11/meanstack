const mongoose = require('mongoose');

const Schema = mongoose.Schema
const productSchema = new Schema({
    productName: String,
    productDescription: String,
    image:String
},{timestamps:true});


module.exports = mongoose.model('product', productSchema, 'products');