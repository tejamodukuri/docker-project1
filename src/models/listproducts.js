
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listproductsSchema = new Schema({

listId:Number,
productId:Number,
productName:String,
productNotes:String,
productType:String, 
manufactureDate:Date,
productOriginCity:String,
productOriginState:String,
productOriginCountry:String,
packageUnits:String,
packageType:String,
packageContainer:String,
productQuantity:Number,
lotNumber:Number,
pricePerUnit:Number,
totalPrice:Number,
fulfilledStatus:Boolean,
offerPrice:Boolean,
quantity:Number,
fulfilledPercent:Number,
lastUpdateDate:Date,
lastUpdatedBy:Number,
creationDate:Date,
createdBy:Number

});
var listproducts = mongoose.model('listproducts', listproductsSchema);
module.exports = listproducts;