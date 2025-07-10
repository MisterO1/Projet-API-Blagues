const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
})

const Joke = require('./joke')(sequelize, DataTypes);

sequelize.sync() // Force sync the database, creating tables if they don't exist

module.exports = { sequelize, Joke };