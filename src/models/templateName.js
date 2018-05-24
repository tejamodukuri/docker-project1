
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var templateNameSchema = new Schema({

	listId:Number,
	userId:Number,
	requestName:String,
	saveAsTemplate: Boolean

	
});
var templateName = mongoose.model('templateName', templateNameSchema);

module.exports = templateName;
