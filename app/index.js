'use strict';

// const router = require('express').Router();

// router.get('/', (req, res, next) => {
// 	// res.send('<h1>Hello Express!</h1>');
// 	// res.sendFile(__dirname + '/views/login.htm');
// 	res.render('login');
// });

module.exports = {
	router: require('./routes')(),
	session: require('./session')
}