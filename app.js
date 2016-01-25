 // Clapp.Kerberos
 // v. 0.1.0

console.log('\n\t\t\t\t== Clapp.Kerberos ==');

// =======================
// libraries =========
// =======================
var express 	= require("express");
var app 		= express();
var path 		= require('path');
var http 		= require('http').Server(app);
var io 			= require("socket.io")(http);
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var jwt   		= require('jsonwebtoken'); // used to create, sign, and verify tokens
var checkInternet = require('is-online');

var globals 		= require('./app/controllers/global');
var frontend 		= require('./app/controllers/frontend');
var routes 			= require('./app/controllers/routes');
var socketController = require('./app/controllers/socket');

console.log('\nLibs imported');

// =======================
// configuration =========
// =======================
var port = 5000;

var isOnline = true;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =======================
// initialize modules =========
// =======================
frontend.initialize(app, express, path);
routes.initialize(app, express);
socketController.initialize(io, globals);

console.log('modules initialized');

// =======================
// listening app =========
// =======================
io.listen(app.listen(port));
console.log('Listening on port ' + port);