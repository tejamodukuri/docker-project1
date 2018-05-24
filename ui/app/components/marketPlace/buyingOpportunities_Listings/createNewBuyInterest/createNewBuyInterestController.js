App.controller('createNewBuyInterestController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {
    $scope.values = {};
    console.log("hu");
    $scope.navMatch=function(){
        $location.path('/buyingOpportunities_Matches');
    }
    $scope.buy_match=function(){
        $location.path('/buyingOpportunities_Matches');
    }
	$scope.json = {};
	$scope.json.createalertName = {};
	$scope.json.createalertName.ComponentsSelect = {};
	$scope.json.createalertName.BrandSelect = {};
	$scope.json.createalertName.AmmoTypesSelect = {};
	$scope.json.createalertName.TermsofSaleSelect = {};
	$scope.json.createalertName.TradePartnersSelect = {};
	$scope.json.createalertName.alertName = "";
	$scope.alertnamef = function(){
		$rootScope.alertName = $scope.json.createalertName.alertName;
	}
	$scope.interest1 = function(){
		 $scope.json.createalertName.buying="buy";
		$rootScope.buying = $scope.json.createalertName.buying;
	}
	$scope.interest2 = function(){
		$rootScope.selling =  $scope.json.createalertName.selling;
	}
	$scope.ComponentsSelect = function(){
		$scope.ComponentsSelect =  $scope.json.createalertName.ComponentsSelect.All + $scope.json.createalertName.ComponentsSelect.Case + $scope.json.createalertName.ComponentsSelect.Projectile + $scope.json.createalertName.ComponentsSelect.Gunpowder + $scope.json.createalertName.ComponentsSelect.Primer ;
		console.log("its componentsselect : " + $scope.ComponentsSelect );
	} 
	 // $scope.ComponentsSelect = function(){
		// $rootScope.ComponentsSelect =  $scope.json.createalertName.ComponentsSelect.All;
		// console.log("its componentsselect : " + $rootScope.ComponentsSelect );
	// } 
		 $scope.ComponentsSelectcase = function(){
		$rootScope.ComponentsSelectcase =  $scope.json.createalertName.ComponentsSelect.Case ;
		console.log("its ComponentsSelectcase : " + $rootScope.ComponentsSelectcase );
	} 
		 $scope.ComponentsSelectProjectile = function(){
		$rootScope.ComponentsSelectProjectile =  $scope.json.createalertName.ComponentsSelect.Projectile ;
		console.log("its ComponentsSelectProjectile : " + $rootScope.ComponentsSelectProjectile );
	} 
		 $scope.ComponentsSelectGunpowder = function(){
		$rootScope.ComponentsSelectGunpowder =  $scope.json.createalertName.ComponentsSelect.Gunpowder ;
		console.log("its ComponentsSelectGunpowder : " + $rootScope.ComponentsSelectGunpowder );
	} 
		 $scope.ComponentsSelectPrimer = function(){
		$rootScope.ComponentsSelectPrimer =  $scope.json.createalertName.ComponentsSelect.Primer ;
		console.log("its ComponentsSelectPrimer : " + $rootScope.ComponentsSelectPrimer );
	} 
    
    
    $scope.save_local=function(){
        localStorage.setItem("buyinterest", JSON.stringify($scope.json));
        console.log('BI' ,localStorage.getItem("buyinterest"));
       
    }


    function on_load(){
        var buyval=JSON.parse(localStorage.getItem("buyinterest"));
        $scope.json=buyval;
        console.log('get' ,buyval);
       
    }


    on_load();
    
    
	/******************************************************************************************/
/* 	$scope.BrandSelect = function(){
		$rootScope.BrandSelect =  $scope.json.createalertName.BrandSelectAll + $scope.json.createalertName.BrandSelect.Fiocchi + $scope.json.createalertName.BrandSelect.Federal + $scope.json.createalertName.BrandSelect.Remington + $scope.json.createalertName.BrandSelect.Winchester ;
		console.log("its BrandSelect : " + $rootScope.BrandSelect );
	}
	 */
	$scope.BrandSelect = function(){
		$rootScope.BrandSelect =  $scope.json.createalertName.BrandSelectAll + $scope.json.createalertName.BrandSelect.Fiocchi + $scope.json.createalertName.BrandSelect.Federal + $scope.json.createalertName.BrandSelect.Remington + $scope.json.createalertName.BrandSelect.Winchester ;
		console.log("its BrandSelect : " + $rootScope.BrandSelect );
	}
	$scope.BrandSelectFiocchi = function(){
		$rootScope.BrandSelectFiocchi = $scope.json.createalertName.BrandSelect.Fiocchi;
		console.log("its BrandSelectFiocchi : " + $rootScope.BrandSelectFiocchi );
	}
	$scope.BrandSelectFederal = function(){
		$rootScope.BrandSelectFederal =  $scope.json.createalertName.BrandSelect.Federal;
		console.log("its BrandSelectFederal : " + $rootScope.BrandSelectFederal );
	}
	$scope.BrandSelectRemington = function(){
		$rootScope.BrandSelectRemington =   $scope.json.createalertName.BrandSelect.Remington ;
		console.log("its BrandSelectRemington : " + $rootScope.BrandSelectRemington );
	}
	$scope.BrandSelectWinchester = function(){
		$rootScope.BrandSelectWinchester =  $scope.json.createalertName.BrandSelect.Winchester ;
		console.log("its BrandSelectWinchester : " + $rootScope.BrandSelectWinchester );
	}
	
	
	
	
	
	/******************************************************************************************/
	
	/* $scope.AmmoSelect = function(){
		$rootScope.AmmoSelect =  $scope.json.createalertName.AmmoTypesSelectAll + $scope.json.createalertName.AmmoTypesSelect.Handgun + $scope.json.createalertName.AmmoTypesSelect.Rifle + $scope.json.createalertName.AmmoTypesSelect.Rimfire + $scope.json.createalertName.AmmoTypesSelect.Shotgun;
		console.log("its AmmoSelect : " + $rootScope.AmmoSelect );
	} */
	
	$scope.AmmoSelect = function(){
		$rootScope.AmmoSelect =  $scope.json.createalertName.AmmoTypesSelectAll;
		console.log("its AmmoSelect : " + $rootScope.AmmoSelect );
	}
	$scope.AmmoSelectHandgun = function(){
		$rootScope.AmmoSelectHandgun =  $scope.json.createalertName.AmmoTypesSelect.Handgun;
		console.log("its AmmoSelectHandgun : " + $rootScope.AmmoSelectHandgun );
	}
	$scope.AmmoSelectRifle = function(){
		$rootScope.AmmoSelectRifle =  $scope.json.createalertName.AmmoTypesSelect.Rifle;
		console.log("its AmmoSelectRifle : " + $rootScope.AmmoSelectRifle );
	}
	$scope.AmmoSelectRimfire = function(){
		$rootScope.AmmoSelectRimfire =   $scope.json.createalertName.AmmoTypesSelect.Rimfire;
		console.log("its AmmoSelectRimfire : " + $rootScope.AmmoSelectRimfire );
	}
	$scope.AmmoSelectShotgun = function(){
		$rootScope.AmmoSelectShotgun =  $scope.json.createalertName.AmmoTypesSelect.Shotgun;
		console.log("its AmmoSelectShotgun : " + $rootScope.AmmoSelectShotgun );
	}
	
	/******************************************************************************************/
	
	/* $scope.TermsofsaleSelect = function(){
		$rootScope.TermsofsaleSelect =  $scope.json.createalertName.TermsofSaleSelectAll + $scope.json.createalertName.TermsofSaleSelect.Immediate + $scope.json.createalertName.TermsofSaleSelect.Within_30_Days + $scope.json.createalertName.TermsofSaleSelect._30_Days_or_More ;
		console.log("its TermsofsaleSelect : " + $rootScope.TermsofsaleSelect );
	} */
	
	$scope.TermsofsaleSelect = function(){
		$rootScope.TermsofsaleSelect =  $scope.json.createalertName.TermsofSaleSelectAll;
		console.log("its TermsofsaleSelect : " + $rootScope.TermsofsaleSelect );
	}
	$scope.TermsofsaleSelectImmediate = function(){
		$rootScope.TermsofsaleSelectImmediate =  $scope.json.createalertName.TermsofSaleSelect.Immediate;
		console.log("its TermsofsaleSelectImmediate : " + $rootScope.TermsofsaleSelectImmediate );
	}
	$scope.TermsofsaleSelectWithin_30_Days = function(){
		$rootScope.TermsofsaleSelectWithin_30_Days =  $scope.json.createalertName.TermsofSaleSelect.Within_30_Days;
		console.log("its TermsofsaleSelectWithin_30_Days : " + $rootScope.TermsofsaleSelectWithin_30_Days );
	}
	$scope.TermsofsaleSelect_30_Days_or_More = function(){
		$rootScope.TermsofsaleSelect_30_Days_or_More =  $scope.json.createalertName.TermsofSaleSelect._30_Days_or_More ;
		console.log("its TermsofsaleSelect_30_Days_or_More : " + $rootScope.TermsofsaleSelect_30_Days_or_More );
	}
	/******************************************************************************************/
	
	/* $scope.TradePartnerSelect = function(){
		$rootScope.TradePartnerSelect =  $scope.json.createalertName.TradePartnersSelectAll + $scope.json.createalertName.TradePartnersSelect.US_Government + $scope.json.createalertName.TradePartnersSelect.International + $scope.json.createalertName.TradePartnersSelect.US_Government_1 + $scope.json.createalertName.TradePartnersSelect.International_1 ;
		console.log("its TradePartnerSelect : " + $rootScope.TradePartnerSelect );
	} */
	$scope.TradePartnerSelect = function(){
		$rootScope.TradePartnerSelect =  $scope.json.createalertName.TradePartnersSelectAll;
		console.log("its TradePartnerSelect : " + $rootScope.TradePartnerSelect );
	}
	$scope.TradePartnerSelectUS_Government = function(){
		$rootScope.TradePartnerSelectUS_Government = $scope.json.createalertName.TradePartnersSelect.US_Government ;
		console.log("its TradePartnerSelectUS_Government : " + $rootScope.TradePartnerSelectUS_Government );
	}
	$scope.TradePartnerSelectInternational = function(){
		$rootScope.TradePartnerSelectInternational =  $scope.json.createalertName.TradePartnersSelect.International ;
		console.log("its TradePartnerSelect : " + $rootScope.TradePartnerSelectInternational );
	}
	$scope.TradePartnerSelectUS_Government_1 = function(){
		$rootScope.TradePartnerSelectUS_Government_1 =   $scope.json.createalertName.TradePartnersSelect.US_Government_1;
		console.log("its TradePartnerSelect : " + $rootScope.TradePartnerSelectUS_Government_1 );
	}
	$scope.TradePartnerSelectInternational_1 = function(){
		$rootScope.TradePartnerSelectInternational_1 =   $scope.json.createalertName.TradePartnersSelect.International_1 ;
		console.log("its TradePartnerSelectInternational_1 : " + $rootScope.TradePartnerSelectInternational_1 );
	}
	/******************************************************************************************/
	
	
	
	
	
	
	
	
    $scope.selectAll_type=function(type){
				
        if(type == "PurCompType"){
            var chngChkVal=$scope.values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsCase=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsProjectile=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsGunpowder=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsGunpowderPrimer=chngChkVal;
        }
        if(type == "PurAmmoType"){
            var chngChkVal=$scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRifle=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire=chngChkVal;
        }
        if(type == "PurBrand"){
            var chngChkVal=$scope.values.createNewBuyInterestPurchasingPreferencesBrandSelectAll;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchester=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandRemington=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFederal=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchi=chngChkVal;
			 $scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFederalTwo=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo=chngChkVal;
            
        }if(type == "PurTradePart"){
            var chngChkVal=$scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment=chngChkVal;
             $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternational=chngChkVal;
			 $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial=chngChkVal;
             $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial=chngChkVal;
			 
        }if(type == "PurTimeOfSale"){
            var chngChkVal=$scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleSelectAll;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays=chngChkVal;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=chngChkVal;
        }       
    }
    $scope.values = {};
    $scope.values.transactionType = 'buy';

    $scope.transactionType = function(input){
        if(input == 'buy'){
            $scope.values.transactionType = "buy";
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsCase=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsProjectile=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsGunpowder=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsGunpowderPrimer=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRifle=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchester=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandRemington=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFederal=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchi=false;
			 $scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFederalTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternational=false;
			  $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=false;
        }
        else if(input == 'sell'){
            $scope.values.transactionType = "sell";
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsCase=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsProjectile=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsGunpowder=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesComponentsGunpowderPrimer=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRifle=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchester=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandRemington=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFederal=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchi=false;
			 $scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFederalTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternational=false;
			  $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleSelectAll=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays=false;
            $scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=false;
        }
    }
    
    $scope.onSaveClose = function () {  
      
        console.log('TRANS TYPE',$scope.values.transactionType);

        var formdata = {
            // "userid" : 101 ,
            "userid" :localStorage.getItem("userId"),
            "alert_name": $scope.values.alertName,
            "transactiontype":$scope.values.transactionType,
			"comp_case":$scope.values.createNewBuyInterestPurchasingPreferencesComponentsCase,
			"comp_projectile":$scope.values.createNewBuyInterestPurchasingPreferencesComponentsProjectile,
			"comp_gunpowder":$scope.values.createNewBuyInterestPurchasingPreferencesComponentsGunpowder,
			"comp_primer":$scope.values.createNewBuyInterestPurchasingPreferencesComponentsPrimer,
			"ammo_handgun":$scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun,
			"ammo_shortgun":$scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun,
			"ammo_rifle":$scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRifle,
			"ammo_rimfire":$scope.values.createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire,
			"brand_winchester":$scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchester,
			"brandRemington":$scope.values.createNewBuyInterestPurchasingPreferencesBrandRemington,
			"brandFederal":$scope.values.createNewBuyInterestPurchasingPreferencesBrandFederal,
			"brandFiocchi":$scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchi,
			"brand_winchesterTwo":$scope.values.createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo,
			"brandRemingtonTwo":$scope.values.createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo,
			"brandFederalTwo":$scope.values.createNewBuyInterestPurchasingPreferencesBrandFederalTwo,
			"brandFiocchiTwo":$scope.values.createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo,
			"TpUsgovt":$scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment,
			"TpIntgovt":$scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternational,
			"TpUsgovtco":$scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial,
			"TpIntgovtco":$scope.values.createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial,
			"saletermImmediate":$scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate,
			"saletermLt30Days":$scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays,
			"saletermGt30Days":$scope.values.createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore

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
	var i,j=10;
$scope.addform=function(){
	for(var i=1;i<j+1;i++){
		i=i+1;
		console.log(i);
	}
         var btnhtml  =  '<div class="form-group col-sm-11 col-xs-11 ">'
			    +'<div class="col-sm-11 col-xs-11">'
					+'<div class="col-sm-1 text-right txt_res">'
					+	'<label class="f18 contol-label"><strong>1</strong></label>'
					+'</div>'
					+'<div class=" col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
						+'<div class="col-sm-3 ">'
						+	'<label class="f18"><b>Alert name</b></label>'
						+'</div>'
						+'<div class="col-sm-4">'
							+'<input type="text" name="alertName" ng-model="values.alertName'+i+'" class="form-control input-md" ng-minlength="4" ng-maxlength="20" required >'
						+	'<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.required && createNewBuyInterest.alertName.$dirty">Enter Alert Name.</span>'
							+'<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.minlength">Alert Name is to short.</span>'
							+'<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.maxlength">Alert Name is to long.</span> '
						+'</div>'
					+'</div>'
                +'</div>'
			+'</div>'
			+'<div class="form-group col-sm-11 col-xs-11  col-sm-offset-0 ">'
               + '<div class="col-sm-11 col-xs-11">'
					+'<div class="col-sm-1 text-right txt_res">'
					+	'<label class="f18 contol-label"><strong>2</strong></label>'
					+'</div>'
					+'<div class="col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
					+	'<div class="col-sm-12">'
						+	'<label class="f18"><b>I m interested in</b></label>'
						+'</div>'
					+'</div>'
				+'</div> '  
           + '</div>'
			+'<div class="col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-1 ">'
              +  '<div class=" col-sm-6">'
				+	'<div class="btn-group " data-toggle="buttons">'
					+	'<label class="btn btn-default active "id="buy"  ng-click="transactionType(buy)">'
						+	'<input type="radio"  autocomplete="off " checked ng-model = "values.userinterestsbuying'+i+'" name="FreeForm "  value = "Yes" >Buying</label>'
					+	'<label class="btn btn-default"  id="sell" ng-click="transactionType(sell)">'
						+	'<input type="radio"  autocomplete="off " ng-model = "values.userinterestsselling'+i+'" name="FreeForm "  value = "No" >Selling</label>'
					+'</div>'
				+'</div>'
           + '</div>'
			+'<div class="form-group col-sm-11 col-xs-11 " style="margin-bottom:0px; margin-top:10px;">'
			 + '<div class="col-sm-11 col-xs-11">'
					+'<div class="col-sm-1 text-right txt_res">'
						+'<label class="f18 contol-label"><strong>3</strong></label>'
					+'</div>'
					+'<div class=" col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 " >'
						+'<div class="col-sm-12 ">'
						+	'<label class="f18"><b>Purchasing Preferences</b></label>  '
					+	'</div>'
					+'</div>'
				+'</div>'
           +' </div>'
          + ' <div class="form-group col-xs-12 col-sm-12 ">'
               + '<div class="form-group col-xs-12 col-sm-10 border_pack col-sm-offset-1" style="margin-top:0px">'
                   + '<div class=" col-xs-12 col-sm-12 f14">'
                       + '<div class="form-group col-xs-12 col-sm-12">'
                           + '<label class="f16"><b>Components</b></label>'
                        +'</div>'
                       + '<div class=" col-xs-12 col-sm-12 f14  ">'
                           + '<div class="col-sm-3">'
                              +  '<input   id="createNewBuyInterestPurchasingPreferencesComponentsSelectAll" ng-change="selectAll_type(PurCompType)" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll'+i+'" class="checkboxsize" type="checkbox" value="ComponentsSelectedall">'
                              +  '<label >Select all </label>'
                          +  '</div>'
                       +' </div>'
                       + '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         +  '<div class="col-sm-3">'
                            +    '<input id="createNewBuyInterestPurchasingPreferencesComponentsCase" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsCase'+i+'" class="ComponentsSelect checkboxsize" type="checkbox"  ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll" >'
                            +    '<label >Case  </label>'
                          +  '</div>'
                          +  '<div class="col-sm-3">'
                              +  '<input id="createNewBuyInterestPurchasingPreferencesComponentsProjectile" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsProjectile'+i+'"    class="ComponentsSelect checkboxsize" type="checkbox" value="Projectile"   ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll">'
                             +  ' <label >Projectile  </label>'
                         + '  </div>'
                          +  '<div class="col-sm-3">'
                             +   '<input id="createNewBuyInterestPurchasingPreferencesComponentsGunpowder" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsGunpowder'+i+'"  class="ComponentsSelect checkboxsize"  type="checkbox"  value="Gunpowder"   ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll">'
                            +    '<label >Gunpowder </label>'
                           + '</div>'
                            +'<div class="col-sm-3">'
                              +  '<input id="createNewBuyInterestPurchasingPreferencesComponentsGunpowderPrimer" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsPrimer'+i+'" class="ComponentsSelect checkboxsize" type="checkbox" value="Primer"   ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll">'
                             +   '<label >Primer </label>'
                           + '</div>'
                     +  ' </div>'
                       + '<div class="form-group col-xs-12 col-sm-12">'
                         +   '<label class="f16"><b>Ammo types</b></label>'
                       + '</div>'
                      + ' <div class=" col-xs-12 col-sm-12 f14  ">'
                           + '<div class="col-sm-3">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll" ng-change="selectAll_type(PurAmmoType)" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll'+i+'" class="checkboxsize"type="checkbox" value=""/>'
                              + ' <label >Select all </label>'
                           + '</div>'
                        +'</div>'
                        +'<div class="form-group col-xs-12 col-sm-12 f14  ">'
                           + '<div class="col-sm-3">'
                              +  '<input id="createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun'+i+'"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                              +  '<label >Handgun </label>'
                           + '</div>'
                          + ' <div class="col-sm-3">'
                            +  '  <input id="createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun'+i+'"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                                +'<label >Shotgun  </label>'
                           + '</div>'
                           + '<div class="col-sm-3">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesAmmoTypeRifle" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeRifle'+i+'"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                               + '<label >Rifle </label>'
                          + ' </div>'
                          + ' <div class="col-sm-3">'
                              +  '<input   id="createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire'+i+'" class="AmmoTypesSelect checkboxsize"  type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                             +   '<label >Rimfire</label>'
                           + '</div>'
                       + '</div>'
                      +  '<div class="form-group col-xs-12 col-sm-12">'
                       +     '<label class="f16"><b>Brand</b></label>'
                       + '</div>'
                       + '<div class=" col-xs-12 col-sm-12 f14  ">'
                      +      '<div class="col-sm-3">'
                        +        '<input id="createNewBuyInterestPurchasingPreferencesBrandSelectAll" ng-change="selectAll_type(PurBrand)"   ng-model="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll'+i+'"  class="checkboxsize"  type="checkbox" value=""/>'
                         +   '<label >Select all </label>'
                         +   '</div>'
                     +  '</div>'
                      + ' <div class="form-group col-xs-12 col-sm-12 f14  ">'
                         +  ' <div class="col-sm-3">'
						 + '<input   id="createNewBuyInterestPurchasingPreferencesBrandWinchester" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandWinchester'+i+'" class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll" >'
                           +   ' <label >Winchester  </label>'
                            +'</div>'
                           +' <div class="col-sm-3">'
                            +   ' <input   id="createNewBuyInterestPurchasingPreferencesBrandRemington" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandRemington'+i+'"  class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                               + '<label >Remington </label>'
                           + '</div>'
                            +'<div class="col-sm-3">'
                               +' <input id="createNewBuyInterestPurchasingPreferencesBrandFederal" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFederal'+i+'"    class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                               + '<label >Federal </label>'
                            +'</div>'
                          + ' <div class="col-sm-3">'
                              + ' <input id="createNewBuyInterestPurchasingPreferencesBrandFiocchi" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFiocchi'+i+'"    class=" BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                              +  '<label >Fiocchi </label>'
                           + '</div>'
                       +' </div>'
						+'<div class=" col-xs-12 col-sm-12 f14  ">'
                            +'<div class="col-sm-3">'
                               + '<input   id="createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo'+i+'" class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll" >'
                              +  '<label >Hornaday  </label>'
                           + '</div>'
                           + '<div class="col-sm-3">'
                               + '<input   id="createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo'+i+'"  class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                              + '<label >Remington </label>'
                           + '</div>'
                           + '<div class="col-sm-3">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesBrandFederalTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFederalTwo'+i+'"    class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                              +  '<label >Federal </label>'
                           + '</div>'
                            +'<div class="col-sm-3">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo'+i+'"    class=" BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                                +'<label >Fiocchi </label>'
                            +'</div>'
                       + '</div>'
                        +'<div class="form-group col-xs-12 col-sm-12">'
                           + '<label class="f16"><b>Trade partners</b></label>'
                       + '</div>'
                        +'<div class=" col-xs-12 col-sm-12 f14  ">'
                           + '<div class="col-sm-3">'
                              +  '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll" ng-change="selectAll_type(PurTradePart)"   ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll'+i+'" class="checkboxsize" type="checkbox" value=""/>'
                               + '<label >Select all </label>'
                            +'</div>'
                       + '</div>'
                      + ' <div class="form-group col-xs-12 col-sm-12 f14  ">'
                          + ' <div class="col-sm-3">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment'+i+'"  class="TradePartnersSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                               + '<label >US Government   </label>'
                           + '</div>'
                            +'<div class="col-sm-4">'
                              +  '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersInternational" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersInternational'+i+'"    class="TradePartnersSelect checkboxsize"type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                             +  ' <label >International Government </label>'
                           + '</div>'
                        +'</div>'
						 +'<div class=" col-xs-12 col-sm-12 f14  ">'
                           + '<div class="col-sm-3">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial'+i+'"  class="TradePartnersSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                              +  '<label >US Commercial   </label>'
                           + '</div>'
                          + ' <div class="col-sm-4">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial'+i+'"    class="TradePartnersSelect checkboxsize"type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                               + '<label >International Commercial </label>'
                           + '</div>'
                       + '</div>'
                       + '<div class="form-group col-xs-12 col-sm-12">'
                          +  '<label class="f16"><b>Terms of sale</b></label>'
                       + '</div>'
                       + '<div class=" col-xs-12 col-sm-12 f14  ">'
                           + '<div class="col-sm-3">'
                           + '<input id="createNewBuyInterestPurchasingPreferencesTermsOfSaleSelectAll" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleSelectAll'+i+'" ng-change="selectAll_type(PurTimeOfSale)"  class="checkboxsize" type="checkbox" value="" />'
                          +  '<label>Select all </label>'
                        +'</div>'
                   +' </div>'
                      +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         +   '<div class="col-sm-3">'
                              +  '<input  id="createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate'+i+'"   class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                              +  '<label>Immediate</label>'
                           + '</div>'
                          + ' <div class="col-sm-3">'
                               + '<input id="createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays'+i+'"  class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                              +  '<label >Less than 30 days</label>'
                           + '</div>'
                          + '<div class="col-sm-4">'
                             +  ' <input id="createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore'+i+'"  class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                           +    ' <label>Greater than 30 days</label>'
                          + ' </div>'
                       + '</div>'
                    +'</div>'
              + ' </div>'
          + ' </div>	'
			+'<div class="form-group col-xs-12 col-sm-6 col-sm-offset-2" >'
				+'<div class="form-group col-xs-6 col-sm-4 col-sm-offset-4">'
					+'<a class="btn btn-default btn-sm center-block img-wid-buy" id="createNewBuyInterestCancel" ng-model="values.createNewBuyInterestCancel'+i+'" href="{{hostname}}#/">Cancel </a>'
				+'</div>'
				+'<div class="form-group col-xs-6 col-sm-4">'
					+'<a class="btn btn-info btn-sm center-block img-wid-buy" id="createNewBuyInterestCreateAlert" ng-model="values.createNewBuyInterestCreateAlert'+i+'"  ng-disabled="createNewBuyInterest.$invalid" href="{{hostname}}#/">Create Alert</a>'
				+'</div>'
			+'</div>';
		 
		 
		 
		 //'<div class="form-group col-sm-11 col-xs-11 ">'
			   // + '<div class="col-sm-11 col-xs-11">'
					// +'<div class="col-sm-1 text-right txt_res">'
						// +'<label class="f18 contol-label"><strong>1</strong></label>'
					// +'</div>'
					// +'<div class=" col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
						// +'<div class="col-sm-3 ">'
							// +'<label class="f18"><b>Alert name</b></label>'
						// +'</div>'
						// +'<div class="col-sm-4">'
							// +'<input type="text" name="alertName" ng-model="values.alertName" class="form-control input-md" ng-minlength="4" ng-maxlength="20" required >'
							// +'<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.required && createNewBuyInterest.alertName.$dirty">Enter Alert Name.</span>'
							// +'<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.minlength">Alert Name is to short.</span>'
							// +'<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.maxlength">Alert Name is to long.</span>' 
						// +'</div>'
					// +'</div>'
                // +'</div>'
			// +'</div>'
			// +'<div class="form-group col-sm-11 col-xs-11  col-sm-offset-0 ">'
                // +'<div class="col-sm-11 col-xs-11">'
					// +'<div class="col-sm-1 text-right txt_res">'
						// +'<label class="f18 contol-label"><strong>2</strong></label>'
					// +'</div>'
					// +'<div class="col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
						// +'<div class="col-sm-12">'
							// +'<label class="f18"><b>Im interested in</b></label>'
						// +'</div>'
					// +'</div>'
				// +'</div>' 
            // +'</div>'
			// +'<div class="col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-1 ">'
                // +'<div class=" col-sm-6">'
					// +'<div class="btn-group " data-toggle="buttons">'
						// +'<label class="btn btn-default active "id="buy"  ng-click="transactionType(buy)">'
							// '<input type="radio"  autocomplete="off " checked ng-model = "values.userinterestsbuying" name="FreeForm "  value = "Yes" >Buying</label>'
						// +'<label class="btn btn-default"  id="sell" ng-click="transactionType(sell)">'
							// +'<input type="radio"  autocomplete="off " ng-model = "values.userinterestsselling" name="FreeForm "  value = "No" >Selling</label>'
					// +'</div>'
				// +'</div>'
            // +'</div>'
		    // +'<div class="form-group col-sm-11 col-xs-11 " style="margin-bottom:0px; margin-top:10px;">'
			  // +'<div class="col-sm-11 col-xs-11">'
					// +'<div class="col-sm-1 text-right txt_res">'
						// +'<label class="f18 contol-label"><strong>3</strong></label>'
					// +'</div>'
					// +'<div class=" col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 " >'
						// +'<div class="col-sm-12 ">'
							// +'<label class="f18"><b>Purchasing Preferences</b></label>' 
						// +'</div>'
					// +'</div>'
				// +'</div>'
            // +'</div>';


		// '<div class="form-group col-sm-11 col-xs-11">'
		     // + '<div class="col-sm-11 col-xs-11">'
               // +'<div class="col-sm-1 text-center">'
                 // +'<label class="f22">1</label>'
               // + '</div>'
                // + '<div class="form-group col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
                   // + '<div class="col-sm-2">'
                     // +   '<label class="f16"><b>Alert name</label></b>'
                   // + '</div>'
				     // + '<div class="col-sm-4">'
                      // +  '<input type="text" name="alertName" ng-model="values.alertName" class="form-control input-md" ng-minlength="4" ng-maxlength="20" required >'
                      // +  '<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.required && createNewBuyInterest.alertName.$dirty">Enter Alert Name.</span>'
                       // + '<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.minlength">Alert Name is to short.</span>'
                      // +  '<span class="err_style" ng-show="createNewBuyInterest.alertName.$error.maxlength">Alert Name is to long.</span>'
                   // + '</div>'
              // +  '</div>'
			  // + '</div>'
           // + '<div class="form-group col-sm-11 col-xs-11">'
             // +   '<div class="col-sm-1 text-center">'
              // +      '<label class="f22">2</label>'
               // + '</div>'
               // + '<div class="form-group col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 ">'
                   // + '<div class="col-sm-12">'
                      // +  '<label class="f16"><b>Im interested in</b></label>'
                  // +  '</div>'
				  // + '<div class="col-sm-6">'
                    // +    '<div class="btn-group " data-toggle="buttons">'
                           // + '<label class="btn btn-default active "id="buy"  ng-click="transactionType(buy)">'
                             // +   '<input type="radio"  autocomplete="off " checked ng-model = "values.userinterestsbuying" name="FreeForm "  value = "Yes" >Buying </label>'
                        // +   ' <label class="btn btn-default"  id="sell" ng-click="transactionType(sell)">'
                            // +    '<input type="radio"  autocomplete="off " ng-model = "values.userinterestsselling" name="FreeForm "  value = "No" >Selling</label>'
                    // +    '</div>'
                 // +  ' </div>'
              // +  '</div>'
           // + '</div>'
		   // + '<div class="form-group col-sm-11 col-xs-11">'
             // +   '<div class="col-sm-1 text-center">'
                  // + '</div>'
             // +   '<div class=" col-sm-11 col-xs-11 col-xs-offset-1 col-sm-offset-0 " >'
                // +   ' <div class="col-sm-12 ">'
                   // +    ' <label class="f16"><b>Purchasing Preferences</b></label>  '
                  // +  '</div>'
             // +   '</div>'
         // +   '</div>'
		 // + '<div class="form-group col-xs-12 col-sm-12 ">'
              // +  '<div class="form-group col-xs-12 col-sm-10 border_pack col-sm-offset-1 ">'
                 // +  ' <div class=" col-xs-12 col-sm-12 f14">'
                     // +   '<div class="form-group col-xs-12 col-sm-12">'
                        // +   ' <label class="f16"><b>Components</b></label>'
                      // +  '</div>'
                      // +  '<div class=" col-xs-12 col-sm-12 f14  ">'
                          // +  '<div class="col-sm-3">'
                             // +   '<input   id="createNewBuyInterestPurchasingPreferencesComponentsSelectAll" ng-change="selectAll_type(PurCompType)" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll" class="checkboxsize" type="checkbox" value="ComponentsSelectedall">'
                              // +  '<label >Select all </label>'
                           // + '</div>'
                     // +  ' </div>'
                      // +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                       // +    ' <div class="col-sm-3">'
                             // +  '<input id="createNewBuyInterestPurchasingPreferencesComponentsCase" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsCase" class="ComponentsSelect checkboxsize" type="checkbox"  ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll" >'
                              // +  '<label >Case  </label>'
                           // + '</div>'
                          // +  '<div class="col-sm-3">'
                           // + '<input id="createNewBuyInterestPurchasingPreferencesComponentsProjectile" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsProjectile"    class="ComponentsSelect checkboxsize" type="checkbox" value="Projectile"   ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll">'
                              // +  '<label >Projectile  </label>'
                         // +   '</div>'
                          // +  '<div class="col-sm-3">'
                            // +    '<input id="createNewBuyInterestPurchasingPreferencesComponentsGunpowder" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsGunpowder"  class="ComponentsSelect checkboxsize"  type="checkbox"  value="Gunpowder"   ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll">'
                           // +     '<label >Gunpowder </label>'
                          // +  '</div>'
                          // +  '<div class="col-sm-3">'
                               // + '<input id="createNewBuyInterestPurchasingPreferencesComponentsGunpowderPrimer" ng-model="values.createNewBuyInterestPurchasingPreferencesComponentsPrimer" class="ComponentsSelect checkboxsize" type="checkbox" value="Primer"   ng-checked="values.createNewBuyInterestPurchasingPreferencesComponentsSelectAll">'
                               // + '<label >Primer </label>'
                          // +  '</div>'
                       // + '</div>'
                     // +   '<div class="form-group col-xs-12 col-sm-12">'
                      // +      '<label class="f16"><b>Ammo types</b></label>'
                      // +  '</div>'
                      // + ' <div class="form-group col-xs-12 col-sm-12 f14  ">'
                         // +   '<div class="col-sm-3">'
                         // +       '<input id="createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll" ng-change="selectAll_type(PurAmmoType)" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll" class="checkboxsize"type="checkbox" value=""/>'
                             // +   '<label >Select all </label>'
                           // + '</div>'
                       // + '</div>'
                      // +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         // +   '<div class="col-sm-3">'
                             // +   '<input id="createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeHandgun"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                            // +   '<label >Handgun </label>'
                           // + '</div>'
                          // + '<div class="col-sm-3">'
                             // +   '<input id="createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeShotgun"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                              // +  '<label >Shotgun  </label>'
                           // + '</div>'
                          // +  '<div class="col-sm-3">'
                              // + '<input id="createNewBuyInterestPurchasingPreferencesAmmoTypeRifle" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeRifle"  class="AmmoTypesSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                             // +   '<label >Rifle </label>'
                          // +  '</div>'
                        // +  ' <div class="col-sm-3">'
                               // + '<input   id="createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire" ng-model="values.createNewBuyInterestPurchasingPreferencesAmmoTypeRimfire" class="AmmoTypesSelect checkboxsize"  type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesAmmoTypeSelectAll">'
                             // +  ' <label >Rimfire</label>'
                           // + '</div>'
                      // +  '</div>'
					  // + '<div class="form-group col-xs-12 col-sm-12">'
                        // +  ' <label class="f16"><b>Brand</b></label>'
                    // +   ' </div>'
                      // +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                          // +  '<div class="col-sm-3">'
                            // +   ' <input id="createNewBuyInterestPurchasingPreferencesBrandSelectAll" ng-change="selectAll_type(PurBrand)"   ng-model="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll"  class="checkboxsize"  type="checkbox" value=""/>'
                          // +  '<label >Select all </label>'
                          // +  '</div>'
                      // +  '</div>'
                      // +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                          // +  '<div class="col-sm-3">'
                            // +    '<input   id="createNewBuyInterestPurchasingPreferencesBrandWinchester" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandWinchester" class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll" >'
                            // +    '<label >Winchester  </label>'
                         // +   '</div>'
                          // +  '<div class="col-sm-3">'
                             // +   '<input   id="createNewBuyInterestPurchasingPreferencesBrandRemington" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandRemington"  class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                             // +   '<label >Remington </label>'
                           // + '</div>'
                          // +  '<div class="col-sm-3">'
                            // +    '<input id="createNewBuyInterestPurchasingPreferencesBrandFederal" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFederal"    class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                             // +   '<label >Federal </label>'
                          // +  '</div>'
                          // +  '<div class="col-sm-3">'
                            // +    '<input id="createNewBuyInterestPurchasingPreferencesBrandFiocchi" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFiocchi"    class=" BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                             // +   '<label >Fiocchi </label>'
                           // + '</div>'
                      // +  '</div>'
	                     // +'<div class="form-group col-xs-12 col-sm-12 f14  ">'
                           // + '<div class="col-sm-3">'
                             // +   '<input   id="createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandWinchesterTwo" class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll" >'
                             // +   '<label >Hornaday  </label>'
                           // + '</div>'
                           // + '<div class="col-sm-3">'
                              // +  '<input   id="createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandRemingtonTwo"  class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                              // +  '<label >Remington </label>'
                          // +  '</div>'
                           // + '<div class="col-sm-3">'
                              // +  '<input id="createNewBuyInterestPurchasingPreferencesBrandFederalTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFederalTwo"    class="BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                              // +  '<label >Federal </label>'
                          // +  '</div>'
                          // +  '<div class="col-sm-3">'
                              // +  '<input id="createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo" ng-model="values.createNewBuyInterestPurchasingPreferencesBrandFiocchiTwo"    class=" BrandSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesBrandSelectAll">'
                               // + '<label >Fiocchi </label>'
                          // +  '</div>'
                      // +  '</div>'
					  // +  '<div class="form-group col-xs-12 col-sm-12">'
                       // +     '<label class="f16"><b>Trade partners</b></label>'
                  // +     '</div>'
                    // +    '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         // +   '<div class="col-sm-3">'
                          // +      '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll" ng-change="selectAll_type(PurTradePart)"   ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll" class="checkboxsize" type="checkbox" value=""/>'
                          // +     ' <label >Select all </label>'
                         // +   '</div>'
                       // + '</div>'
                      // +  '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                        // +    '<div class="col-sm-3">'
                           // +   '  <input id="createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersUsGovernment"  class="TradePartnersSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                           // +    '<label >US Government   </label>'
                         // +  ' </div>'
                        // +   ' <div class="col-sm-4">'
                          // +      '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersInternational" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersInternational"    class="TradePartnersSelect checkboxsize"type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                          // +      '<label >International Government </label>'
                        // +    '</div>'
                     // +   '</div>'
	                 // +   '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                        // +    '<div class="col-sm-3">'
                          // +      '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersUsCommercial"  class="TradePartnersSelect checkboxsize" type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                           // +     '<label >US Commercial   </label>'
                        // +   ' </div>'
                          // +  '<div class="col-sm-4">'
                             // +  '<input id="createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial" ng-model="values.createNewBuyInterestPurchasingPreferencesTradePartnersInternationalCommercial"    class="TradePartnersSelect checkboxsize"type="checkbox" value="" ng-checked="values.createNewBuyInterestPurchasingPreferencesTradePartnersSelectAll">'
                            // +   '<label >International Commercial </label>'
                          // +  '</div>'
                      // +  '</div>'
					  // + '<div class="form-group col-xs-12 col-sm-12">'
                        // +    '<label class="f16"><b>Terms of sale</b></label>'
                     // +   '</div>'
                       // + '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                          // +  '<div class="col-sm-3">'
                          // +  '<input id="createNewBuyInterestPurchasingPreferencesTermsOfSaleSelectAll" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleSelectAll" ng-change="selectAll_type(PurTimeOfSale)"  class="checkboxsize" type="checkbox" value="" />'
                        // +    '<label>Select all </label>'
                     // +   '</div>'
                // +   ' </div>'
                       // + '<div class="form-group col-xs-12 col-sm-12 f14  ">'
                         // +   '<div class="col-sm-3">'
                             // +   '<input  id="createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleImmediate"   class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                            // +    '<label>Immediate</label>'
                          // +  '</div>'
                           // + '<div class="col-sm-3">'
                           // +     '<input id="createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleWithinThirtyDays"  class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                             // +   '<label >Less than 30 days</label>'
                           // + '</div>'
                         // +   '<div class="col-sm-4">'
                              // +  '<input id="createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore" ng-model="values.createNewBuyInterestPurchasingPreferencesTermsOfSaleThirtyDaysOrMore"  class="TermsofSaleSelect checkboxsize" type="checkbox" value=""/>'
                            // +    '<label>Greater than 30 days</label>'
                         // +   '</div>'
                     // +   '</div>'
                  // +  '</div>'
             // +   '</div>'
         // +   '</div>'	
          // + '<div class="form-group col-xs-12 col-sm-6 col-sm-offset-2" >'
		       // +'<div class="form-group col-xs-6 col-sm-4 col-sm-offset-4">'
		 // +          '<a class="btn btn-default btn-sm center-block img-wid-buy" id="createNewBuyInterestCancel" ng-model="values.createNewBuyInterestCancel" href="{{hostname}}#/">Cancel </a>'
	         // +  '</div>'
	         // +  '<div class="form-group col-xs-6 col-sm-4">'
	            // +	'<a class="btn btn-info btn-sm center-block img-wid-buy" id="createNewBuyInterestCreateAlert" ng-model="values.createNewBuyInterestCreateAlert"  ng-disabled="createNewBuyInterest.$invalid" href="{{hostname}}#/">Create Alert</a>'
	         // +  '</div>'
	  // +     '</div>';
					  
      var temp = $compile(btnhtml)($scope);
      angular.element(document.getElementById('dynamicInput')).append(temp);
    }
}]);