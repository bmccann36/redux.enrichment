const db = require('../../db')
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: Sequelize.STRING,
  image: Sequelize.STRING

});

module.exports = Campus
////
