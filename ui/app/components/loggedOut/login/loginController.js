App.controller('loginController', function ($scope, $rootScope, $compile, $http,$location) {
    // var token = {"token" : localStorage.getItem("token") }
    console.log(JSON.stringify($rootScope.apiHost));

    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });
      
      $scope.remember=function(){
        localStorage.setItem("rme", JSON.stringify($scope.values));
        console.log(localStorage.getItem("rme"));
     }

    $scope.submit = function () {
    //   var formData={
    //       "userName" : $scope.values.userName,
    //       "password":$scope.values.password
    //   }

		// var data = JSON.stringify(formData);
		// $http({
		// 	method: 'post',
		// 	url: $rootScope.apiHost +'/users/login',
		// 	data: data,
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// }).then(function successCallback(response) {
        //     console.log(response.data);
        //     if (typeof(Storage) !== "undefined" && response.data.token != "") {
        //         localStorage.setItem("token", response.data.token);
        //         localStorage.setItem("userId", response.data.userId);
        //     }
        //     if(response.data.accStatus == "INACTIVE" || response.data.status == "" ){
                // $location.path('/mfaChooseMethod');
            // }
             $location.path("/mfaChooseMethod");
            //   window.location = $scope.hostname + "#/login";
		// }, function errorCallback(response) {
		// 	console.log(response.statusText);
		// });
    }
    // $scope.checkToken =function(){
    //     $http({
	// 		method: 'post',
	// 		url: $rootScope.apiHost+'/users/mfa/email',
	// 		data: "",
	// 		headers: {
    //             'Content-Type': 'application/json',
    //              'token' : localStorage.getItem("token")
	// 		}
	// 	}).then(function successCallback(response) {
    //         console.log(response.data);
	// 	}, function errorCallback(response) {
	// 		console.log(response.statusText);
	// 	});
    // }
});


