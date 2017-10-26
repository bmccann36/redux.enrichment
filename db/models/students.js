const db = require('../../db')
const Sequelize = require('sequelize');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
    // allowNull: false,
  },
  gpa: {
    type: Sequelize.FLOAT
  }
});




module.exports = Student
