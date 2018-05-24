App.controller('salesOpportunities_ListingsController', function($scope,$rootScope,$compile,$http,$location) {

    $scope.listings = [];  
    for(var i=0; i<3; i++){
        $scope.listings.push({
        //    "purchaseImages": [
        //        {
        //            "_id": "5af13d0de34735156c3c141b",
        //            "title": "img1",
        //            "size": "25",
        //            "url": "xyz/pub/img1.jpg",
        //            "altname": "img1"
        //        }
        //    ],
        //    "status": "Published",
        
        //    "percentFulfilled": "0%",
        //    "privacy": "Group 1,Preferred Vendors",
        //    "productName": "Brass",
        //    "productPrice": "20ZERV",
        //    "productQuantity": "10 pounds",
        //    "productNotes": "notes",
        //    "paymentTimeFrame": "Time of sale",
        //    "paymentmethod": "ZERV",
        //    "deliveryTerms": "7 days",
          
       });
    }
    
    $scope.res_local=function(){
        // localStorage.clear();
        $location.path('/createNewSellListing_Step-1');
        console.log("clear");
    }


    $scope.viewOffers = function() {
        window.location = "http://" + window.location.host + "/#/sellListingDetails";
    };


    function onMyLoad () {
        
            $scope.vall = JSON.parse(localStorage.getItem('listing'));
   
            $scope.vall1= JSON.parse(localStorage.getItem('product'));
   
            $scope.vall2 = JSON.parse(localStorage.getItem('salesterms'));
            console.log("loading");
            
        
    };


    onMyLoad();


});
