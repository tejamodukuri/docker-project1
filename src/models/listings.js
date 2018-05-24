
var mongoose = require('mongoose');
var mongooseIncrement = require('mongoose-increment');
 var increment = mongooseIncrement(mongoose);
var Schema = mongoose.Schema;

var listingsSchema = new Schema({

	listId:Number,
	listName:String,
	userId:Number,
	userName:String,
	listType:String,
	publishDate:Date,
	expiryDate:Date,
	reccurence:String,
	reccurenceFrequency:String,
	autoRelist:Boolean,
	templateName:String,
	productId:Number,
	productName:String,
	paymentPeriod:String,
	paymentMethod:String, 
	deliveryTerms:String,
	bidtermMarketplace:Boolean,
	bidtermPrefferedVendors:Boolean,
	bidtermSelectGroups:Boolean,
	bidtermUsGovernment:Boolean,
	bidtermInternationalGovt:Boolean,
	additionalNotes:String,
	termsConditionsFlag:Boolean,
	status:String,
	fulfilledPercent:Number,
	groupName:String,
	bidderAllParts:Boolean,
	bidderNegotiable:Boolean,
	lastUpdateDate:Date,
	lastUpdatedBy:Number,
	creationDate:Date,
	createdBy:Number,
	oneTimeRequest:Boolean,
	recurringRequest: Boolean,
	autoRelist: Boolean,
	requestName:String,
	daily:Boolean,
	weekly:Boolean,
	monthly:Boolean,
	saveAsTemplate: Boolean

	
});

listingsSchema.plugin(increment, {

	start: 100,
	modelName: 'listings',
	fieldName: 'productId',
	increment: 1,
});

var listings = mongoose.model('listings', listingsSchema);

module.exports = listings;


