'use strict';

// Social authentication Logic
require('./auth')();

// Create an IO Sever instance
let ioServer = app => {
	app.locals.chatrooms = [];
	const server = require('http').Server(app);
	const io = require('socket.io')(server);
	io.use((socket, next) => {
		require('./session')(socket.request, {}, next);
	});
	require('./socket')(io, app);
	return server;
}

// const router = require('express').Router();

// router.get('/', (req, res, next) => {
// 	// res.send('<h1>Hello Express!</h1>');
// 	// res.sendFile(__dirname + '/views/login.htm');
// 	res.render('login');
// });

module.exports = {
	router: require('./routes')(),
	session: require('./session'),
	ioServer
}