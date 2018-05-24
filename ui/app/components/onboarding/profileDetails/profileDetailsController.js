App.controller('profileDetailsController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {

    var token = localStorage.getItem("token");
    $scope.values = {};

    // loading with time limit
  

    
    // $scope.upload_status = true;
    // $scope.loading = function () {
    //     // $scope.upload_status = !($scope.upload_status);
    //     console.log("function loading");
    //     console.log($scope.upload_status);

    // }
    $scope.fflLicenseNo = /[0-9]{9}[a-zA-Z]{1}[0-9]{5}$/;
    $scope.fflLicenseNo1 = /[0-9]{3}[-][0-9]{4}[-][0-9]{4}$/;
    $scope.values.ffl_license_url = "";
    $scope.values.atf_license_url = "";
    $scope.values.itar_license_url = "";
    $scope.values.businesstax_license_url = "";
    $scope.tempholders = { currDocType: '' };

    
    $scope.fileUpload = function ($input) {
        $scope.tempholders.currDocType = $input;
        $('#docUploadEle').click();
    }

    $("#docUploadEle").on('change', function (event) {
        onChange($(this)[0]);
    });

    function onChange(fileObj) {
        var file = fileObj.files[0];
        console.log(file);
        uploadFile(file);
    }


    function uploadFile(file) {
       
        
        var documentType = $scope.tempholders.currDocType;
        var otherInfo = { documentType: file.type };
        var formdata = new FormData();
        formdata.append('myfile', file);
        formdata.append('data', JSON.stringify(otherInfo));

        $.ajax({
            method: 'POST',
            url: $rootScope.apiHost + '/users/profile/docupload',
            data: formdata,
            headers: {
                'token': token
            },
            processData: false,
            contentType: false,
            beforeSend: function(){
                $('company-logo-spinner').show();
                console.log("loading");  
                $scope.load=true;
                document.getElementById(documentType + "-load").innerHTML="loading..."; 
                
            },
            complete: function(){
                $('company-logo-spinner').hide();
                console.log("uploaded");
                $scope.load=false;
                document.getElementById(documentType + "-load").innerHTML='<p style="color:green">success</p>'; 
            },
            success: function (response) {
                  
                console.log(response);
                if (response.status) {
                    var documentUrl = response.documentUrl;

                    switch (documentType) {
                        case 'companyLogo': $scope.values.logo = documentUrl; break;
                        case 'fflLicenseNo': $scope.values.ffl_license_url = documentUrl; break;
                        case 'atfLicenseNumber': $scope.values.atf_license_url = documentUrl; break;
                        case 'atarLicenseNumber': $scope.values.itar_license_url = documentUrl; break;
                        case 'businessTaxLicenseNumber': $scope.values.businesstax_license_url = documentUrl; break;
                        default: break;
                    }
                    console.log('scope values', $scope.values);
                    
                    resetFile();
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }

    function resetFile() {
        const file = document.querySelector('#docUploadEle');
        file.value = '';
    }

    $scope.onSaveClose = function (redirectTo) {

        // console.log('submitted data', $scope.values);

        // var formdata = {
        //     "companyDescridescription": $scope.values.companyDescription,
        //     "businessClassification": $scope.values.businessClassification,
        //     "logo": $scope.values.logo,
        //     "fbAccount": $scope.values.facebook,
        //     "instagramAccount": $scope.values.instagram,
        //     "twitterAccount": $scope.values.twitter,
        //     "accountType": $scope.values.accountType,
        //     "eni": $scope.values.companyInformationEin,
        //     "fflLicenseNo": $scope.values.fflLicenseNumber,
        //     "atfLicenseNo": $scope.values.atfLicenseNumber,
        //     "itarLicenseNo": $scope.values.atarLicenseNumber,
        //     "businessTaxLicenseNo": $scope.values.businessTaxLicenseNumber,
        //     "fflLicenseUrl": $scope.values.ffl_license_url,
        //     "atfLicenseUrl": $scope.values.atf_license_url,
        //     "itarLicenseUrl": $scope.values.atar_license_url,
        //     "businesstaxLicenseUrl": $scope.values.businesstax_license_url
        // };

        // console.log("procdetails", formdata);

        // var apidata = JSON.stringify(formdata);
        // $http({
        //     method: 'post',
        //     url: $rootScope.apiHost + '/users/profile',
        //     async: false,
        //     data: {
        //         info: formdata,
        //         userId: (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
        //     },
        //     headers: {
        //         'token': token
        //     },

        // }).then(function (response) {
        //     console.log('redirect path', redirectTo);
        //     $location.path('/' + redirectTo);
        // }).catch(function (err) {
        //     console.log("err", err);
        // });
        $location.path('/' + redirectTo);
    }


    function resetFile() {
        const file = document.querySelector('#docUploadEle');
        file.value = '';
    }

    function populateProfileDetails() {
        $http({
            method: 'get',
            url: $rootScope.apiHost + '/users/profile/details',
            // data: {
            //     'userId': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            // },
            headers: {
                'Content-Type': 'application/json',
                'token': token,
                'userid': (typeof localStorage.userId != "undefined") ? localStorage.userId : 0
            }
        }).then(function successCallback(response) {

            var populateObject = response.data.data;
            console.log(JSON.stringify(populateObject.companyDescridescription));
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
        });
    }

    if (typeof localStorage.userId != "undefined") {
        populateProfileDetails();
    }
    console.log("in profile");
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
