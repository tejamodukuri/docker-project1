App.controller('createNewSell_InterestController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {
    $scope.values = {};
    console.log("hu");
    $scope.navMatch=function(){
        $location.path('/salesOpportunities_Matches');
    }
    $scope.selectAll_type=function(type){
				
        if(type == "PurCompType"){
            var chngChkVal=$scope.values.createNewSellInterestPurchasingPreferencesComponentsSelectAll;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsCase=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsProjectile=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsGunpowder=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsGunpowderPrimer=chngChkVal;
        }
        if(type == "PurAmmoType"){
            var chngChkVal=$scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeHandgun=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeShotgun=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRifle=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRimfire=chngChkVal;
        }
        if(type == "PurBrand"){
            var chngChkVal=$scope.values.createNewSellInterestPurchasingPreferencesBrandSelectAll;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandWinchester=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandRemington=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFederal=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchi=chngChkVal;
			 $scope.values.createNewSellInterestPurchasingPreferencesBrandWinchesterTwo=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandRemingtonTwo=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFederalTwo=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchiTwo=chngChkVal;
            
        }if(type == "PurTradePart"){
            var chngChkVal=$scope.values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsGovernment=chngChkVal;
             $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternational=chngChkVal;
			 $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsCommercial=chngChkVal;
             $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternationalCommercial=chngChkVal;
			 
        }if(type == "PurTimeOfSale"){
            var chngChkVal=$scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleSelectAll;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleImmediate=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays=chngChkVal;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=chngChkVal;
        }       
    }
    $scope.values = {};
    $scope.values.transactionType = 'buy';

    $scope.transactionType = function(input){
        if(input == 'buy'){
            $scope.values.transactionType = "buy";
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsCase=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsProjectile=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsGunpowder=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsGunpowderPrimer=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeHandgun=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeShotgun=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRifle=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRimfire=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandWinchester=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandRemington=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFederal=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchi=false;
			 $scope.values.createNewSellInterestPurchasingPreferencesBrandWinchesterTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandRemingtonTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFederalTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchiTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsGovernment=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternational=false;
			  $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsCommercial=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternationalCommercial=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleImmediate=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=false;
        }
        else if(input == 'sell'){
            $scope.values.transactionType = "sell";
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsCase=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsProjectile=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsGunpowder=false;
            $scope.values.createNewSellInterestPurchasingPreferencesComponentsGunpowderPrimer=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeHandgun=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeShotgun=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRifle=false;
            $scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRimfire=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandWinchester=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandRemington=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFederal=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchi=false;
			 $scope.values.createNewSellInterestPurchasingPreferencesBrandWinchesterTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandRemingtonTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFederalTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchiTwo=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsGovernment=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternational=false;
			  $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsCommercial=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternationalCommercial=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleSelectAll=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleImmediate=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays=false;
            $scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=false;
        }
    }
    
    $scope.onSaveClose = function () {  
      
        console.log('TRANS TYPE',$scope.values.transactionType);

        var formdata = {
            // "userid" : 101 ,
            "userid" :localStorage.getItem("userId"),
            "alert_name": $scope.values.alertName,
            "transactiontype":$scope.values.transactionType,
			"comp_case":$scope.values.createNewSellInterestPurchasingPreferencesComponentsCase,
			"comp_projectile":$scope.values.createNewSellInterestPurchasingPreferencesComponentsProjectile,
			"comp_gunpowder":$scope.values.createNewSellInterestPurchasingPreferencesComponentsGunpowder,
			"comp_primer":$scope.values.createNewSellInterestPurchasingPreferencesComponentsPrimer,
			"ammo_handgun":$scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeHandgun,
			"ammo_shortgun":$scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeShotgun,
			"ammo_rifle":$scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRifle,
			"ammo_rimfire":$scope.values.createNewSellInterestPurchasingPreferencesAmmoTypeRimfire,
			"brand_winchester":$scope.values.createNewSellInterestPurchasingPreferencesBrandWinchester,
			"brandRemington":$scope.values.createNewSellInterestPurchasingPreferencesBrandRemington,
			"brandFederal":$scope.values.createNewSellInterestPurchasingPreferencesBrandFederal,
			"brandFiocchi":$scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchi,
			"brand_winchesterTwo":$scope.values.createNewSellInterestPurchasingPreferencesBrandWinchesterTwo,
			"brandRemingtonTwo":$scope.values.createNewSellInterestPurchasingPreferencesBrandRemingtonTwo,
			"brandFederalTwo":$scope.values.createNewSellInterestPurchasingPreferencesBrandFederalTwo,
			"brandFiocchiTwo":$scope.values.createNewSellInterestPurchasingPreferencesBrandFiocchiTwo,
			"TpUsgovt":$scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsGovernment,
			"TpIntgovt":$scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternational,
			"TpUsgovtco":$scope.values.createNewSellInterestPurchasingPreferencesTradePartnersUsCommercial,
			"TpIntgovtco":$scope.values.createNewSellInterestPurchasingPreferencesTradePartnersInternationalCommercial,
			"saletermImmediate":$scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleImmediate,
			"saletermLt30Days":$scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays,
			"saletermGt30Days":$scope.values.createNewSellInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore

        }

        console.log("in here with form data", formdata);

        var data = JSON.stringify(formdata);
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/Profile/intrests',
            data: data
        }).then(function successCallback(response) {
            console.log(response);
            $location.path('/tokenAccess');
        });
    }
	
$scope.addform=function(){
        var btnhtml  =  '<div class="form-group col-sm-11 col-xs-11">'
               +'<div class="col-sm-1 text-center">'
                 +'<label class="f22">1</label>'
               + '</div>'
                + '<div class="form-group col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
                   + '<div class="col-sm-2">'
                     +   '<label class="f16"><b>Alert name</label></b>'
                   + '</div>'
				     + '<div class="col-sm-4">'
                      +  '<input type="text" name="alertName" ng-model="values.alertName" class="form-control input-md" ng-minlength="4" ng-maxlength="20" required >'
                      +  '<span class="err_style" ng-show="createNewSellInterest.alertName.$error.required && createNewSellInterest.alertName.$dirty">Enter Alert Name.</span>'
                       + '<span class="err_style" ng-show="createNewSellInterest.alertName.$error.minlength">Alert Name is to short.</span>'
                      +  '<span class="err_style" ng-show="createNewSellInterest.alertName.$error.maxlength">Alert Name is to long.</span>'
                   + '</div>'
              +  '</div>'
			  + '</div>'
           + '<div class="form-group col-sm-11 col-xs-11">'
             +   '<div class="col-sm-1 text-center">'
              +      '<label class="f22">2</label>'
               + '</div>'
               + '<div class="form-group col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
                   + '<div class="col-sm-12">'
                      +  '<label class="f16"><b>Im interested in</b></label>'
                  +  '</div>'
				  + '<div class="col-sm-6">'
                    +    '<div class="btn-group " data-toggle="buttons">'
                           + '<label class="btn btn-default active "id="buy"  ng-click="transactionType(buy)">'
                             +   '<input type="radio"  autocomplete="off " checked ng-model = "values.userinterestsbuying" name="FreeForm "  value = "Yes" >Buying</label>'
                        +   ' <label class="btn btn-default"  id="sell" ng-click="transactionType(sell)">'
                            +    '<input type="radio"  autocomplete="off " ng-model = "values.userinterestsselling" name="FreeForm "  value = "No" >Selling</label>'
                    +    '</div>'
                 +  ' </div>'
              +  '</div>'
           + '</div>'
		   + '<div class="form-group col-sm-11 col-xs-11">'
             +   '<div class="col-sm-1 text-center">'
                  + '</div>'
             +   '<div class=" col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 " >'
                +   ' <div class="col-sm-12 ">'
                   +    ' <label class="f16"><b>Purchasing Preferences</b></label>  '
                  +  '</div>'
             +   '</div>'
         +   '</div>'
		 + '<div class="form-group col-xs-12 col-sm-12 ">'
              +  '<div class="form-group col-xs-12 col-sm-10 border_pack col-sm-offset-1 ">'
                 +  ' <div class=" col-xs-12 col-sm-12 f14">'
                     +   '<div class="form-group col-xs-12 col-sm-12">'
                        +   ' <label class="f16"><b>Components</b></label>'
                      +  '</div>'
                      +  '<div class=" col-xs-12 col-sm-12 f14  ">'
                          +  '<div class="col-sm-3">'
                             +   '<input   id="createNewSellInterestPurchasingPreferencesComponentsSelectAll" ng-change="selectAll_type(PurCompType)" ng-model="values.createNewSellInterestPurchasingPreferencesComponentsSelectAll" class="checkboxsize" type="checkbox" value="ComponentsSelectedall">'
                              +  '<label >Select all </label>'
                           + '</div>'
                     +  ' </div>'
                      +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                       +    ' <div class="col-sm-3">'
                             +  '<input id="createNewSellInterestPurchasingPreferencesComponentsCase" ng-model="values.createNewSellInterestPurchasingPreferencesComponentsCase" class="ComponentsSelect checkboxsize" type="checkbox"  ng-checked="values.createNewSellInterestPurchasingPreferencesComponentsSelectAll" >'
                              +  '<label >Case  </label>'
                           + '</div>'
                          +  '<div class="col-sm-3">'
                           + '<input id="createNewSellInterestPurchasingPreferencesComponentsProjectile" ng-model="values.createNewSellInterestPurchasingPreferencesComponentsProjectile"    class="ComponentsSelect checkboxsize" type="checkbox" value="Projectile"   ng-checked="values.createNewSellInterestPurchasingPreferencesComponentsSelectAll">'
                              +  '<label >Projectile  </label>'
                         +   '</div>'
                          +  '<div class="col-sm-3">'
                            +    '<input id="createNewSellInterestPurchasingPreferencesComponentsGunpowder" ng-model="values.createNewSellInterestPurchasingPreferencesComponentsGunpowder"  class="ComponentsSelect checkboxsize"  type="checkbox"  value="Gunpowder"   ng-checked="values.createNewSellInterestPurchasingPreferencesComponentsSelectAll">'
                           +     '<label >Gunpowder </label>'
                          +  '</div>'
                          +  '<div class="col-sm-3">'
                               + '<input id="createNewSellInterestPurchasingPreferencesComponentsGunpowderPrimer" ng-model="values.createNewSellInterestPurchasingPreferencesComponentsPrimer" class="ComponentsSelect checkboxsize" type="checkbox" value="Primer"   ng-checked="values.createNewSellInterestPurchasingPreferencesComponentsSelectAll">'
                               + '<label >Primer </label>'
                          +  '</div>'
                       + '</div>'
                     +   '<div class="form-group col-xs-12 col-sm-12">'
                      +      '<label class="f16"><b>Ammo types</b></label>'
                      +  '</div>'
                      + ' <div class="form-group col-xs-12 col-sm-12 f14  ">'
                         +   '<div class="col-sm-3">'
                         +       '<input id="createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll" ng-change="selectAll_type(PurAmmoType)" ng-model="values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll" class="checkboxsize"type="checkbox" value=""/>'
                             +   '<label >Select all </label>'
                           + '</div>'
                       + '</div>'
                      +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         +   '<div class="col-sm-3">'
                             +   '<input id="createNewSellInterestPurchasingPreferencesAmmoTypeHandgun" ng-model="values.createNewSellInterestPurchasingPreferencesAmmoTypeHandgun"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll">'
                            +   '<label >Handgun </label>'
                           + '</div>'
                          + '<div class="col-sm-3">'
                             +   '<input id="createNewSellInterestPurchasingPreferencesAmmoTypeShotgun" ng-model="values.createNewSellInterestPurchasingPreferencesAmmoTypeShotgun"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll">'
                              +  '<label >Shotgun  </label>'
                           + '</div>'
                          +  '<div class="col-sm-3">'
                              + '<input id="createNewSellInterestPurchasingPreferencesAmmoTypeRifle" ng-model="values.createNewSellInterestPurchasingPreferencesAmmoTypeRifle"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll">'
                             +   '<label >Rifle </label>'
                          +  '</div>'
                        +  ' <div class="col-sm-3">'
                               + '<input   id="createNewSellInterestPurchasingPreferencesAmmoTypeRimfire" ng-model="values.createNewSellInterestPurchasingPreferencesAmmoTypeRimfire" class="AmmoTypesSelect checkboxsize"  type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesAmmoTypeSelectAll">'
                             +  ' <label >Rimfire</label>'
                           + '</div>'
                      +  '</div>'
					  + '<div class="form-group col-xs-12 col-sm-12">'
                        +  ' <label class="f16"><b>Brand</b></label>'
                    +   ' </div>'
                      +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                          +  '<div class="col-sm-3">'
                            +   ' <input id="createNewSellInterestPurchasingPreferencesBrandSelectAll" ng-change="selectAll_type(PurBrand)"   ng-model="values.createNewSellInterestPurchasingPreferencesBrandSelectAll"  class="checkboxsize"  type="checkbox" value=""/>'
                          +  '<label >Select all </label>'
                          +  '</div>'
                      +  '</div>'
                      +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                          +  '<div class="col-sm-3">'
                            +    '<input   id="createNewSellInterestPurchasingPreferencesBrandWinchester" ng-model="values.createNewSellInterestPurchasingPreferencesBrandWinchester" class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll" >'
                            +    '<label >Winchester  </label>'
                         +   '</div>'
                          +  '<div class="col-sm-3">'
                             +   '<input   id="createNewSellInterestPurchasingPreferencesBrandRemington" ng-model="values.createNewSellInterestPurchasingPreferencesBrandRemington"  class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll">'
                             +   '<label >Remington </label>'
                           + '</div>'
                          +  '<div class="col-sm-3">'
                            +    '<input id="createNewSellInterestPurchasingPreferencesBrandFederal" ng-model="values.createNewSellInterestPurchasingPreferencesBrandFederal"    class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll">'
                             +   '<label >Federal </label>'
                          +  '</div>'
                          +  '<div class="col-sm-3">'
                            +    '<input id="createNewSellInterestPurchasingPreferencesBrandFiocchi" ng-model="values.createNewSellInterestPurchasingPreferencesBrandFiocchi"    class=" BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll">'
                             +   '<label >Fiocchi </label>'
                           + '</div>'
                      +  '</div>'
	                     +'<div class="form-group col-xs-12 col-sm-12 f14  ">'
                           + '<div class="col-sm-3">'
                             +   '<input   id="createNewSellInterestPurchasingPreferencesBrandWinchesterTwo" ng-model="values.createNewSellInterestPurchasingPreferencesBrandWinchesterTwo" class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll" >'
                             +   '<label >Hornaday  </label>'
                           + '</div>'
                           + '<div class="col-sm-3">'
                              +  '<input   id="createNewSellInterestPurchasingPreferencesBrandRemingtonTwo" ng-model="values.createNewSellInterestPurchasingPreferencesBrandRemingtonTwo"  class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll">'
                              +  '<label >Remington </label>'
                          +  '</div>'
                           + '<div class="col-sm-3">'
                              +  '<input id="createNewSellInterestPurchasingPreferencesBrandFederalTwo" ng-model="values.createNewSellInterestPurchasingPreferencesBrandFederalTwo"    class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll">'
                              +  '<label >Federal </label>'
                          +  '</div>'
                          +  '<div class="col-sm-3">'
                              +  '<input id="createNewSellInterestPurchasingPreferencesBrandFiocchiTwo" ng-model="values.createNewSellInterestPurchasingPreferencesBrandFiocchiTwo"    class=" BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesBrandSelectAll">'
                               + '<label >Fiocchi </label>'
                          +  '</div>'
                      +  '</div>'
					  +  '<div class="form-group col-xs-12 col-sm-12">'
                       +     '<label class="f16"><b>Trade partners</b></label>'
                  +     '</div>'
                    +    '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         +   '<div class="col-sm-3">'
                          +      '<input id="createNewSellInterestPurchasingPreferencesTradePartnersSelectAll" ng-change="selectAll_type(PurTradePart)"   ng-model="values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll" class="checkboxsize" type="checkbox" value=""/>'
                          +     ' <label >Select all </label>'
                         +   '</div>'
                       + '</div>'
                      +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                        +    '<div class="col-sm-3">'
                           +   '  <input id="createNewSellInterestPurchasingPreferencesTradePartnersUsGovernment" ng-model="values.createNewSellInterestPurchasingPreferencesTradePartnersUsGovernment"  class="TradePartnersSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll">'
                           +    '<label >US Government   </label>'
                         +  ' </div>'
                        +   ' <div class="col-sm-4">'
                          +      '<input id="createNewSellInterestPurchasingPreferencesTradePartnersInternational" ng-model="values.createNewSellInterestPurchasingPreferencesTradePartnersInternational"    class="TradePartnersSelect checkboxsize"type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll">'
                          +      '<label >International Government </label>'
                        +    '</div>'
                     +   '</div>'
	                 +   '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                        +    '<div class="col-sm-3">'
                          +      '<input id="createNewSellInterestPurchasingPreferencesTradePartnersUsCommercial" ng-model="values.createNewSellInterestPurchasingPreferencesTradePartnersUsCommercial"  class="TradePartnersSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll">'
                           +     '<label >US Commercial   </label>'
                        +   ' </div>'
                          +  '<div class="col-sm-4">'
                             +  '<input id="createNewSellInterestPurchasingPreferencesTradePartnersInternationalCommercial" ng-model="values.createNewSellInterestPurchasingPreferencesTradePartnersInternationalCommercial"    class="TradePartnersSelect checkboxsize"type="checkbox" value="" ng-checked="values.createNewSellInterestPurchasingPreferencesTradePartnersSelectAll">'
                            +   '<label >International Commercial </label>'
                          +  '</div>'
                      +  '</div>'
					  + '<div class="form-group col-xs-12 col-sm-12">'
                        +    '<label class="f16"><b>Terms of sale</b></label>'
                     +   '</div>'
                       + '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                          +  '<div class="col-sm-3">'
                          +  '<input id="createNewSellInterestPurchasingPreferencesTermsOfSaleSelectAll" ng-model="values.createNewSellInterestPurchasingPreferencesTermsOfSaleSelectAll" ng-change="selectAll_type(PurTimeOfSale)"  class="checkboxsize" type="checkbox" value="" />'
                        +    '<label>Select all </label>'
                     +   '</div>'
                +   ' </div>'
                       + '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         +   '<div class="col-sm-3">'
                             +   '<input  id="createNewSellInterestPurchasingPreferencesTermsOfSaleImmediate" ng-model="values.createNewSellInterestPurchasingPreferencesTermsOfSaleImmediate"   class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                            +    '<label>Immediate</label>'
                          +  '</div>'
                           + '<div class="col-sm-3">'
                           +     '<input id="createNewSellInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays" ng-model="values.createNewSellInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays"  class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                             +   '<label >Less than 30 days</label>'
                           + '</div>'
                         +   '<div class="col-sm-4">'
                              +  '<input id="createNewSellInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore" ng-model="values.createNewSellInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore"  class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                            +    '<label>Greater than 30 days</label>'
                         +   '</div>'
                     +   '</div>'
                  +  '</div>'
             +   '</div>'
         +   '</div>'	
          + '<div class="form-group col-xs-12 col-sm-6 col-sm-offset-2" >'
		       +'<div class="form-group col-xs-6 col-sm-4 col-sm-offset-4">'
		 +          '<a class="btn btn-default btn-sm center-block img-wid-buy" id="createNewSellInterestCancel" ng-model="values.createNewSellInterestCancel" href="{{hostname}}#/">Cancel </a>'
	         +  '</div>'
	         +  '<div class="form-group col-xs-6 col-sm-4">'
	            +	'<a class="btn btn-info btn-sm center-block img-wid-buy" id="createNewSellInterestCreateAlert" ng-model="values.createNewSellInterestCreateAlert"  ng-disabled="createNewSellInterest.$invalid" href="{{hostname}}#/">Create Alert</a>'
	         +  '</div>'
	  +     '</div>';
					  
      var temp = $compile(btnhtml)($scope);
      angular.element(document.getElementById('dynamicInput')).append(temp);
    }
}]);