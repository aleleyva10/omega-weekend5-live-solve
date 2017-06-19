var myApp = angular.module( 'myApp', [] );

myApp.controller( 'ListingsController', function( ListingsService ){
  var vm = this;

  vm.getListings = function(){
    console.log( 'in controller getListings' );
    ListingsService.retrieveListings().then( function(){
      vm.data = ListingsService.data;
      console.log( 'in controller:', vm.data );
    }); // end service function call
  };//end getListings

}); // end controller
