var mysql = require('mysql');

const { response } = require("express");
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mybd"

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });


// how to create database computer haas virus
// con.connect(function(err){
//     if (err) throw err;
//     console.log("Connected!");
//     con.query("CREATE DATABASE mybd", function(err, result){
//         if (err) throw err;
//         console.log("Database created");
    
//     });
// });

// con.connect(function(err){
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE  persons (id INT , firstname VARCHAR(255), lastname VARCHAR(255), profession VARCHAR(255), age INT )";
//     con.query(sql, function(err, result){
//         if (err) throw err;
//         console.log("Table created");    
//     });
// });


    // i. ---------------------------------------------------------------
// app.get("/persons", (req, res) => {
//     con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM persons", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//       res.send(result);
//     });
//   });
// });
    
    //  ---------------------------------------------------------------


      // ii. -----------------------------------------------------     
// app.post("/persons", (req, res) => {
//     con.connect(function(err) {
//     if (err) throw err;
//        console.log("Connected!");
//         con.query("INSERT INTO persons (firstname,lastname,profession,age) VALUES ('Marcelo', 'Freitas', 'Engineer','22')", function (err, result, fields) {
//         if (err) throw err;
//             console.log("Inserido");
//         });
//         con.query("SELECT persons.id FROM persons WHERE firstname = 'Marcelo'", function (err, result, fields) {
//             if (err) throw err;
//                 console.log(result);
//             });
//     });  
// });    

//   ---------------------------------------------------------------------------------------

// iv. ------------------------------------------------------------------^

// app.delete("/persons/:id", (req, res) => {
//     con.connect(function(err) {
//     var id = req.params.id;
//     if (err) throw err;
//        console.log("Connected!");
//         con.query(`DELETE FROM persons WHERE id = ${id}`, function (err, result, fields) {
//         if (err) throw err;
//             console.log("Deletado");
//             console.log("Number of records updated: " + result.affectedRows);
//         });
//     });
// });

// ------------------------------------------------------------------------------------

// v. ------------------------------------------------------------------------------

// app.get("/persons/:id", (req, res) => {
//     con.connect(function(err) {
//     var id = req.params.id;
//     if (err) throw err;
//     con.query(`SELECT persons.firstname, concat(persons.lastname) as 'lastname' FROM persons WHERE id=${id}`, function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
        // if(result == '')
        //     response.send("ID nao existe!");
        // else 
        //     response.send(result);    
//     });
//   });
// });

//  --------------------------------------------------------------------------------------

// vi. ----------------------------------------------------------------------------------

app.get("/persons/:age/:profession", (req, res) => {    
    var age = req.params.age;
    var profession = req.params.profession; 
//     con.connect(function(err) {   
//     if (err) throw err;
//     con.query(`SELECT persons.firstname, concat(persons.lastname) as 'lastname' FROM persons WHERE profession=${profession} AND age=${age}`, function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
    var query = "SELECT * FROM persons WHERE age = ? AND profession = ?";
    con.query(query, [age, profession], function(err, result){
        if(err) throw err;
        if(result == '')
            res.send("Nao existem!");
        else 
            res.send(result);    
    });
});

// ---------------------------------------------------------------------------------
// vii. ------------------------------------------------------------------------------