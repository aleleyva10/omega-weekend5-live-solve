var express = require( 'express' );
var router = express.Router();

router.get( '/', function( req, res ){
  console.log( '/listings get call' );
  res.send( 'honk' );
}); // end /listings get

module.exports = router;
