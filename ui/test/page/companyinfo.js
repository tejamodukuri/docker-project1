require('../page/profile_details.js'); 

 var companyInfo = function(){
	 
	 this.legalBusinessName = function(value){
		 
		 element(by.name('legalBusinessName')).sendKeys(value);
	 };
	  this.doingBusinessAs = function(value){
		 
		 element(by.model('values.doingBusinessAs')).sendKeys(value);
	 };
	   this.corporateStructureDescription = function(value){
		 
		 element(by.model('values.userMessage')).sendKeys(value);
	 };
	   this.mailingAddress = function(value){
		 
		 element(by.model('values.mailingAddress')).sendKeys(value);
	 };
	    this.zip = function(value){
		 
		 element(by.model('values.zip')).sendKeys(value);
	 };
	 
	 
	   this.state = function(value){
		 
		 element(by.model('values.state')).sendKeys(value);
	 };
	   this.country = function(value){
		 
		 element(by.name('country')).sendKeys(value);
	 };
	   this.expirationDate = function(value){
		 
		 element(by.name('enddate')).sendKeys(value);
	 };
	   this.pscCode = function(value){
		 
		 element(by.model('values.pscCode')).sendKeys(value);
	 };
	   this.duns = function(value){
		 
		 element(by.model('values.duns')).sendKeys(value);
	 };
	   this.cage = function(value){
		 
		 element(by.model('values.cage')).sendKeys(value);
	 };
	this.iCertify = function(){
		 
		 element(by.id('iCertify')).click();
	 };
	 this.iDoNot = function(){
		 
		 element(by.id('iDoNot')).click();
	 };
	 
	  this.iAccept = function(){
		 
		 element(by.id('iAccept')).click();
	 };
	 
	 
 this.nextbutton = function(){
		 
		 element(by.id('companyInfoNext')).click();
		 
		 return require('./profile_details.js');
	 };
	 
	 
 };
 
 module.exports = new companyInfo();