const express = require('express')
const router = express.Router()
const Book = require('../models/books.js')

module.exports = router

router.get('/seed', (req, res) => {
        Book.insertMany([
            {
            "title": "The Shinobi Initiative",
            "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
            "year": 2014,
            "quantity": 10,
            "imageURL": "https://imgur.com/LEqsHy5.jpeg"
          },
          {
            "title": "Tess the Wonder Dog",
            "description": "The tale of a dog who gets super powers",
            "year": 2007,
            "quantity": 3,
            "imageURL": "https://imgur.com/cEJmGKV.jpg"
          },
          {
            "title": "The Annals of Arathrae",
            "description": "This anthology tells the intertwined narratives of six fairy tales.",
            "year": 2016,
            "quantity": 8,
            "imageURL": "https://imgur.com/VGyUtrr.jpeg"
          },
          {
            "title": "Wâˆ€RP",
            "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
            "year": 2010,
            "quantity": 4,
            "imageURL": "https://imgur.com/qYLKtPH.jpeg"
          }
        ])
            .then(res.status(200).json({
                message: 'Seed successful'
            }))
            .catch(res.status(400).json({
                message: 'Seed unsuccessful'
            }))
    })

//index
router.get('/', (req, res) => {
    Book.find()
    .then(foundBooks => {
        res.json(foundBooks)
    })
})

//create
router.post('/', (req, res) => {
    Book.insertMany([
        {
            "title": "fakebook",
            "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
            "year": 2010,
            "quantity": 4,
            "imageURL": "kdkkdkdk"
        },
        {           
         "title": "fakebook2",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "kdkkdkdk"}
    ])
    .then(() => {
        res.redirect('/books')
    })
})

//show
router.get('/:_id', (req, res) => {
    Book.find({_id: req.params._id})
    .then(foundBooks => {
        res.json(foundBooks)
    })
    })

    //update
    router.put('/:_id', (req, res) => {
        Book.findByIdAndUpdate(req.params._id)
        .then(foundBooks => {
            res.json(`/books/${req.params._id}`)
        })
        .catch(err => {
            res.render('error404')
        })
    })

    router.delete('/:_id', (req, res) => {
        Book.findByIdAndDelete(req.params._id)
        .then(foundBooks =>{
            res.redirect('/books')
        })
        .catch(err => {
            res.render('error404')
        })
    })
