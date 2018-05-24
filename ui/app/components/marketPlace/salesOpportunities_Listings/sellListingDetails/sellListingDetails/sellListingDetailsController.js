// App.controller('sellListingDetailsController', function($scope,$rootScope,$compile,$http) {
// 	$scope.bidList = {};
// $scope.getBidList = function () {
// 		$http({
// 			method: 'get',
// 			url: "http://localhost:6060/reviewBids/bid",
// 			headers: {
// 				'Content-Type': 'application/json'
// 			}
// 		}).then(function successCallback(response) {
// 			console.log(JSON.stringify(response.data));
// 			$scope.bidList = response.data;

// 		}, function errorCallback(response) {
// 		});
// 	}
//  	$scope.getBidList(); 
App.controller('sellListingDetailsController', function ($scope, $rootScope, $compile, $http) {

    console.log("sell");
    $scope.price1 = " ";
    $scope.brass1 = " ";
    $scope.quantity1 = " ";
    $scope.timeofsale1 = " ";
    $scope.zerv1 = " ";
    $scope.days1 = " ";
    $scope.price2 = " ";
    $scope.brass2 = " ";
    $scope.quantity2 = " ";
    $scope.timeofsale2 = " ";
    $scope.zerv2 = " ";
    $scope.days2 = " ";
    $scope.data = function () {
        $scope.price1 = "60 ";
        $scope.brass1 = "gun ";
        $scope.quantity1 = "350";
        $scope.timeofsale1 = " may1 10:45 am";
        $scope.zerv1 = "cash";
        $scope.days1 = "250 days ";
        console.log("in data");
        $scope.price2 = "70";
        $scope.brass2 = "gun ";
        $scope.quantity2 = "320 ";
        $scope.timeofsale2 = "april5 10:45 am";
        $scope.zerv2 = " Zerv tokens";
        $scope.days2 = "350 days ";
        console.log("in data");
    }
    $scope.data1 = function () {
        $scope.price1 = "50 ";
        $scope.brass1 = "bullets ";
        $scope.quantity1 = "4000";
        $scope.timeofsale1 = "may2 5:30 pm ";
        $scope.zerv1 = "cash";
        $scope.days1 = "250 days ";
        console.log("in data");
        $scope.price2 = "45";
        $scope.brass2 = "bullets";
        $scope.quantity2 = "340 ";
        $scope.timeofsale2 = "may1 5:30 pm ";
        $scope.zerv2 = "zerv tokens";
        $scope.days2 = "350 days ";
        console.log("in data");
    }
    $scope.data2 = function () {
        $scope.price1 = "30  ";
        $scope.brass1 = "pistol ";
        $scope.quantity1 = "500 ";
        $scope.timeofsale1 = "may5 4:30 pm";
        $scope.zerv1 = " zerv tokens";
        $scope.days1 = "250 days ";
        console.log("in data");
        $scope.price2 = "50 ";
        $scope.brass2 = "pistol ";
        $scope.quantity2 = "350 ";
        $scope.timeofsale2 = " may2 4:30 pm";
        $scope.zerv2 = "zerv tokens";
        $scope.days2 = "200 days ";
        console.log("in data");
    }
    $scope.data3 = function () {
        $scope.price1 = "20 ";
        $scope.brass1 = "grenades ";
        $scope.quantity1 = "350";
        $scope.timeofsale1 = "may5 11:00 am";
        $scope.zerv1 = "zerv tokens";
        $scope.days1 = "250 days ";
        console.log("in data");
        $scope.price2 = "25";
        $scope.brass2 = "grenades";
        $scope.quantity2 = "350";
        $scope.timeofsale2 = "may11:00 ";
        $scope.zerv2 = "zerv tokens";
        $scope.days2 = "350 days ";
        console.log("in data");

    }
    $scope.data4 = function () {
        $scope.price1 = "90 ";
        $scope.brass1 = "sniper";
        $scope.quantity1 = "100";
        $scope.timeofsale1 = "may6 10:30 am";
        $scope.zerv1 = "zevr tokens ";
        $scope.days1 = "50 days ";
        console.log("in data");
        $scope.price2 = "20 ";
        $scope.brass2 = "sniper";
        $scope.quantity2 = "50 ";
        $scope.timeofsale2 = "may6 10:30 am ";
        $scope.zerv2 = "zerv tokens ";
        $scope.days2 = "60 days ";
        console.log("in data");

    }
});


