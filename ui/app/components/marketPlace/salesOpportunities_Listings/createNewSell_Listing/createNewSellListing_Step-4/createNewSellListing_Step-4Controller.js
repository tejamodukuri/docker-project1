App.controller('createNewSellListing_Step-4Controller', function ($scope, $rootScope, $location, $compile, $http) {



    $scope.step_3 = function () {
        window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-3";
    };
    // $scope.step_4 = function() {
    // window.location = "http://" + window.location.host + "/#/profile";
    // };


    if (true) {
        // localStorage.setItem("s1", JSON.stringify($scope.values));
        $scope.vall = JSON.parse(localStorage.getItem("listings"));
        $scope.val2 = JSON.parse(localStorage.getItem("product"));
        $scope.val = JSON.parse(localStorage.getItem("salesterms"));
        // $scope.step_2();
    }


    $scope.step_3 = function () {
        $scope.setEditValue();
        window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-3";
    };
    // $scope.step_4 = function () {
    //     window.location = "http://" + window.location.host + "/#/profile";
    // };
    $scope.step_1 = function () {
        $scope.setEditValue();
        window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-1";
    };
    $scope.step_2 = function () {
        $scope.setEditValue();
        window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-2";

    };
    $scope.list_dash = function () {
        $scope.setEditValue();
        window.location = "http://" + window.location.host + "/#/salesOpportunities_Listings";

    };


    if (true) {
        // localStorage.setItem("s1", JSON.stringify($scope.values));

        if (localStorage.getItem('listing') != "") {
            $scope.vall = JSON.parse(localStorage.getItem('listing'));
        }


        if (localStorage.getItem('product') != "") {
            $scope.val2 = JSON.parse(localStorage.getItem('product'));
        }



        if (localStorage.getItem('salesterms') != "") {
            $scope.val = JSON.parse(localStorage.getItem('salesterms'));
        }



        // $scope.vall = JSON.parse(localStorage.getItem("s1"));
        // $scope.val2 = JSON.parse(localStorage.getItem("s2"));
        // $scope.val = JSON.parse(localStorage.getItem("s3"));
        // $scope.step_2();
    }
    $scope.setEditValue = function () {
        localStorage.setItem("forPrepopEditable", true);

    }


    $scope.step_1 = function () {
        $location.path('/createNewSellListing_Step-1');
        console.log("clicked");
    }
    $scope.step_2 = function () {
        $location.path('/createNewSellListing_Step-2');
        console.log("clicked");
    }

    $scope.step_3 = function () {
        $location.path('/createNewSellListing_Step-3');
        console.log("clicked");
    }
    $scope.step_4 = function () {
        $location.path('/createNewSellListing_Step-4');
        console.log("clicked");
    }
   

    $scope.publish = function(){


                    console.log('in here');
                    var data = {};
                    data.listing = JSON.parse(localStorage.getItem('listing')) ? JSON.parse(localStorage.getItem('listing')) : {};
                    data.product = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : {};
                    data.salesterms = JSON.parse(localStorage.getItem('salesterms')) ? JSON.parse(localStorage.getItem('salesterms')) : {};
                    $http({
                        method: 'post',
                        url: 'http://localhost:6060/confirmation/create',
                        async:false,
                        data: data
                    }).then(function successCallback(response) {
                        console.log(response);
                        // localStorage.clear();
                        $location.path('/salesOpportunities_Listings');
                    });
                }


    $scope.step_profile = function () {


        console.log('in here');
        var data = {};
        data.listing = JSON.parse(localStorage.getItem('listing')) ? JSON.parse(localStorage.getItem('listing')) : {};
        data.product = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : {};
        data.salesterms = JSON.parse(localStorage.getItem('salesterms')) ? JSON.parse(localStorage.getItem('salesterms')) : {};
        $http({
            method: 'post',
            url: 'http://localhost:6060/confirmation/create',
            async: false,
            data: data
        }).then(function successCallback(response) {
            console.log(response);
            // localStorage.clear();
            $location.path('/salesOpportunities_Listings');
        });
        
    }
    


  


});




























// App.controller('createNewSellListing_Step-4Controller', function($scope,$rootScope,$compile,$http,$location) {


//     $scope.vall = {};
//     var data = {};
//     data.listing = JSON.parse(localStorage.getItem('listing')) ? JSON.parse(localStorage.getItem('listing')) : {};
//             data.product = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : {};
//             data.salesterms = JSON.parse(localStorage.getItem('salesterms')) ? JSON.parse(localStorage.getItem('salesterms')) : {};
//     $scope.vall = data.listing;
//     $scope.val2 = data.product;
//     $scope.val = data.salesterms;

//     // $scope.list_dash = function () {
//     //     $scope.setEditValue();
//     //     window.location = "http://" + window.location.host + "/#/salesOpportunities_Listings";

//     // };

//         $scope.publish = function(){


//             console.log('in here');
//             var data = {};
//             data.listing = JSON.parse(localStorage.getItem('listing')) ? JSON.parse(localStorage.getItem('listing')) : {};
//             data.product = JSON.parse(localStorage.getItem('product')) ? JSON.parse(localStorage.getItem('product')) : {};
//             data.salesterms = JSON.parse(localStorage.getItem('salesterms')) ? JSON.parse(localStorage.getItem('salesterms')) : {};
//             $http({
//                 method: 'post',
//                 url: 'http://localhost:6060/confirmation/create',
//                 async:false,
//                 data: data
//             }).then(function successCallback(response) {
//                 console.log(response);
//                 // localStorage.clear();
//                 $location.path('/salesOpportunities_Listings');
//             });
//         }

// $scope.step_1=function(){
//     $location.path('/createNewSellListing_Step-1');
//     console.log("clicked");
// }
// $scope.step_2=function(){
//     $location.path('/createNewSellListing_Step-2');
//     console.log("clicked");
// }

// $scope.step_3=function(){
//     $location.path('/createNewSellListing_Step-3');
//     console.log("clicked");
// }







// });
