/**
 * Seed.js - seeds the database. I.e. it creates a dummy user.
 */

var colors = require('colors')
var mongoose = require('mongoose');

/**
 * Import the model(s)
 */
var UserModel = require('./models/user')

/**
 * 连接数据库，并且初始化用户信息
 */
mongoose.connect('mongodb://localhost/jwttest');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Failed to connect to database!'.red))

db.once('open', function callback () {
	
	var user = new UserModel()
	user.username = 'zach'
	user.password = 'password'
	
	user.save(function(err){
		if (err) {
			console.log('Could not save user.'.red)
		} else {
			console.log('Database seeded'.green)
		}

		process.exit()
	})	

});


