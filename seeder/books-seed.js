const db = require('../models/books.js')

db.create ([
    {
        title: "The Shinobi Initiative",
        description: "The reality-bending adventures of a clandestine service agency in the year 2166",
        year: 2014,
        quantity: 10,
        imageURL: "/assets/shinobi-initiative.jpeg"
      },
      {
        title: 'Fake book 1',
        description: 'its a fake books',
        year: 1997,
        quantity: 10,
        imageURL:'22'
      }
      
])

.then(() => {
  console.log('Success')
  process.exit()
})
.catch(err => {
  console.log('error')
  process.exit()
})