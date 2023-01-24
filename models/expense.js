
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  Amount: {
    type: Sequelize.DOUBLE,
    allowNull: true
  },
  expense: {
    type: Sequelize.STRING,
    allowNull: true
  },
  option: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Expense;



