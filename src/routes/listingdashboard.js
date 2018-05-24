var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var listings = require('../models/listings');
var listproducts = require('../models/listproducts');

var listingdashboard = express.Router();
listingdashboard.use(bodyParser.json());

listingdashboard.route('/dashboard')


//.get(function (req, res, next) {
  
   // listings.find({}, {expiryDate:1, _id:0},function (err,listings){
     //           if (err) throw err;
       //         res.send(listings );
         //   })

//})

.get(function (req, res, next) {
  
    listproducts.find({}, {productName:1, _id:0},function (err,listproducts){
                if (err) throw err;
                res.send(listproducts );
            })

});

// productname
// productprice
// product quantity
// product notes

	

	
module.exports = listingdashboard;