App.controller('addInterestsController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {
    $scope.values = {};
    var token = localStorage.getItem("token");
    $scope.selectAll_type=function(type){
				
        if(type == "PurCompType"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesComponentsSelectAll;
            $scope.values.addInterestsPurchasingPreferencesComponentsCase=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesComponentsProjectile=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesComponentsGunpowder=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesComponentsPrimer=chngChkVal;
        }
        if(type == "PurAmmoType"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesAmmoTypeSelectAll;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeHandgun=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeShotgun=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeRifle=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeRimfire=chngChkVal;
        }
        if(type == "PurBrand"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesBrandSelectAll;
            $scope.values.addInterestsPurchasingPreferencesBrandWinchester=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesBrandRemington=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesBrandFederal=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesBrandFiocchi=chngChkVal;
            
        }if(type == "PurTradePart"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesTradePartnersSelectAll;
            $scope.values.addInterestsPurchasingPreferencesTradePartnersUsGovernment=chngChkVal;
             $scope.values.addInterestsPurchasingPreferencesTradePartnersInternational=chngChkVal;
			 
        }if(type == "PurTimeOfSale"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesTermsOfSaleSelectAll;
            $scope.values.addInterestsPurchasingPreferencesTermsOfSaleImmediate=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesTermsOfSaleWithinThirtyDays=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=chngChkVal;
        }       
    }
    $scope.values = {};
    $scope.values.transactionType = 'buy';

    $scope.transactionTypeSelection = function(input){
        if(input == 'buy'){
            $scope.values.transactionType = "buy";
            $scope.buyStatus = "active"
            $scope.sellStatus = ""
        }
        else if(input == 'sell'){
            $scope.values.transactionType = "sell";
            $scope.sellStatus = "active"
            $scope.buyStatus = ""
        }
    }
    // $scope.values.addInterestsPurchasingPreferencesComponentsCase =true;
    $scope.onSaveClose = function () {  
      
        console.log('TRANS TYPE',$scope.values.transactionType);

        var formdata = {
            "userId" :localStorage.getItem("userId"),
            "alertName": $scope.values.alertName,
            "transactionType":$scope.values.transactionType,
			"compCase":$scope.values.addInterestsPurchasingPreferencesComponentsCase,
			"compProjectile":$scope.values.addInterestsPurchasingPreferencesComponentsProjectile,
			"compGunpowder":$scope.values.addInterestsPurchasingPreferencesComponentsGunpowder,
			"compPrimer":$scope.values.addInterestsPurchasingPreferencesComponentsPrimer,
			"ammoHandgun":$scope.values.addInterestsPurchasingPreferencesAmmoTypeHandgun,
			"ammoShortgun":$scope.values.addInterestsPurchasingPreferencesAmmoTypeShotgun,
			"ammoRifle":$scope.values.addInterestsPurchasingPreferencesAmmoTypeRifle,
			"ammoRimfire":$scope.values.addInterestsPurchasingPreferencesAmmoTypeRimfire,
			"brandWinchester":$scope.values.addInterestsPurchasingPreferencesBrandWinchester,
			"brandRemington":$scope.values.addInterestsPurchasingPreferencesBrandRemington,
			"brandFederal":$scope.values.addInterestsPurchasingPreferencesBrandFederal,
			"brandFiocchi":$scope.values.addInterestsPurchasingPreferencesBrandFiocchi,
			"TpUsgovt":$scope.values.addInterestsPurchasingPreferencesTradePartnersUsGovernment,
			"TpIntgovt":$scope.values.addInterestsPurchasingPreferencesTradePartnersInternational,
			"saletermImmediate":$scope.values.addInterestsPurchasingPreferencesTermsOfSaleImmediate,
			"saletermLt30Days":$scope.values.addInterestsPurchasingPreferencesTermsOfSaleWithinThirtyDays,
			"saletermGt30Days":$scope.values.addInterestsPurchasingPreferencesTermsOfSaleThirtyDaysOrMore

        }


        var data = JSON.stringify(formdata);
        $http({
            method: 'post',
            url: $rootScope.apiHost+'/users/profile/intrests',
            data: data,
            headers: {
                'token': token
            },
        }).then(function successCallback(response) {
            console.log(response);
            $location.path('/tokenAccess');
        });
    }
    function populateProfileDetails() {
        $http({
            method: 'get',
            url: $rootScope.apiHost +'/users/profile/intrests',
            headers: {
                'Content-Type': 'application/json',
                'token': token,
                'userid': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            }
        }).then(function successCallback(response) {

            var populateObject = response.data.data;
             $scope.values.alertName = populateObject.alertName;
             $scope.values.transactionType = "sell";//populateObject.transactionType;
             $scope.transactionTypeSelection (populateObject.transactionType);
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
