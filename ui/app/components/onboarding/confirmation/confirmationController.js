// App.controller('confirmationController', function($scope,$rootScope,$compile,$http) {


// });
App.controller('confirmationController', function($scope,$rootScope,$compile,$http,$location) {
    var token = localStorage.getItem("token");
    $scope.values = {};
    $scope.myVar = false;
      $scope.toggle = function() {
          $scope.myVar = !$scope.myVar;
  
      };
      $scope.myVar1 = false;
      $scope.toggle1 = function() {
          $scope.myVar1 = !$scope.myVar1;
  
      };
      $scope.myVar2 = false;
      $scope.toggle2 = function() {
          $scope.myVar2 = !$scope.myVar2;
  
      };
      $scope.myVar4 = false;
      $scope.toggle4 = function() {
          $scope.myVar4 = !$scope.myVar4;
  
      };



      



    function populateCompanyDetails() {
        var token = localStorage.getItem("token");
        $http({
            method: 'get',
            url: $scope.apiHost+'/users/profile/details',
            // data: {
            //     'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            // },
            headers: {
                // 'Content-Type': 'application/json',
                'token': token,
                'userid': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            }
            

        }).then(function successCallback(response) {
            console.log(JSON.stringify(response.data));

            var populateObject = response.data.data;
            date = new Date(populateObject.expirationDate);

            year = date.getFullYear();
            month = date.getMonth()+1;
            dt = date.getDate();
            
            if (dt < 10) {
              dt = '0' + dt;
            }
            if (month < 10) {
              month = '0' + month;
            }
            
            $scope.enddate =  year+'-' + month + '-'+dt
            
            $scope.values.legalBusinessName = populateObject.legalBusinessName;
            $scope.values.doingBusinessAs = populateObject.doingBusinessAsName;
            $scope.values.userMessage = populateObject.corporateStructureDescription;
            $scope.values.mailingAddress = populateObject.mailingAddress.Line1;
            $scope.values.zip = populateObject.mailingAddress.Zip;
            $scope.values.state = populateObject.mailingAddress.stateorProvince;
            $scope.values.country = populateObject.mailingAddress.Country;
           
            $scope.values.pscCode = populateObject.pscCodes;
            $scope.values.duns = populateObject.duns;
            $scope.values.cage = populateObject.cage;
            $scope.values.companyDescription = populateObject.description;
            $scope.values.businessClassification = populateObject.businessClassification;
            $scope.values.logo = populateObject.logo;
            $scope.values.facebook = populateObject.fbAccount;
            $scope.values.instagram = populateObject.instagramAccount;
            $scope.values.twitter = populateObject.twitterAccount;
            $scope.values.accountType = populateObject.accountType;
            $scope.values.companyInformationEin = populateObject.eni;
            $scope.values.fflLicenseNumber = populateObject.fflLicenseNo;
            $scope.values.atfLicenseNumber = populateObject.atfLicenseNo;
            $scope.values.atarLicenseNumber = populateObject.itarLicenseNo;
            $scope.values.businessTaxLicenseNumber = populateObject.businessTaxLicenseNo;
            // $scope.values.companyDescription = populateObject.companyDescridescription;
            $scope.values.eitherPublicAddress= populateObject.etherPlatformAddress;
            $scope.values.zervPublicAddress  =  populateObject.zervPlatformAddress;
            $scope.values.alertName = populateObject.alertName;
            $scope.values.transactionType = "sell";//populateObject.transactionType;
            $scope.transactionTypeSelection=(populateObject.transactionType);

        });
    }

    if (typeof localStorage.userId != "undefined") {
        populateCompanyDetails();
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
             $scope.values.transactionType = "sell";
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
  