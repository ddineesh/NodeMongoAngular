var firstApp= angular.module('firstApp',[]);

firstApp.controller('FirstController', function($scope){
	$scope.first='First Name',
	$scope.last='Last Name',
	$scope.heading='Message: ';
	
	$scope.updateMessage= function(){
		$scope.message= 'Hello '+ $scope.first + ' ' + $scope.last +'!!!!!';
	};
});