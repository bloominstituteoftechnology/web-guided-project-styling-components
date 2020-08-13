const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  if (!req.query.api_key || req.query.api_key !== 'xyz') {
    res.status(403).json({ message: 'Please supply a valid api_key' })
  } else {
    next()
  }
})

const friends = [
  { id: '1', name: 'Josh', email: 'josh@josh.com', age: 32, hobbies: ['coding', 'science fiction', 'sightseeing'] },
  { id: '2', name: 'Melissa', email: 'melissa@melissa.com', age: 28, hobbies: ['fishing', 'coding', 'death metal'] },
  { id: '3', name: 'AJ', email: 'aj@aj.com', age: 25, hobbies: ['hiking', 'netflix', 'coding'] },
  { id: '4', name: 'Audrey', email: 'audrey@audrey.com', age: 22, hobbies: ['heavy metal', 'coding', 'death metal'] },
  { id: '5', name: 'Ebony', email: 'ebony@ebony.com', age: 35, hobbies: ['reading', 'coding', 'bird watching'] },
  { id: '6', name: 'Trevor', email: 'trevor@trevor.com', age: 24, hobbies: ['hiking', 'heavy metal', 'coding'] },
]

app.get('/friends/:id', (req, res) => {
  const friend = friends.find(fr => fr.id === req.params.id)
  if (!friend) {
    res.status(404).json({ message: 'No such friend!' })
  }
  else {
    res.json(friend)
  }
})

app.get('/friends', (req, res) => {
  res.json(friends.map(fr => ({ id: fr.id, name: fr.name })))
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
