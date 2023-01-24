
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const userTable = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: false
  },
  phonenumber: {
    type: Sequelize.DOUBLE,
    unique: false
  }
});

module.exports = userTable;



