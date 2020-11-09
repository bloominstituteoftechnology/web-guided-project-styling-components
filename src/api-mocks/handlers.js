// This is for the fake API. Do not delete!
import { rest } from 'msw'

const friends = [
  { id: '1', name: 'Bea', email: 'bea@bea.com', age: 32, hobbies: ['coding', 'science fiction', 'sightseeing'] },
  { id: '2', name: 'Bikesh', email: 'bikesh@bikesh.com', age: 28, hobbies: ['fishing', 'coding', 'death metal'] },
  { id: '3', name: 'Cora', email: 'cora@cora.com', age: 25, hobbies: ['hiking', 'netflix', 'coding'] },
  { id: '4', name: 'Deborah', email: 'deborah@deborah.com', age: 22, hobbies: ['heavy metal', 'coding', 'death metal'] },
  { id: '5', name: 'Devin', email: 'devin@devin.com', age: 35, hobbies: ['reading', 'coding', 'bird watching'] },
  { id: '6', name: 'Micherre', email: 'micherre@micherre.com', age: 24, hobbies: ['hiking', 'heavy metal', 'coding'] },
]

function getAllFriends(req, res, ctx) {
  const api_key = req.url.searchParams.get('api_key')
  if (!api_key || api_key !== 'xyz') {
    return res(
      ctx.status(403),
      ctx.json({ message: 'Please supply a valid api_key' }),
    )
  }
  return res(
    ctx.status(200),
    ctx.json(friends.map(fr => ({ id: fr.id, name: fr.name }))),
  )
}

function getFriendById(req, res, ctx) {
  const api_key = req.url.searchParams.get('api_key')
  if (!api_key || api_key !== 'xyz') {
    return res(
      ctx.status(403),
      ctx.json({ message: 'Please supply a valid api_key' }),
    )
  }
  return res(
    ctx.status(200),
    ctx.json(friends.find(fr => fr.id === req.params.id)),
  )
}

export const handlers = [
  rest.get('http://buddies.com/api/friends/:id', getFriendById),
  rest.get('http://buddies.com/api/friends', getAllFriends),
]
