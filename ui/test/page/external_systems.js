require('../page/companyinfo.js'); 
// var waitforangular = browser.sleep(500);
 var ExternalSystems = function(){
	 
 	this.waitforangular = function(){
		browser.sleep(500);
	}
	this.samdata = function(){ 		 
	 element(by.id('externalSystemsSAM')).click();
	 };
	  	this.regid = function(value){
		 
		 element(by.model('values.regid')).sendKeys(value);
	 };
	 
	 	 this.connectAccount = function(){
		 
		 element(by.id('externalSystemsConnectAccount')).click();
	 };
	  this.nextbutton = function(){
		 
		 element(by.id('externalSystemsNext')).click();
		 return require('./companyinfo.js');
	 };
	 
	 
	 
	 
 };
 
 module.exports = new ExternalSystems();