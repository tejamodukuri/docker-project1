App.controller('accountInformationController', function ($scope, $rootScope, $compile, $http,$location) {

  $scope.ph_numbr = /^\+?\d{3}[- ]?\d{3}[- ]?\d{4}$/;
  $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	$scope.values={};
	$scope.values.email="john@gmail.com";
  $scope.hostname = "http://" + window.location.host;
  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $scope.submit = function () {
    //  var formData ={
		// 	 "userName" :$scope.values.email ,
		// 	 "password" :$scope.values.accInfoPassword ,
		// 	 "phoneCode":$scope.values.phoneCode,
		// 	 "phoneNumber": $scope.values.phonenumber
		//  }; 
	   	
		// var data = JSON.stringify(formData);
		// $http({
		// 	method: 'post',
		// 	url: $rootScope.apiHost + 'users/account',
		// 	data: data,
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// }).then(function successCallback(response) {
		// 	console.log(JSON.stringify(response));
			window.location = $scope.hostname + "#/login";
		// }, function errorCallback(response) {
		// 	console.log(response.statusText);
		// });
	}

	function populateCompanyDetails() {
		var token = localStorage.getItem("token");
		$http({
				method: 'get',
				url: $scope.apiHost+'/users/profile/details',
				headers: {
						'token': token,
						'userid': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
				}
				

		}).then(function successCallback(response) {
				console.log(JSON.stringify(response.data));

				var populateObject = response.data.data;
				$scope.values.email= populateObject.emailId;

		});
}

if (typeof localStorage.userId != "undefined") {
		populateCompanyDetails();
}

});

