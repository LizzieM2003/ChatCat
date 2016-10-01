'use strict';
const h = require('../helpers');
const passport = require('passport');

module.exports = () => {
	let routes = {
		'get': {
			'/': (req, res, next) => {
				res.render('login');
			},
			'/rooms': [h.isAuthenticated,
			(req, res, next) => {
				res.render('rooms', {user: req.user});
			}],
			'/chat': [ h.isAuthenticated,
			(req, res, next) => {
				res.render('chatroom', {user: req.user});
			}],
			'/auth/facebook': passport.authenticate('facebook'),
			'/auth/facebook/callback': passport.authenticate('facebook', {
				successRedirect: '/rooms',
				failureRedirect: '/'
			}),
			'/auth/twitter': passport.authenticate('twitter'),
			'/auth/twitter/callback': passport.authenticate('twitter', {
				successRedirect: '/rooms',
				failureRedirect: '/'
			}),
			'/logout': (req, res, next) => {
				req.logout();
				res.redirect('/');
			}
			// '/getsession': (req, res, next) => {
			// 	res.send(`My favourite colour: ${req.session.favColor}`);
			// },
			// '/setSession': (req, res, next) => {
			// 	req.session.favColor = 'purple';
			// 	res.send("Session set");
			// }	
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