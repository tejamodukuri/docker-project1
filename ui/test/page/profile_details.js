 require('../page/addinterests.js');  

 var profileDetails = function(){
	 
	 this.companyDescription = function(value){
		 
		 element(by.name('message')).sendKeys(value);
	 };
	  this.businessClassification = function(value){
		 
		 element(by.model('values.businessClassification')).sendKeys(value);
	 };
	   this.logo = function(value){
		 
		 element(by.model('values.logo')).sendKeys(value);
	 };
	 
	this.companyLogo = function(){
		 
		 element(by.id('companyLogo')).click();
		 
	 };
	 
	   this.facebook = function(value){
		 
		 element(by.model('values.facebook')).sendKeys(value);
	 };
	   this.instagram = function(value){
		 
		 element(by.model('values.instagram')).sendKeys(value);
	 };
	   this.twitter = function(value){
		 
		 element(by.model('values.twitter')).sendKeys(value);
	 };
	   this.accountType = function(value){
		 
		 element(by.model('values.accountType')).sendKeys(value);
	 };
	   this.EIN = function(value){
		 
		 element(by.model('values.companyInformationEin')).sendKeys(value);
	 };
	   this.FFLLicenseNumber = function(value){
		 
		 element(by.model('values.fflLicenseNumber')).sendKeys(value);
	 };
	   this.ATFLicenseNumber = function(value){
		 
		 element(by.model('values.atfLicenseNumber')).sendKeys(value);
	 };
	    this.ITARLicenseNumber = function(value){
		 
		 element(by.model('values.atarLicenseNumber')).sendKeys(value);
	 };
	    this.BusinessTaxLicenseNumber = function(value){
		 
		 element(by.model('values.businessTaxLicenseNumber')).sendKeys(value);
	 };
	 
/*  this.profileDetailsNext = function(){
		 
		 element(by.id('profileDetailsNext')).click();
		 return require('./addinterests.js');
	 }; */
	 
	 
	  this.nextbutton = function(){
		 
		 element(by.id('profileDetailsNext')).click();
		 
		 return require('./addinterests.js');
	 };
	 
	  
 };
 
 module.exports = new profileDetails();