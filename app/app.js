(function(){

	var app = angular.module('reddit', []);
	var config = {};

	app.controller('RedditController', function($scope, $http) {
		//$scope.myData = {};
		console.log("RedditController has been called.");

		var redditData = $http.get("http://www.reddit.com/top.json");

		redditData.success(function(data){
			console.log(data);
			//console.log( $scope.myData.fromServer = data.title;);
			$scope.elements = [];
			var dataset = data.data.children;
			for (var i = 0; i < dataset.length; i++) {
				$scope.elements.push(dataset[i].data);
			};
		});

		redditData.error(function(data) {
            alert("ajax error");
        });

	});

})();
