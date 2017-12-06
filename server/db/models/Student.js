'use strict'

const db = require('../index');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL(10, 1),
    validate: {
      max: 4.0, min: 0.0
    }
  }
}, {
  getterMethods: {
    name() {
      return this.firstName + " " + this.lastName;
    }
  }
});

module.exports = Student;
