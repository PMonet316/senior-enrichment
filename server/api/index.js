'use strict'
const router = require('express').Router()
const db = require('../db')
const { Student, Campus } = require('../db/models');
const campusRoute = require('./campusRoute');
const studentRoute = require('./studentRoute');


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

	// //GET all campuses
	router.get('/campuses', (req, res, next) => {
		Campus.findAll({include: Student})
		.then(campuses => res.send(campuses))
		.catch(next);
	});

	//GET a campus by id
	router.get('/campuses/:campusId', (req, res, next) => {
		Campus.findById(req.params.campusId)
		.then(campus => res.json(campus))
		.catch(next);
	});


	router.get('/hello', (req, res) => res.send({hello: 'world'}))

	router.use((req, res, next) => {
		res.status(404).send('Not found');
	});

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

module.exports = router;
