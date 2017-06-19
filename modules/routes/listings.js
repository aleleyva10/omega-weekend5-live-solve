var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var mongoose = require( 'mongoose' );

mongoose.connect( 'localhost:27017/realestate' );

var listingsSchema = new mongoose.Schema({
  city : String,
  cost : Number,
	rent : Number,
  sqft : Number
}); // end schema

var listings = mongoose.model( 'listings', listingsSchema );

router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

router.get( '/', function( req, res ){
  console.log( '/listings get call' );
  listings.find().then( function( results ){
    res.send( results );
  }); // end find
}); // end /listings get

module.exports = router;
