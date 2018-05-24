require('../page/confirmation.js'); 

 var tokenAccess = function(){
	 
	 this.eitherPublicAddress = function(value){
		 
		 element(by.model('values.eitherPublicAddress')).sendKeys(value);
	 };

	  this.zervPublicAddress = function(value){
		 
		 element(by.model('values.zervPublicAddress')).sendKeys(value);
	 };
	 
	 this.nextbutton = function(){
			 element(by.id('tokenAccessNext')).click();
			 return require('./confirmation.js');
		 };
	 
	 
 };
 
 module.exports = new tokenAccess();