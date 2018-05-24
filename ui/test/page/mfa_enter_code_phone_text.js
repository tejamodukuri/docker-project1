require('../page/profile.js');

 var mfaEnterCodePhoneText = function(){
	 
	 this.temporaryIdentificationCode = function(value){
		 
		 element(by.name('temporaryIdentificationCode')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.model('values.mfaTextPassword')).sendKeys(value);
		 
	 };
	 
	 this.PhoneTextSendCodeButton = function(){
		 
		 element(by.id('mfaTextSendCode')).click();
		 
		 return require('./profile.js');
	 };
	 
	 
 };
 
 module.exports = new mfaEnterCodePhoneText();