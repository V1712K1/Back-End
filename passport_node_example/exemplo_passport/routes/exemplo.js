//parte do exemplo --------------------------------

var express = require('express');
var router = express.Router();


app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })

// --------------------------------------------------