//dependencies
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//configs
require('dotenv').config()
PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)
var corsOptions = {
    origin: 'http://localhost:3000.com',
    optionsSuccessStatus: 200
  }

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(cors())

//routes
app.get('/', (req, res) => {
    res.send('Heyyy')
})

//app.get('*', (req, res) => {
//    res.send('error404')
//})

// books: 
const booksController = require('./controllers/books-controller.js')
app.use('/books', booksController)

//listen
app.listen(PORT, () => {
    console.log('Greetings! From port: ', PORT);
  })