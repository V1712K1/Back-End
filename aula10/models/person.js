const Sequelize = require('sequelize');

const person = sequelize.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Profession: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
 
    
})
 
module.exports = person;