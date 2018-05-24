
 require('../page/mfa_choose_method.js');

 var MfaRequest = function(){

	 this.mfaRequestNext = function(){
		 
		 element(by.id('mfaRequestNext')).click();
		 
		 return require('./mfa_choose_method.js');
	 };
	 
	 
 };
 
 module.exports = new MfaRequest();