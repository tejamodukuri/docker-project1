var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var listproducts = require('../models/listproducts');

var productdetails = express.Router();
productdetails.use(bodyParser.json());

productdetails.route('/product')

.get(function (req, res, next) {

    res.send('Im working');

})


productdetails.route('/product/create')
	.post(function (req, res, next) {
		var data = req.body;
        var info = new listproducts(data);
        console.log (data);
		info.save(function (err, data) {
			if (err) {
				res.send(err + "not working");	
			} else {
                res.json({ 'status': true, 'message': 'success' });
                
			}
		});
	});

	
module.exports = productdetails;