var app=angular.module('myApp',[]);

// ^ dependency injection in angular
app.controller('myController', ['$scope','$http', function($scope,$http){
	$scope.words=[];
	$scope.status="";
	$scope.newWord="";
	
	$scope.getWords= function(){
		$http.get('http://localhost/words'). 
		success( function (data, status, headers, config){
			$scope.words=data;
		}).
		error(function (data, status, headers, config){
			$scope.status=data;
		});
	};
	
	$scope.addWord=function(){
		
	}
}])