var express = require('express');
var mongoose = require('mongoose');
var app = express();
var http = require('http').Server(app);


// =============================================================================
/*									Database								 */
// =============================================================================
mongoose.connect('mongodb://localhost/mbc');
mongoose.connection.once('open',function(){

	console.log('Listening on port ' + port);


});
//==================================================================
//require middleware and route
require('./config/middleware.js')(app, express);
require('./config/route.js')(app, express);
// =============================================================================
/*									Server   								 */

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('server now open on port ' + port);
});

module.exports = app;