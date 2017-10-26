'use strict'
const api = require('express').Router()
const db = require('../db')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

	api.use('/', require('./routes'));

	api.get('/hello', (req, res) => res.send({hello: 'world'}))

// api.get('/test', (req, res) => res.send({your: 'face'}))

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.


module.exports = api
