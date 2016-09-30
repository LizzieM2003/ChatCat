'use strict';
const h = require('../helpers');

module.exports = () => {
	let routes = {
		'get': {
			'/': (req, res, next) => {
				res.render('login');
			},
			'/rooms': (req, res, next) => {
				res.render('rooms');
			},
			'/chat': (req, res, next) => {
				res.render('chatroom');
			},
			'/getsession': (req, res, next) => {
				res.send(`My favourite colour: ${req.session.favColor}`);
			},
			'/setSession': (req, res, next) => {
				req.session.favColor = 'purple';
				res.send("Session set");
			}	
		},
		'post': {

		},
		'NA': (req, res, next) => {
			res.status(404).sendFile(process.cwd() + '/views/404.htm');
		}
	}

	// registerRoutes(routes);
	// return router;
	return h.route(routes);

}