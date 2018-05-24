
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bidPlaceSchema = new Schema({

price:String,
quantity:Number,
paymentProcess:String,
paymentMethod:String,
paymentDays:Number

	
});
var bidPlace = mongoose.model('bidPlace', bidPlaceSchema);

module.exports = bidPlace;


