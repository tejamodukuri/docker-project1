App.controller('tokenAccessController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {

    $scope.values = {};
    var token = localStorage.getItem("token");
    $scope.onSaveClose = function () {  

        // console.log('submitted data'+ $scope.values );

        var formdata = {
            "userId" :localStorage.getItem("userId"),
            "etherPlatformAddress":  $scope.values.eitherPublicAddress,
			"zervPlatformAddress": $scope.values.zervPublicAddress  
        };

        // console.log("in here with form data", formdata);

        var data = JSON.stringify(formdata);
        $http({
            method: 'put',
            url: $rootScope.apiHost+'/users/Profile/token',
            data: data,
            headers : {
                'token' : token
            }
        }).then(function successCallback(response) {
            console.log(response.data);
            $location.path('/confirmation');
        }, function errorCallback(response) {
			console.log(response.statusText);
		})
    }
    function populateProfileDetails() {
        $http({
            method: 'get',
            url: $rootScope.apiHost+'/users/profile/details',
            // data: {
            //     'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            // },
            headers: {
                'Content-Type': 'application/json',
                'token': token,
                'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            }
        }).then(function successCallback(response) {

            var populateObject = response.data.data;
            // $scope.values.eitherPublicAddress= populateObject.etherPlatformAddress,
            $scope.values.zervPublicAddress  =  populateObject.zervPlatformAddress
        });
    }

    if (typeof localStorage.userId != "undefined") {
        populateProfileDetails();
    }

    $scope.step_1=function(){
        $location.path('/externalSystems');
        console.log("clicked");
    }
    $scope.step_2=function(){
        $location.path('/companyInfo');
        console.log("clicked");
    }
    $scope.step_3=function(){
        $location.path('/profileDetails');
        console.log("clicked");
    }
    $scope.step_4=function(){
        $location.path('/addInterests');
        console.log("clicked");
    }
    $scope.step_5=function(){
        $location.path('/tokenAccess');
        console.log("clicked");
    }
    $scope.step_6=function(){
        $location.path('/confirmation');
        console.log("clicked");
    }
    


}]);
