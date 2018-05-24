require('../page/token_access.js'); 

 var addInterests = function(){
	 
	 this.alertName = function(value){
		 
		 element(by.name('alertName')).sendKeys(value);
	 };
	/*  	this.imInterestedInBuying = function(){
		 
		 element(by.id('buy')).click();
	 }; */

	  	this.imInterestedInBuying = function(){
		 
		 element(by.id('sell')).click();
	 };
	 
	 this.purchasingPreferencesComponentsSelectAll = function(){
		 
		 element(by.id('addInterestsPurchasingPreferencesComponentsSelectAll')).click();
	 };
	  this.purchasingPreferencesAmmoTypeSelectAll = function(){
		 
		 element(by.id('addInterestsPurchasingPreferencesAmmoTypeSelectAll')).click();
	 };
	  this.purchasingPreferencesBrandSelectAll = function(){
		 
		 element(by.id('addInterestsPurchasingPreferencesBrandSelectAll')).click();
	 };
	  this.purchasingPreferencesTradePartnersSelectAll = function(){
		 
		 element(by.id('addInterestsPurchasingPreferencesTradePartnersSelectAll')).click();
	 };
	   this.purchasingPreferencesTermsOfSaleImmediate = function(){
		 
		 element(by.id('addInterestsPurchasingPreferencesTermsOfSaleImmediate')).click();
	 };
	 
	 this.nextbutton = function(){
			 element(by.id('addInterestsNext')).click();
			 return require('./token_access.js');
		 };
	 
	 
 };
 
 module.exports = new addInterests();