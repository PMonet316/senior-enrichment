const express = require('express')
const router = express.Router()
const { Campus, Student } = require('../db/models');
const db = require('../db')

const campusRoute = require('./campusRoute');
const studentRoute = require('./studentRoute');




module.exports = router;


