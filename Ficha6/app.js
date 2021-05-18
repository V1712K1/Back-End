const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function readFile(path) {
  var data = fs.readFileSync(path);
  return data;
}

function writeFile(path, data){
  fs.appendFileSync(path, data);

}

// fs.open('log.txt', 'w+', function (err, f) {
//     if (err) {
//        return console.error(err);
//     }
//     console.log(f);
//     console.log("File opened!!");     
//  });


app.get("/root", function(req, res){
  const body = "Hello World!";
  var date = new Date();

  res.writeHead(200,{
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  });
  res.end(body);
  readFile("log.txt");
  writeFile("log.txt", req.path + ", " + req.method + ", "  + date +"\n");
});

 app.get("/html", function (req, res) {
   var texto = "<!DOCTYPE html><html><body><h1>this is a page header!</h1><p>{message}</p></body></html>";
   var date = new Date();

   texto = texto.replace('{message}', date.toDateString());

   res.writeHead(200,{
    'Content-Length': Buffer.byteLength(texto),
    'Content-Type': 'text/html'
 });
   res.end(texto);
   
  readFile("log.txt");
  writeFile("log.txt", req.path + ", " + req.method + ", "  + date +"\n");
 });



 app.get("/user/:name", function (req, res) {

  var date = new Date();
  var nome = req.params.name;

  res.send("Welcome " + nome);
  
  readFile("log.txt");
  writeFile("log.txt", req.path + ", " + req.method + ", "  + date +"\n");

 
});

app.get("/listar", function (req, res) {

  var file = readFile("./log.txt");
  res.end(file);
});

app.get("/download", function (req, res) {

  var file = readFile("./log.txt");
  res.download('log.txt');
});

app.delete("/clear", function (req, res) {

  fs.unlinkSync('./log.txt');
  res.send("File Deleted");

});
