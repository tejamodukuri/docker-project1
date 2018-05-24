/* require('../page/profile.js');
 */
 var intakeForm = function(){
	 
	 this.legalBusinessName = function(value){
		 
		 element(by.name('businessName')).sendKeys(value);
	 };
	 
	 this.description = function(value){
		 
		 element(by.model('values.description')).sendKeys(value);
		 
	 };
	this.businessTypeSupplier = function(){
		 
		 element(by.id('businessTypeSupplier')).click();
	 };
	   this.businessTypeRetailer = function(){
		 
		 element(by.id('businessTypeRetailer')).click();
	 };
	   this.businessTypeManufacturer = function(){
		 
		 element(by.id('businessTypeManufacturer')).click();
	 };
	   this.businessTypeConsumer = function(){
		 
		 element(by.id('businessTypeConsumer')).click();
	 };
	   this.businessTypeDistributor = function(){
		 
		 element(by.id('businessTypeDistributor')).click();
	 };
	   this.businessTypeGovernment = function(){
		 
		 element(by.id('businessTypeGovernment')).click();
	 };
	  this.country = function(value){
		 
		 element(by.model('values.country')).sendKeys(value);
		 
	 };
	  this.address = function(value){
		 
		 element(by.model('values.address')).sendKeys(value);
		 
	 };
	  this.zip = function(value){
		 
		 element(by.model('values.zip')).sendKeys(value);
		 
	 };
	  this.state = function(value){
		 
		 element(by.model('values.state')).sendKeys(value);
		 
	 };
	  this.city = function(value){
		 
		 element(by.model('values.city')).sendKeys(value);
		 
	 };
	 
	   this.email = function(value){
		 
		 element(by.model('values.email')).sendKeys(value);
		 
	 };
	 
	
	  this.phoneCode = function(value){
		 
		 element(by.model('values.phoneCode')).sendKeys(value);
		 
	 };
	  this.phoneNumber = function(value){
		 
		 element(by.model('values.phoneNumber')).sendKeys(value);
		 
	 };
	  this.firstName = function(value){
		 
		 element(by.model('values.firstName')).sendKeys(value);
		 
	 };
	   this.lastName = function(value){
		 
		 element(by.model('values.lastName')).sendKeys(value);
		 
	 };
	
	  this.purchasingPreferencesComponentsSelectAll = function(){
		 
		 element(by.id('purchasingPreferencesComponentsSelectAll')).click();
	 };
	   this.purchasingPreferencesAmmoTypeSelectAll = function(){
		 
		 element(by.id('AmmoTypesSelectAll')).click();
	 };
	   this.purchasingPreferencesBrandSelectAll = function(){
		 
		 element(by.id('purchasingPreferencesBrandSelectAll')).click();
	 };
	   this.purchasingPreferencesTradePartnersSelectAll = function(){
		 
		 element(by.id('purchasingPreferencesTradePartnersSelectAll')).click();
	 };
	
	  this.sellingPreferencesComponentsSelectAll = function(){
		 
		 element(by.id('sellingPreferencesComponentsSelectAll')).click();
	 };
	   this.sellingPreferencesAmmoTypeSelectAll = function(){
		 
		 element(by.id('sellingPreferencesAmmoTypeSelectAll')).click();
	 };
	   this.sellingPreferencesBrandSelectAll = function(){
		 
		 element(by.id('sellingPreferencesBrandSelectAll')).click();
	 };
	   this.sellingPreferencesTradePartnersSelectAll = function(){
		 
		 element(by.id('sellingPreferencesTradePartnersSelectAll')).click();
	 };
	 this.purchasingPreferencesTermsOfSale = function(){
		 
		 element(by.id('purchasingPreferencesTermsOfSale')).click();
	 };
	   this.sellingPreferencesTradeOfSaleSelectAll = function(){
		 
		 element(by.id('sellingPreferencesTradeOfSaleSelectAll')).click();
	 };
	
	
		   this.intakeSave = function(){
		 
		 element(by.id('intakeSave')).click();
	 };
	
	
	
	/*cgsbbcsbcsgchdschsgcbghs c*/
	 
	/*  this.loginButton = function(){
		 
		 element(by.id('accountLogin')).click();
		 
		/*  return require('./profile.js'); 
	 }; */
	 
	 
 };
 
 module.exports = new intakeForm();