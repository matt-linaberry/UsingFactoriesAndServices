(function() {
    var customersFactory = function ($http) {

      var factory = {}; // this creates an object
        
      factory.getCustomers = function() {
          return $http.get('/customers');  // dont forget the promise.
      };
        
        factory.getCustomer = function(customerId) {
            return $http.get('/customers/' + customerId);
        };
      return factory;
    };
    
    customersFactory.$inject = ['$http'];
  
  // register this factory with angular
  angular.module('customersApp').factory('customersFactory', customersFactory);
}());  // doing this way at the end causes this factory to be invoked.