const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/', (req, res) => {
  res.send('Post Request')
})

app.put('/user', (req, res) => {
  res.send('Put Request')
})

app.delete('/user', (req, res) => {
  res.send('Delete Request')
})  