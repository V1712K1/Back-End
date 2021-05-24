// 3.
// a)
const express = require('express')
const app = express()
const port = 8000

// parte C
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// b)
var mysql = require ('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stand"
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// Parte A
// a)
//   app.get ('/', function (request, response){
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query("SELECT * FROM cars", function (err, result, fields) {
//           if (err) throw err;
//           console.log(result);
//           response.send(result);
//         });
//       });
// }) ;  

// b)

// app.post ('/novo', function (request, response){
//     con.connect(function(err) {
//         if (err) throw err;
//         var sql = "INSERT INTO cars (seller_id, brandmodel, description, price, url, views, images, comments, tags) VALUES ('2','Audi', 'RS4', '90000', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fauto-drive.pt%2F2020%2F10%2F02%2Fabt-puxa-pelo-lado-feroz-da-audi-rs4-avant%2F&psig=AOvVaw2MdMpQDGI2FXxCLgMsdVjQ&ust=1621442275092000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD70qjV0_ACFQAAAAAdAAAAABAE','1','[\"https://www.planetcarsz.com/assets/uploads/6964937961eb825847abda468c847cf9.jpg\"]','[\"Family Supercar\"]','[\"Cinzento\",\"Desportivo\"]')";
//         con.query(sql, function (err, result) {
//           if (err) throw err;
//           console.log("1 record inserted");
//         });
//         con.query("SELECT cars.id FROM cars WHERE cars.brandmodel = 'Audi' ", function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//             response.send(result);
//         });
//     });
// }) ;

// c)

// app.get ('/seller', function (request, response){
//         var carros = request.query.carros
//         con.connect(function(err) {
//             if (err) throw err;
//             con.query(`SELECT cars.brandmodel as 'Marca', concat(cars.description) as 'Modelo' FROM cars WHERE cars.seller_id =${carros} `, function (err, result, fields) {
//               if (err) throw err;
//               console.log(result);
//               response.send(result);
//             });
//           });
//     }) ;  

// d)
// app.post ('/update/:id', function (request, response){
//     var id = request.params.id
//     con.connect(function(err) {
//     if (err) throw err;
//         con.query(`UPDATE cars set cars.views = views+1 WHERE cars.id = ${id} `, function (err, result, fields) {
//             console.log(result);
//             response.send(result);
//         });  
//     });
//     var query = `SELECT * FROM cars WHERE cars.id = ${id}`;
//         con.query(query, function(err, result){
//             if(err) throw err;
//             if(result == '')
//                 response.send("Nao existe!");
//             else 
//                 response.send(result);    
//         }); 

// });


// e) 

// app.get ('/tag', function (request, response){
//     var tags = request.query.tags
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query(` SELECT cars.brandmodel FROM cars WHERE JSON_CONTAINS(tags, '[\"${tags}\"]' ) `, function (err, result, fields) {
//           if (err) throw err;
//           console.log(result);
//           response.send(result);
//         });
//     });
// }); 

// Parte B

// a) -------------------------------------------------------------------------------------------

// app.get ('/carroid', function (request, response){
//     var id = request.query.id
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query(` SELECT * FROM cars WHERE cars.id = ${id} `, function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//             response.send(result);
//         });
//     });
// }) ; 

// ------------------------------------------------------------------------------------------


// b) -------------------------------------------------------------------------------------------

// app.delete("/cars/:id", (req, res) => {
//     con.connect(function(err) {
//     var id = req.params.id;
//     if (err) throw err;
//        console.log("Connected!");
//         con.query(`DELETE FROM cars WHERE id = ${id}`, function (err, result, fields) {
//         if (err) throw err;
//         console.log("Deletado");
//         console.log("Number of records updated: " + result.affectedRows);
//         });
//     });
// });

// --------------------------------------------------------------------------------------


// c) ---------------------------------------------------------------------------------------

// app.put ('/adicionaimg/:id', function (request, response){
//     var id = request.params.id
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query(`Update cars SET images = '[\"https://www.ultimatespecs.com/cargallery/59/5183/w400_Koenigsegg-Agera-2.jpg\"]' WHERE cars.id = ${id}`, function (err, result, fields) {
//           if (err) throw err;
//           console.log("1 record inserted");
//         });
//         con.query(`SELECT cars.images as 'Result' FROM cars WHERE cars.id = ${id} `, function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//             response.send(result);
//         });
//     });
// }); 


// d) ---------------------------------------------------------------------------------------


// app.post ('/adicionacmt', function (request, response){
//     var id = request.query.id;
//     var detalhes = request.body;
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query(`Update cars SET ? WHERE cars.id = ?`, [detalhes,id] , function (err, result, fields) {
//           if (err) throw err;
//           console.log("1 record inserted");
//         });
//         con.query(`SELECT cars.comments as 'Result' FROM cars WHERE cars.id = ${id} `, function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//             response.send(result);
//         }); 
//     });
// }); 

// e) ----------------------------------------------------------------------------------------


// app.get ('/listaview', function (request, response){
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query(" SELECT cars.brandmodel, concat(cars.views) as 'Vistas' FROM cars ORDER BY views ASC", function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//             response.send(result);
//         });
//     });
// }) ; 


