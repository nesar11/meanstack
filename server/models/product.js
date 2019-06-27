const mongoose = require('mongoose');

const Schema = mongoose.Schema
const productSchema = new Schema({
    name: String,
    description:String,
    brand: String,
    qnty: Number
},{timestamps:true});


module.exports = mongoose.model('product', productSchema, 'products');