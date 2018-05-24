/*Server Code*/
var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = process.env.PORT || 6060;


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var url = 'mongodb://54.244.56.140/DATA';
mongoose.Promise = require('bluebird');
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("Connected correctly to server");
});


var routes = require('./routes/index');
var salesListing = require('./routes/salesListing.js');
var productdetails = require('./routes/productdetails.js');
var listingdashboard = require('./routes/listingdashboard.js');
var confirmation = require('./routes/confirmation.js');
var newBuyinterest = require('./routes/newBuyinterest');
var reviewBids = require('./routes/reviewBids');
var placeBid = require('./routes/placeBid');
// var termsOfSale = require('./routes/termsOfSale');


var app = express();
var cors = require('cors');


app.use(express.static(__dirname + '/'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");


    next();
});
app.use('/', routes);
app.use('/salesListing', salesListing);

app.use('/reviewBids', reviewBids);
app.use('/placeBid', placeBid);

app.use('/productdetails', productdetails );
app.use('/listingdashboard', listingdashboard );
app.use('/confirmation',confirmation);
app.use('/newBuyinterest', newBuyinterest);

app.use('/placeBid',placeBid );
// app.use('/termsOfSale',termsOfSale);

app.listen(port);
console.log('Magic happens on port ' + port);
