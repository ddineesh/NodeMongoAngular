angular.module('firstApp',[]).
controller('radioController', function($scope){
	$scope.colors=['red','green','blue'];
	$scope.style = {
		"backgroud-color": "blue",
		"display": "inline-block",
		"height": "100px",
		"width": "100px"
	};
}).

controller('selectController', function($scope){
	$scope.cameras= [
		{make: " Canon", model: "70D",mp: "20"},
		{make: " Canon", model: "60D",mp: "16"},
		{make: " Nikon", model: "370D",mp: "25"},
		{make: " Nikon", model: "470D",mp: "30"},
		];
	$scope: cameraObj=$scope.cameras[0];
	$scope: cameraName="Canon";
}).

controller('eventsController', function($scope){
	$scope.keyInfo={};
	$scope.mouseInfo={};
	$scope.keyStroke=function(event){
		$scope.keyInfo.keycode=event.keyCode;
	};
	
	$scope.mouseClick= function(event){
		$scope.mouseInfo.clientX=event.clientX;
		$scope.mouseInfo.clientY=event.clientY;
		$scope.mouseInfo.screenX=event.screenX;
		$scope.mouseInfo.screenY=event.screenY;
	};
});