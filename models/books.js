//requireing mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//Schema
const booksSchema = new Schema ({
    title: {type: String, required: true},
    description: String,
    year: Number,
    quantity: Number, 
    imageURL: String
})

// model and export: 
const Book = mongoose.model('Book', booksSchema)
module.exports = Book