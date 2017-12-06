const express = require('express')
const router = express.Router()
const { Campus, Student } = require('../db/models');
const db = require('../db')

const campusRoute = require('./campusRoute');
const studentRoute = require('./studentRoute');

// //GET all campuses
// router.get('/campuses', (req, res, next) => {
//   return Campus.findAll()
//   .then(campuses => res.json(campuses))
// })

// //GET a campus by id
// router.get('/campuses/:campusId', (req, res, next) => {
//   const campusId = req.params.campusId;
//   return Campus.findById({ where: { campusId } })
//     .then(campus => res.json(campus))
//     .catch(next);
// });

// //POST a new campus
router.post('/campuses', (req, res, next) => {
  return Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

module.exports = router;


