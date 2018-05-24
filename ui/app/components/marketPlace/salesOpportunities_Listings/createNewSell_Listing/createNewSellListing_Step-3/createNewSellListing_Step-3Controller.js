App.controller('createNewSellListing_Step-3Controller', function($scope,$rootScope,$compile,$location,$http) {


    $scope.step_2 = function() {
       window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-2";
       };
       $scope.step_4 = function() {
       window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-4";
       };
       $scope.save=function(){
               localStorage.setItem("salesterms", JSON.stringify($scope.values));
               console.log(localStorage.getItem("salesterms"));
               $scope.step_4();
           }


   console.log("hi");
        $scope.myVar = false;
   $scope.toggle = function() {
      $scope.myVar = !$scope.myVar;
       $scope.myVar1 = false;
        $scope.myVar2 = false;
       $scope.values.recvReqMarket=false;
       $scope.values.preferredVendors=false;
       
           

     

  };
        $scope.myVar1 = false;
  $scope.toggle1 = function() {
      $scope.myVar1 = !$scope.myVar1;
       $scope.myVar = false;
        $scope.myVar2 = false;
       $scope.values.preferredVendors=false;
        $scope.values.selectGropus=false;

  };
$scope.myVar2 = false;
  $scope.toggle2 = function() {
      $scope.myVar2 = !$scope.myVar2;
       $scope.myVar1 = false;
        $scope.myVar =false; 
       $scope.values.recvReqMarket=false;
        $scope.values.selectGropus=false;

  };


  $scope.step_2 = function() {
   window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-2";
   };
   $scope.step_4 = function() {
   window.location = "http://" + window.location.host + "/#/createNewSellListing_Step-4";
   };
   $scope.save=function(){
           localStorage.setItem("salesterms", JSON.stringify($scope.values));
           console.log(localStorage.getItem("salesterms"));
           $scope.step_4();
       }


       $scope.onMyLoad = function(){
           if(localStorage.getItem('salesterms') != ""){
               $scope.values = JSON.parse(localStorage.getItem('salesterms'));
           }
       };
     
       if(localStorage.getItem("forPrepopEditable")){
           $scope.onMyLoad(); 
       }


       
$scope.step_1=function(){
   $location.path('/createNewSellListing_Step-1');
   console.log("clicked");
}
$scope.step_2=function(){
   $location.path('/createNewSellListing_Step-2');
   console.log("clicked");
}

$scope.step_3=function(){
   $location.path('/createNewSellListing_Step-3');
   console.log("clicked");
}
$scope.step_4=function(){
   $location.path('/createNewSellListing_Step-4');
   console.log("clicked");
}

$scope.onSaveClose = function () {
    localStorage.setItem("salesterms", JSON.stringify($scope.values));
    $location.path('/salesOpportunities_Listings');
    console.log('product info', localStorage.getItem("salesterms"));


}


});
































// App.controller('createNewSellListing_Step-3Controller', function($scope,$rootScope,$compile,$http,$location) {
//      $scope.values = {};
//     // $scope.onSaveClose = function(){
//     //     console.log('submitted data',$scope.values);
//     //      var formdata = {
           
//     //      "paymentTimeFrame":$scope.values.paymentTimeFrame,
//     //      "paymentMethod":$scope.values.paymentMethod,
//     //      "deliveryTerms":$scope.values.deliveryTerms,
//     //      "marketPlace":$scope.values.Marketplace,
//     //      "prefferedVendors":$scope.values.preferredVendors,
//     //      "selectGroups":$scope.values.selectGroup,
//     //      "usGovernment":$scope.values.usGovernment,
//     //      "internationalGovt":$scope.values.internationalGovernment,
//     //      "additionalNotes":$scope.values.addtionalNotes
//     //     }

//     //     console.log("in here with form data", formdata);
//     //      var data = JSON.stringify(formdata);
// 	// 	$http({
// 	// 		method: 'post',
// 	// 		url: 'http://localhost:6060/termsOfSale/listing/create',
// 	// 		data: data
// 	// 	}).then(function successCallback(response) {
//     //         console.log(response);
//     //        // $location.path('/salesOpportunities_Listings');
//     //     });
        
        
//     // }

//     if(localStorage.getItem("salesterms")){
//         $scope.values = JSON.parse(localStorage.getItem("salesterms"));
//     }


//     $scope.onSaveClose =function(){
//         localStorage.setItem("salesterms", JSON.stringify($scope.values));
//         $location.path('/createNewSellListing_Step-4');
//         console.log(localStorage.getItem("salesterms"));
//     }
    
//     $scope.onSaveNext = function(){
//         localStorage.setItem("salesterms", JSON.stringify($scope.values));
//         $location.path('/createNewSellListing_Step-4');
//     }

// });
