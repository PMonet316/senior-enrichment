'use strict'
const router = require('express').Router()
const db = require('../db')
const { Student, Campus } = require('../db/models');
const campusRoute = require('./campusRoute');
const studentRoute = require('./studentRoute');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!


	//------Campus Routes-------//

	// //GET all campuses
	router.get('/campuses', (req, res, next) => {
		Campus.findAll({include: Student})
		.then(campuses => res.json(campuses))
		.catch(next);
	});

	//GET a campus by id
	router.get('/campuses/:campusId', (req, res, next) => {
		Campus.findById(req.params.campusId, {include: Student})
		.then(campus => res.json(campus))
		.catch(next);
	});

	//PUT (update) a campus
	router.put('/campuses/:campusId', (req, res, next) => {
		return Campus.update(req.body, {
			where: { id: req.params.campusId },
		})
		.then(([affectedCount, affectedRows]) => res.json(affectedRows))
		.catch(next);
	});

	//DELETE a campus
	router.delete('/campuses/:campusId', (req, res, next) => {
		return Campus.destroy({
			where: { id: req.params.campusId},
		})
		.then(affectedRows => res.sendStatus(204).json(affectedRows))
		.catch(next)
	});

//POST a new campus
router.post('/campuses', (req, res, next) => {
  return Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});


	//------Student Routes-------//

//GET all students
	router.get('/students', (req, res, next) => {
		Student.findAll()
		.then(student => res.json(student))
		.catch(next);
	});

	//GET a student by id
	router.get('/students/:studentId', (req, res, next) => {
		Student.findById(req.params.studentId)
		.then(student => res.json(student))
		.catch(next);
	});

// //POST a new student
router.post('/students', (req, res, next) => {
   const student = Student.build(req.body);
  student.setCampus(req.body.campusId)
  return student.save()
  .then(student => res.status(201).json(student))
  .catch(next);
});

	//PUT (update) a student
	router.put('/students/:studentId', (req, res, next) => {
		return Student.update(req.body, {
			where: { id: req.params.studentId },
		})
		.then(([affectedCount, affectedRows]) => res.json(affectedRows))
		.catch(next);
	});

	//DELETE a student
	router.delete('/students/:studentId', (req, res, next) => {
		return Student.destroy({
			where: { id: req.params.studentId},
		})
		.then(affectedRows => res.sendStatus(204).json(affectedRows))
		.catch(next)
	});


	router.get('/hello', (req, res) => res.send({hello: 'world'}))

	router.use((req, res, next) => {
		res.status(404).send('Not found');
	});

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = router;
