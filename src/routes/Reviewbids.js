var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var listings = require('../models/listings');
var listproducts = require('../models/listproducts');
var termssales = require('../models/termssales');

var reviewBids = express.Router();
reviewBids.use(bodyParser.json());

reviewBids.route('/bid')
.get(function (req, res, next) {
        //  listproducts.find({}, {productType:1,pricePerUnit:1,quantity:1},function (err,listproducts){
         termssales.find({}, { paymentTimeFrame: 1, paymentMethod: 1, deliveryTerms: 1 }, function (err, termssales) {
			if (err) throw err;
			res.send(termssales);
        })
})		


	reviewBids.route('/bid')	
	.post(function (req, res) {

		var data = req.body;
		var info1 = new listproducts({
 
			productType:data.productType,
			pricePerUnit:data.pricePerUnit,
			quantity:data.quantity
})
		
		info1.save(function (err, users) {
			if (err) {
				error = err;	
			}
		})
		var info2 = new termssales({
			 
			meFrame:data.paymentTimeFrame,
			paymentMethod: data.paymentMethod,
            deliveryTerms:data.deliveryTerms
		})
		info2.save(function (err, users) {
			if (err) {
				error = err;	
			}
		}) 
		console.log(info1,info2 + "working")
		res.json(data);
	});



module.exports = reviewBids;