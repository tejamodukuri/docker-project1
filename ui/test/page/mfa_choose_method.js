
require('../page/mfa_enter_code_phone_text.js'); 
  require('../page/mfa_enter_code_email.js');
require('../page/mfa_enter_code_phone_call.js');
 var MfaChooseMethod = function(){

	 this.TextButton = function(){
		 element(by.id('text')).click();
	 }; 
	  this.emailButton = function(){
		 element(by.id('byemail')).click();
	 }; 
 	   this.callButton = function(){
		 element(by.id('call')).click();
	 }; 
	
	
  this.SendCodeButton = function(){
		 
		 element(by.id('mfaChooseMethodSendCode')).click();
			 return require('./mfa_enter_code_phone_text.js');
		
	 };	
	 this.SendCodeButton1 = function(){
		 
		 element(by.id('mfaChooseMethodSendCode')).click();
		  return require('./mfa_enter_code_email.js'); 
		
	 };	 
	  this.SendCodeButton2 = function(){
		 
		 element(by.id('mfaChooseMethodSendCode')).click();
		 return require('./mfa_enter_code_phone_call.js'); 
		
	 };	
	 
	 
 };
 
 module.exports = new MfaChooseMethod();