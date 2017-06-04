var app = angular.module('testapp', [])

app.controller('testcontroller', function($scope){
    

    var names = ["rob", "jayme", "john"]
    pickAName = function(){
        var randomNum = Math.random() * names.length
        var randomInt = Math.floor(randomNum)
        var pickedName = names[randomInt]
        return pickedName
    }

    $scope.testvar = pickAName()
})