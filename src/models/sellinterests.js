var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var sellinterestSchema = new Schema({
	
	      userId: String,
		  zervPlatformAcctNumber:Number,
		  alertId:Number,
		  alertName:String,
		  transactionType:String,
		  compCase:Boolean,
		  compProjectile:Boolean,
		  compGunpowder:Boolean,
		  compPrimer:Boolean,
		  ammoHandgun:Boolean,
		  ammoShortgun:Boolean,
		  ammoRifle:Boolean,
		  ammoRimfire:Boolean,
		  brandWinchester:Boolean,
		  brandRemington:Boolean,
		  brandFederal:Boolean,
		  brandFiocchi:Boolean,
		  brandHornaday:Boolean,
		  brandX:Boolean,
		  brandY:Boolean,
		  brandZ:Boolean,
		  tpUsGovt:Boolean,
		  tpIntGovt:Boolean,
		  tpUsCommercial:Boolean,
		  tpIntCommercial:Boolean,
		  saletermImmediate:Boolean,
		  saletermLt30Days:Boolean,
		  saletermGt30Days:Boolean,



});
var sellinterest = mongoose.model('sellinterest', sellinterestSchema);

module.exports = sellinterest;
