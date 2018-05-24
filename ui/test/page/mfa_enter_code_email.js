require('../page/profile.js');

 var mfaEnterCodeEmail = function(){
	 
	 this.temporaryIdentificationCode = function(value){
		 
		 element(by.model('values.mfaEmailTemporaryIdentificationCode')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.model('values.mfaEmailPassword')).sendKeys(value);
		 
	 };
	 
	 this.MfaCodeEmailSendCodeButton = function(){
		 
		 element(by.id('mfaEnterCodeEmailSendCode')).click();
		 
		 return require('./profile.js');
	 };
	 
	 
 };
 
 module.exports = new mfaEnterCodeEmail();