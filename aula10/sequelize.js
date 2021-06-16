const express = require("express");
const Sequelize = require('sequelize');
const fs = require("fs");
 
const app = express();
const port = 3000;
 
const sequelize = new Sequelize('ficha10', 'root', '', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;
 
sequelize.authenticate ()
    .then( () => {
        console.log("Connection has been estalished");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


 
// const person = sequelize.define('person', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     Firstname: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     Lastname: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     Profession: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     Age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     },
 
    
// })
 
// module.exports = person;
 
sequelize.sync({ force: true })
    .then(() => {
        console.log('Database & tables created!');
        person.bulkCreate([
             { Firstname:'João', Lastname:'Reis', Profession:'Segalheiro', Age: 19 },
             { Firstname:'Maria', Lastname:'Leça', Profession:'IT', Age: 19 },
             { Firstname:'Vitor', Lastname:'Quintal', Profession:'Segalheiro', Age: 20 },
        ])
        .then(function () {
            return person.findAll();
        }).then(function (persons) {
            console.log(persons);
        });
    });