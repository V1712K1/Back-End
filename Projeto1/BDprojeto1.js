var mysql = require ('mysql');
const port = 8000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "stand"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log ("Connected");
//     con.query("CREATE DATABASE stand", function (err, result){
//         if (err) throw err;
//         console.log("Database created");
//     });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log ("Connected");
//     var sql = "CREATE TABLE cars (id INT, seller_id INT, brandmodel VARCHAR(100), description VARCHAR(255), price DECIMAL, url VARCHAR(255), views INT, images JSON, comments JSON, tags JSON)";
//     con.query (sql, function (err, result){
//         if (err) throw err;
//         console.log("Table created");
//     });
// });


