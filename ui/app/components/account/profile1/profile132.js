App.controller('profileController',['$scope', '$rootScope', '$compile', '$http', function ($scope, $rootScope, $compile, $http) {
    $scope.hostname = 'http://localhost:4020/';
    $scope.values = {};
    $scope.values.email_address= "";
    $scope.values.companylogo= "";
    $scope.values.legalBusinessName = "";
    $scope.values.corporateStructureDescription = "";
    $scope.values.licences = {
        'fflLicense': false,
        'atfLicence': false,
        'itarLicence': false,
        'businessTaxLicence': false
    };
    
    fetch_interest();
    function fetch_interest() {
        var token = localStorage.getItem("token");
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/intake',
            data: { 
                'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            },
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(function successCallback(response) {

            
            
            console.log(response);
            if (response.status) {
                var details = response.data;
                var info = details.data;
                $scope.values.product1 = info;
            }
        });
    }



    fetch_info();
    function fetch_info() {
        var token = localStorage.getItem("token");
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/profile/details',
            data: { 
                'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            },
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        }).then(function successCallback(response) {

            
            
            console.log(response);
            if (response.status) {
                var details = response.data;
                var info = details.data;
                $scope.values.email_Address = info.emailId;
                $scope.values.firstName = info.electronicBusinessPoc.firstName;
                $scope.values.lastName = info.electronicBusinessPoc.lastName;
                $scope.values.companylogo = 'http://localhost:6060/'+info.logo;
                $('#companyLogo').attr('src',$scope.values.companylogo);
                $scope.values.legalBusinessName = info.legalBusinessName;
                $scope.values.corporateStructureDescription = info.corporateStructureDescription;
                $scope.values.phone = info.phoneNumber;
                $scope.values.mail_address = info.mailingAddress.Line1;
                $scope.values.zip = info.mailingAddress.Zip;
                $scope.values.state = info.mailingAddress.stateorProvince;
                $scope.values.city = info.mailingAddress.City;
                $scope.values.country = info.mailingAddress.Country;
                $scope.values.instagram = info.instagramAccount;
                $scope.values.twitter = info.twitterAccount;
                $scope.values.facebook = info.fbAccount;
                $scope.values.ffl_licence = info.fflLicenseNo;
                $scope.values.atfLicenseNo = info.atfLicenseNo;
                $scope.values.itarLicenseNo = info.itarLicenseNo;
                $scope.values.businessTaxLicenseNo = info.businessTaxLicenseNo;
                

                if(typeof info.ffl_license_no != "undefined" && info.ffl_license_no != ''){
                    $scope.values.licences.fflLicense = true;
                }

                if(typeof info.atf_license_no != "undefined" && info.atf_license_no != ''){
                    $scope.values.licences.atfLicence = true;
                }

                if(typeof info.itar_license_no != "undefined" && info.itar_license_no != ''){
                    $scope.values.licences.itarLicence = true;
                }

                if(typeof info.businesstax_license_no != "undefined" && info.businesstax_license_no != ''){
                    $scope.values.licences.businessTaxLicence = true;
                }
            }
        });
    }

    // if (typeof localStorage.userId != "undefined") {
    //     fetch_info();
    //     console.log("Getting response");
    // }

}]);
