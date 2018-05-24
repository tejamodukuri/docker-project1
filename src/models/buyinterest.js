
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var buyinterestSchema = new Schema({

	userId: String,
	zervPlatformAcctNumber: Number,
	alertId: Number,
	alertName:String,
	transactionType:String,
	compCase: Boolean,
	compProjectile: Boolean,
	compGunpowder: Boolean,
	compPrimer: Boolean,
	ammoHandgun: Boolean,
	ammoShortgun: Boolean,
	ammoRifle: Boolean,
	ammoRimfire: Boolean,
	brandWinchester: Boolean,
	brandRemington: Boolean,
	brandFederal: Boolean,
	brandFiocchi: Boolean,
	brandHornaday: Boolean,
	brandRemingtonTwo: Boolean,
	brandFederalTwo: Boolean,
	brandFiocchiTwo: Boolean,
	TpUsgovt: Boolean,
	TpIntgovt: Boolean,
	usCommercial: Boolean,
	internationalCommercial: Boolean, 
	buytermImmediate: Boolean,
	buytermLt30Days: Boolean,
	buytermGt30Days: Boolean


});

var buyinterest = mongoose.model('buyinterest', buyinterestSchema);

module.exports = buyinterest;
