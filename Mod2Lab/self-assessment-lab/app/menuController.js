app.controller('menuController', [
	'$scope',
	function($scope){
		$scope.model = {
			title: 'Our Menu',
			mainDish: {
				name: "None Selected",
				price: "$0.00"
			}};
		$scope.changeMainDish = function(item){
			$scope.model.mainDish = item;
		};
		$scope.$watch('model.mainDish', function(newValue, oldValue){
			console.log('from: ' + oldValue + ' to ' + newValue)
			if( newValue == 'BBQ'){
				alert('You have selected the BBQ Chicken Pizza!');
			}
		})
	}]);