App.controller('createNewSellListing_Step-1Controller', function ($scope, $rootScope, $location, $compile, $http) {

    $scope.myVar = false;
    $scope.toggle = function () {
        $scope.myVar1 = false;
        $scope.myVar = !$scope.myVar;
        $scope.values.recurringRequest = false;
    };
    $scope.myVar1 = false;
    $scope.toggle1 = function () {
        $scope.myVar = false;
        $scope.myVar1 = !$scope.myVar1;
        $scope.values.oneTimeRequest = false;

    };
    $(document).ready(function () {
        $("#txtFromDate").datepicker({
            numberOfMonths: 1,
            onSelect: function (selected) {
                $("#txtToDate").datepicker("option", "minDate", selected)
            }
        });
        $("#txtToDate").datepicker({
            numberOfMonths: 1,
            onSelect: function (selected) {
                $("#txtFromDate").datepicker("option", "maxDate", selected)
            }
        });
    });
    $scope.step_2 = function () {
        // window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-2";
        $location.path('/createNewSellListing_Step-2');
    };

    $scope.onMyLoad = function () {
        if (localStorage.getItem('listing') != "") {
            $scope.values = JSON.parse(localStorage.getItem('listing'));
        }
    };

    if (localStorage.getItem("forPrepopEditable")) {
        $scope.onMyLoad();
    }


    $scope.save = function () {
        localStorage.setItem("listing", JSON.stringify($scope.values));
        console.log(localStorage.getItem("listing"));
        $location.path('/createNewSellListing_Step-2');
    }


    $scope.onSaveClose = function () {
        localStorage.setItem("listing", JSON.stringify($scope.values));
        $location.path('/salesOpportunities_Listings');
        console.log('listing info', localStorage.getItem("listing"));
    }


    $scope.onSaveNext = function () {
        localStorage.setItem("listing", JSON.stringify($scope.values));
        $location.path('/createNewSellListing_Step-2');
    }

    $scope.step_3 = function () {
        $location.path('/createNewSellListing_Step-3');
        console.log("clicked");
    }
    $scope.step_4 = function () {
        $location.path('/createNewSellListing_Step-4');
        console.log("clicked");
    }



});






// // App.controller('createNewSellListing_Step-1Controller', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {
// //     $scope.values = {};

// //     if(localStorage.getItem("listing")){
// //         $scope.values = JSON.parse(localStorage.getItem("listing"));
// //     }

// //     // $scope.onSaveClose = function () {

// //     //     console.log("asdasdadsad");

// //     //     var formdata = {
// //     //         "listName": $scope.values.listname,
// //     //         "publishDate": $scope.values.publishDate,
// //     //         "expiryDate": $scope.values.expirationDate,
// //     //         "oneTimeRequest": $scope.values.oneTimeRequest,
// //     //         "recurringRequest": $scope.values.recurringRequest,
// //     //         "autoRelist": $scope.values.autoReListIfFulfillment,
// //     //         "templateName": $scope.values.templateName,
// //     //         "requestName": $scope.values.requestName,
// //     //         "daily": $scope.values.Daily,
// //     //         "weekly": $scope.values.Weekly,
// //     //         "monthly": $scope.values.Monthly,
// //     //         "saveAsTemplate": $scope.values.saveAsTemplate
// //     //     }
// //     //     console.log("in here with form data", formdata);

// //     //     $http({
// //     //         method: 'post',
// //     //         url: 'http://localhost:6060/salesListing/listing/create',
// //     //         data: formdata
// //     //     }).then(function successCallback(response) {
// //     //         var responseObject = response.data;
// //     //         if(responseObject.status){
// //     //             if(localStorage.setItem('productId',responseObject.data.productId)){

// //     //             }
// //     //             $location.path('/salesOpportunities_Listings');
// //     //         }
// //     //     });
// //     //     console.log('info', $scope.values);
// //     // }

// //     $http({
// //         method: 'post',
// //         url: 'http://localhost:6060/salesListing/listing/templateName',
// //     }).then(function successCallback(response) {
// //         console.log("response name at UI", response.data);
// //         $scope.trial = response.data;
// //     });


// //     $scope.saveAsTemplate = function () {

// //         $http({
// //             method: 'post',
// //             url: 'http://localhost:6060/salesListing/listing/templateName',
// //         }).then(function successCallback(response) {
// //             console.log("response name at UI", response.data);
// //         });
// //         //console.log('info', $scope.values);

// //     }


// //     $scope.onSaveClose = function () {
// //         localStorage.setItem("listing", JSON.stringify($scope.values));
// //         $location.path('/createNewSellListing_Step-4');
// //         console.log('listing info', localStorage.getItem("listing"));
// //     }


// //     $scope.onSaveNext = function(){
// //         localStorage.setItem("listing", JSON.stringify($scope.values));
// //         $location.path('/createNewSellListing_Step-2');
// //     }

// // }]);