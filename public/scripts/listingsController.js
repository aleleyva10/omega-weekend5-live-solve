var myApp = angular.module( 'myApp', [] );

var ALL = 0;
var RENT = 1;
var SALE = 2;


myApp.controller( 'ListingsController', function( ListingsService ){
  var vm = this;
  vm.all =[];
  vm.rent = [];
  vm.sale = [];

  vm.getListings = function(){
    console.log( 'in controller getListings' );
    ListingsService.retrieveListings().then( function(){
      vm.data = ListingsService.data;
      vm.all = vm.data;
      for (var i = 0; i < vm.all.length; i++) {
        if( vm.all[i].cost ){
          vm.sale.push( vm.all[i] );
        }
        else{
          vm.rent.push( vm.all[i] );
        }
      }; // end for
      console.log( 'in controller:', vm.data );
    }); // end service function call
  };//end getListings

  vm.setShow = function( showType ){
    console.log( 'in setShow:', showType );
    if( showType == ALL ){
      vm.data = vm.all;
    }
    else if( showType == RENT ){
      vm.data = vm.rent;
    }
    else if( showType == SALE ){
      vm.data = vm.sale;
    }
    else{
      showType = 0;
    }
  }; // end setShow

}); // end controller
