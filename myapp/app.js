const { response } = require('express');
const express = require('express');
const app = express();
const fs = require('fs');
const { get } = require('http');
const port = 3000


app.use(express.json());

app.use(express.urlencoded({ extend: true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function readFile(path){
  var data = fs.readFileSync(path);
  return data;
}

function writeFile(path, data){
  fs.writeFileSync(path, data);
}

app.get('/users', function(request, response){
  var file = readFile('persons.json');
  response.send(file)
});

app.put('/users', function (request, response){
  var file = readFile('./persons.json');
  var jsonData = JSON.parse(file);

  var keys = Object.keys(jsonData);

  console.log(keys);

  var obj_length = keys.length;

  obj_length++;

  console.log(obj_length);

  jsonData['pessoa' + obj_length] = request.body;
  jsonData['pessoa' + obj_length].firstname = "Filipa";
  jsonData['pessoa' + obj_length].lastname = "Freitas";
  jsonData['pessoa' + obj_length].profession = "Educadora de infancia";
  jsonData['pessoa' + obj_length].age = 38;
  jsonData['pessoa' + obj_length].genero = "f";  
  jsonData['pessoa' + obj_length].id = obj_length;


  response.send(jsonData);

});

app.delete('/users/:id', function(request, response){
  var file = readFile('./persons.json');
  var jsonData = JSON.parse(file);

  var id = request.params.id;

  for(pessoa in jsonData){
    if(jsonData[pessoa].id == id){
      delete jsonData[pessoa];
      response.send(jsonData);
    }
  }
});

app.get('/users/:id', function(request, response){
  var file = readFile('./persons.json');
  var jsonData = JSON.parse(file);

  var id = request.params.id;

  for(pessoa in jsonData){
    if(jsonData[pessoa].id == id){      
      response.send(jsonData[pessoa]);
    }
  }
});

app.post('/users/:id', function(request, response){
  var file = readFile('./persons.json');
  var jsonData = JSON.parse(file);

  var id = request.params.id;

  for(pessoa in jsonData){
    if(jsonData[pessoa].id == id){
      jsonData['pessoa' + id].age = 34;
      writeFile('./persons.json', JSON.stringify(jsonData));
      response.send(jsonData[pessoa]);
    }
  } 

});






// estes foi até ex2 da msm ficha

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.post('/', (req, res) => {
//   res.send('Post Request')
// })

// app.put('/user', (req, res) => {
//   res.send('Put Request')
// })

// app.delete('/user', (req, res) => {
//   res.send('Delete Request')
// })

