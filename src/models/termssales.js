var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var termssalesSchema = new Schema({
    "productId": Number,
    "paymentTimeFrame":String,
    "paymentMethod":String,
    "deliveryTerms":String,
    "Marketplace":Boolean,
    "selectGroup":Boolean,
    "usGovernment":Boolean,
    "internationalGovernment":Boolean,
    "addtionalNotes":String
});
var termssalesModel = mongoose.model('termssales', termssalesSchema);

module.exports = termssalesModel;



