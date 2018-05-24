App.controller('externalSystemsController', function ($scope, $rootScope, $compile, $http) {
	$scope.values = {};
	var token = localStorage.getItem("token");
	console.log($scope.apiHost);
	$scope.plusIcon = "fa fa-plus";
	$scope.colorSamAccount = "default";
	$scope.connectAccount = function (duns) {
		// var url = 'https://api.data.gov:443/sam/v1/registrations/' + duns + '?api_key=fXnWNftp2tniBzwxcht5zzVnSOks3NPdplQSLNr3';

		// // 'https://api.data.gov:443/sam/v1/registrations/0636039550000?api_key=fXnWNftp2tniBzwxcht5zzVnSOks3NPdplQSLNr3'
		// // 0636039550000
 
		// $http({
		// 	method: 'get',
		// 	url: url,
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// }).then(function successCallback(response) {
		// 	console.log(response.data);
		// 	if (response.data != "undefined") {
		// 		var data = {};
		// 		var data = $scope.createCustomSamData(response.data.sam_data.registration);
		// 		data.userId = localStorage.getItem("userId");
		// 		data.samsDetails = response.data;
		// 		console.log(JSON.stringify(data));
		// 		$http({
		// 			method: 'put',
		// 			data: data,
		// 			url: $scope.apiHost+'/users/account',
		// 			headers: {
		// 				'Content-Type': 'application/json'
		// 			}
		// 		}).then(function successCallback(response) {
		// 			// console.log(JSON.stringify(response));
		// 			if (response.config.data.duns == data.duns) {

						$scope.plusIcon = "fa fa-check";
						$scope.colorSamAccount = "success";
		// 			}
		// 		}, function errorCallback(response) {
		// 			callback(false);
		// 		});
		// 	}
		// }, function errorCallback(response) {
		// 	console.log(response.statusText);
		// 	$('#myModal').modal({ show: false });
		// });

	};
	var customSamData;
	$scope.createCustomSamData = function (samData) {
		customSamData = {};
		customSamData.businessTypes = samData.businessTypes;
		customSamData.duns = samData.duns;
		customSamData.duns4 = samData.dunsPlus4;
		customSamData.cage = samData.cage;
		customSamData.purposeOfRegistration = samData.purposeOfRegistration;
		customSamData.registrationDate = samData.registrationDate;
		customSamData.expirationDate = samData.expirationDate;
		customSamData.activationDate = samData.activationDate;
		customSamData.lastUpdatedDate = samData.lastUpdateDate;
		customSamData.legalBusinessName = samData.legalBusinessName;
		customSamData.doingBusinessAsName = samData.doingBusinessAsName;
		customSamData.companyDivision = samData.companyDivision;
		customSamData.samAddress = samData.samAddress;
		customSamData.congressionalDistrict = samData.congressionalDistrict;
		customSamData.businessStartDate = samData.businessStartDate;
		customSamData.fiscalYearCloseDay = samData.fiscalYearEndCloseDate;
		customSamData.corporateUrl = samData.corporateUrl;
		customSamData.corporateStructureCode = samData.corporateStructureCode;
		customSamData.mailingAddress = samData.mailingAddress;
		customSamData.stateOfIncorporation = samData.stateOfIncorporation;
		customSamData.countryOfIncorporation = samData.countryOfIncorporation;
		customSamData.altGovtBusinessPoc = samData.altGovtBusinessPoc;
		customSamData.electronicBusinessPoc = samData.electronicBusinessPoc;
		customSamData.altElectronicBusinessPoc = samData.altElectronicBusinessPoc;
		customSamData.creditCardUsage = samData.creditCardUsage;
		customSamData.hasDelinquentFederalDebt = samData.hasDelinquentFederalDebt;
		customSamData.hasKnownExclusion = samData.hasKnownExclusion;
		customSamData.statusMessage = samData.statusMessage;
		customSamData.disasterRelief = samData.disasterRelief;
		return customSamData;
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
			console.log(JSON.stringify(populateObject.duns));
			if (populateObject.duns != "undefined") {

				$scope.plusIcon = "fa fa-check";
				$scope.colorSamAccount = "success";
			} else {

				$scope.plusIcon = "fa fa-plus";
				$scope.colorSamAccount = "default";
			}
			// $scope.values.eitherPublicAddress= populateObject.etherPlatformAddress,
			// $scope.values.zervPublicAddress  =  populateObject.zervPlatformAddress
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
    

});
