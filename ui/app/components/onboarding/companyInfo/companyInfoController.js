App.controller('companyInfoController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {
    $scope.values = {};
    $scope.onSaveClose = function (redirectTo) {
        // console.log(redirectTo);
        // var mailingAddress = {
        //     "Line1": $scope.values.mailingAddress,
        //     "Zip": $scope.values.zip,
        //     "stateorProvince": $scope.values.state,
        //     "City": "",
        //     "Country": $scope.values.country,
        // };
        // var formdata = {
        //     "legalBusinessName": $scope.values.legalBusinessName,
        //     "doingBusinessAsName": $scope.values.doingBusinessAs,
        //     "corporateStructureDescription": $scope.values.userMessage,
        //     "mailingAddress" : mailingAddress,
        //     "expirationDate": new Date($scope.enddate) ,
        //     "pscCodes": $scope.values.pscCode,
        //     "duns": $scope.values.duns,
        //     "cage": $scope.values.cage
        // }

        // var apiData = {
        //     info: formdata,
        //     userId: (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
        // };
        // var token = localStorage.getItem("token");

        // $http({
        //     method: 'post',
        //     url: $scope.apiHost+'/users/Profile/company',
        //     data: apiData,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'token': token
        //     }
        // }).then(function successCallback(response) {
        //     console.log(response);
        //    
        // }).catch(function (error) {
        //     console.log(error);
        // });
        $location.path('/' + redirectTo);

    }


    // function populateCompanyDetails() {
    //     var token = localStorage.getItem("token");
    //     $http({
    //         method: 'get',
    //         url: $scope.apiHost+'/users/profile/details',
    //         // data: {
    //         //     'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
    //         // },
    //         headers: {
    //             // 'Content-Type': 'application/json',
    //             'token': token,
    //             'userid': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
    //         }
            

    //     }).then(function successCallback(response) {
    //         console.log(JSON.stringify(response.data));

    //         var populateObject = response.data.data;
    //         date = new Date(populateObject.expirationDate);

    //         year = date.getFullYear();
    //         month = date.getMonth()+1;
    //         dt = date.getDate();
            
    //         if (dt < 10) {
    //           dt = '0' + dt;
    //         }
    //         if (month < 10) {
    //           month = '0' + month;
    //         }
            
    //         $scope.enddate =  year+'-' + month + '-'+dt
            
    //         $scope.values.legalBusinessName = populateObject.legalBusinessName;
    //         $scope.values.doingBusinessAs = populateObject.doingBusinessAsName;
    //         $scope.values.userMessage = populateObject.corporateStructureDescription;
    //         $scope.values.mailingAddress = populateObject.mailingAddress.Line1;
    //         $scope.values.zip = populateObject.mailingAddress.Zip;
    //         $scope.values.state = populateObject.mailingAddress.stateorProvince;
    //         $scope.values.country = populateObject.mailingAddress.Country;
           
    //         $scope.values.pscCode = populateObject.pscCodes;
    //         $scope.values.duns = populateObject.duns;
    //         $scope.values.cage = populateObject.cage;

    //     });
    // }

    // if (typeof localStorage.userId != "undefined") {
    //     populateCompanyDetails();
    // }

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
