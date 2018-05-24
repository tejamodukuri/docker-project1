var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var listings = require('../models/listings');
var listproducts = require('../models/listproducts');
var termssales = require('../models/termssales'); 
var bidPlace = require('../models/bidPlace');

var placeBid = express.Router();
placeBid.use(bodyParser.json());

placeBid.route('/')

.get(function (req, res, next) {

		listings.find({}, {expiryDate:1, },function (err,listings){
			if (err) throw err;
			res.send(listings );
        })	
        
        listproducts.find({}, {productType:1,pricePerUnit:1,quantity:1,totalPrice:1,},function (err,listproducts){
			if (err) throw err;
			res.send(listproducts );
        })	
        
        termssales.find({}, {paymentTimeFrame:1,paymentMethod:1,deliveryTerms:1,totalPrice:1,},function (err,termssales){
			if (err) throw err;
			res.send(termssales );
        })	
        
})


placeBid.route('/create')
	.post(function (req, res, next) {
		var data = req.body;
		console.log("bid data",data);
        var info = new bidPlace(data);
        console.log (data);
		info.save(function (err, data) {
			if (err) {
				res.send(err + "not working");	
			} else {
                res.json({ 'status': true, 'message': 'success' });
                
			}
		});
    });

    	
module.exports = placeBid;