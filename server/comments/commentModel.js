var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	user:String,
	content:String
	
});
var Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;