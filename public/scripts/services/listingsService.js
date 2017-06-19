myApp.service( 'ListingsService', function( $http ){
  var sv = this;

  sv.retrieveListings = function(){
    console.log( 'in service retrieveListings' );
    return $http({
      method: 'GET',
      url: '/listings'
    }).then( function( response ){
      console.log( 'in service, back from server with:', response );
      sv.data = response.data;
    }); //end http
  }; // end retrieveListings
}); // end service
