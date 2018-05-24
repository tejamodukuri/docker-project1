require('../page/external_systems_selected.js'); 

 var ExternalSystems1 = function(){
	 
 	this.regid = function(value){
		 
		 element(by.model('values.regid')).sendKeys(value);
	 };
	  
	/*this.connect_account_button = function(){
		 
		 element(by.id('connectButton')).click();
	 };
	   */
	 this.nextbutton = function(){
		 
		 element(by.id('externalSystemsConnectAccount')).click();
		 
		 return require('./external_systems_selected.js');
	 };
	 
	 
 };
 
 module.exports = new ExternalSystems1();