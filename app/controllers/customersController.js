(function() {
    
    var CustomersController = function ($scope, $log, customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.customers = [];
        $scope.appSettings = appSettings;
        function init() {
            customersFactory.getCustomers()
            .success(function(customers) {
                $scope.customers = customers;
            });
        }
        init(); /// this will be called first!
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
    };
    
    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());