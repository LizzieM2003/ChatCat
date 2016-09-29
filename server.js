'use strict';

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
	// res.send('<h1>Hello Express!</h1>');
	// res.sendFile(__dirname + '/views/login.htm');
	res.render('login');
});

app.listen(app.get('port'), () => {
	console.log('ChatCAT running on port:', app.get('port'));
});