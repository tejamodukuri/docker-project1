App.controller('buyingOpportunities_MatchesController', function($scope,$rootScope,$location,$compile,$http) {

    $scope.res_local=function(){
        localStorage.clear();
        $location.path('/createNewBuyInterest'); 
        console.log("clear");
    }

    function on_load(){
        var buyval=JSON.parse(localStorage.getItem("buyinterest"));
        $scope.json=buyval;
        console.log('get' ,buyval);
       
    }


    on_load();

});
