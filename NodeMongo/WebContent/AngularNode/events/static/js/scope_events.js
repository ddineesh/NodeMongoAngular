angular.module('myApp',[]).

controller('Characters', function($scope){
	$scope.names = ['Frodo', 'Aragorn', 'Legolas', 'Gimli'];
	$scope.currentName=$scope.names[0];
	
	$scope.changeName= function(){
		$scope.currentName= this.name;
		$scope. $broadcast('CharacterChanged', this.name);
	};
	
	$scope.$on('CharacterDeleted', function(event, removeName){
		var i = $scope.names.indexof(removeName);
		$scope.names.splice(i,1);
		$scope.currentName= $scope.names[0];
		$scope.$broadcast('CharacterChanged', $scope.currentName);
	});
});
