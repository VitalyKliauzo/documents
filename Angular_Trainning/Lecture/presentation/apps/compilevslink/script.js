angular.module('compileVSlink', [])
  .controller('Controller', ['$scope', function($scope) {
    
  }])
  .directive('myCustomer', function() {
    return {
      compile: function(elem, att){
        console.log('compile');
        return function link(scope, elem, attr){
            console.log('link');
          }
      }
    };
  });