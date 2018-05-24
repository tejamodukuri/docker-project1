var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var buyinterest = require('../models/buyinterest');

var newBuyinterest = express.Router();
newBuyinterest.use(bodyParser.json());


newBuyinterest.route('/')

.get(function (req, res, next) {

    res.send('Im working');

})

newBuyinterest.route('/create')
	.post(function (req, res, next) {
		var data = req.body;
		console.log("route data",data);
        var info = new buyinterest(data);
        console.log (data);
		info.save(function (err, data) {
			if (err) {
				res.send(err + "not working");	
			} else {
                res.json({ 'status': true, 'message': 'success' });
                
			}
		});
    });

    	
module.exports = newBuyinterest;