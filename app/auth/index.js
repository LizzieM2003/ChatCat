'use strict';

const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;
const h = require('../helpers');

module.exports = () => {
	let authProcessor = (accessToken, refreshToken, profile, done) => {
		// Find a user in the local db using profile.id
		// If the user is found, return the user data using the done()
		// If the user is not found, create one in the local db and return
		h.findOne(profile.id)
			.then(result => {
				if (result) {
					done(null, result);
				} else {
					// Create a new user and return
					h.createNewUser(profile)
						.then(newChatUser => done(nukk, newChatuser))
						.catch(error => console.log('Error when creating new user'))
				}
			});
	}
	passport.use(new FacebookStrategy(config.fb, authProcessor));
}