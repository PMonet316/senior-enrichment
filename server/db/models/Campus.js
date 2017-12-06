'use-strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Campus = db.define('campus',{
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://imgur.com/gallery/ypk3kI6'
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campus;
