var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var listings = require('../models/listings');
var listproducts = require('../models/listproducts');
var termssales = require('../models/termssales');
var confirmation = express.Router();



confirmation.route('/create')
    .post(function (req, res, next) {



        console.log("In here");
        var data = req.body;

        var listingObject = data.listing;
        var productObject = data.product;
        
        var termsObject = data.salesterms;
        console.log("asdasda",termsObject);
        var confirm = data.confirm;

        listingObject.userId = 300;


        var linfo = new listings(listingObject);
        linfo.save(function (err, data) {
            if (err) {
                return res.send(err + "not working");
            } else {
                productObject.productId = data.productId;
                var pinfo = new listproducts(productObject);
                pinfo.save(function (err, data) {
                    if (err) {
                        return res.send(err + "not working");
                    } else {
                        termsObject.productId = data.productId;
                        var tinfo = new termssales(termsObject);
                        tinfo.save(function (err, data) {
                            if (err) {
                                return res.send(err + "not working");
                            } else {
                                return res.json({ 'status': true, 'message': 'success' });
                            }
                        });
                    }
                });

            }
        });

    });


confirmation.route('/fetchall').get(function(req,res,next){
    var products = [];
    var db = mongoose.connection;

    listings.aggregate([
        { $lookup:
            {
                from: 'listproducts',
                localField: 'productId',
                foreignField: 'productId',
                as: 'list-products'
            }
          
        },
        { $lookup:
            {
                from: 'termssales',
                localField: 'productId',
                foreignField: 'productId',
                as: 'list-terms'
            }
          
        },
        { 
            $match: {
                "productId":100
                } 
        }
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
        aggregate.match({ listproducts: { $in: [ "listing", "productlist","termssales" ] } });
    });

    listings.find({},function (err, data) {
        if (err) {
            return res.send(err + "not working");
        } else {
            for(var info of data){
                products.push(info);
            }
            appendstep2(products);
        }
    });

    
    // function appendstep2(products){
    //     // return res.send(products);
    //     for(var prod of products){
    //         prod.lp = "sadsad";
    //         console.log('ss',prod);
    //         // listproducts.find({"productId":prod.productId},function (err, pdata) {
    //         //     console.log('ss',pdata[0]);
    //         //     prod.lp = pdata[0];                
    //         //     // if (err) {
    //         //     //     return res.send(err + "not working");
    //         //     // } else {
    //         //     //     for(var info of pdata[0]){
    //         //     //         push(info);
    //         //     //     }
    //         //     //     appendstep2(products);
    //         //     // }
    //         // });
    //     }

    //     return res.send(products);
        
    // }
    

    

    //     termssales.find({"productId":prod.productId},function (err, data) {
    //         if (err) {
    //             return res.send(err + "not working");
    //         } else {

    //             for(var pkey in data){
    //                 prod.pkey = data[pkey];
    //             }
                
    //         }
    //     });

    // }

    // return res.send({
    //     'status':true,
    //     'products': products
    // });
});


module.exports = confirmation;






