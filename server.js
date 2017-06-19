var express = require( 'express' );
var app = express();
var index = require( './modules/routes/index' );
var listings = require( './modules/routes/listings' );

app.use( express.static( 'public' ) );
app.use( '/', index );
app.use( '/listings', listings );

var port = process.env.PORT || 6680;

app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end server up
