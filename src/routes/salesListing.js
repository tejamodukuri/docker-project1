
var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var listings = require('../models/listings');

var salesListing = express.Router();
salesListing.use(bodyParser.json());

salesListing.route('/listing')

// 	.get(function (req, res, next) {
// 		var data = req.body;
// 		console.log("requestname:",data);
// })

salesListing.route('/listing/create')
	.post(function (req, res, next) {
		var data = req.body;
		var info = new listings(data);
		info.save(function (err, data) {
			if (err) {
				res.send(err + "not working");	
			} else {
				res.json({ 'status': true, 'message': 'success' });
			}
		});
	});

salesListing.route('/listing/templateName')

	.post(function (req, res, next) {
		
		listings.find({}, {requestName:1, _id:0},function (err,listings){
					if (err) throw err;
					res.send(listings );
				})
	});	

	salesListing.route('/listing/display')
	.get(function(req,res,next){

		listings.find({}, {requestName:1,expiryDate:1,},function (err,listings){
			if (err) throw err;
			res.send(listings );
		})

	})
	
module.exports = salesListing;