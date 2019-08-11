
const mongoose = require('mongoose');

let BookSchema = new mongoose.Schema({
    id: String,
    isbn: String,
    title:String,
    author:String,
    description:String,
    published_year:{type:Number, min: 1945, max:2019},
    updated_date: {type:Date, default:Date.now},
});

module.exports = mongoose.model('Book', BookSchema);